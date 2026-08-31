import { useEffect, useRef } from 'react'
import { Renderer, Program, Mesh, Geometry, Triangle, Texture, RenderTarget } from 'ogl'

const MAX_WAVES = 100
const QUALITY_SCALE = 0.55
const START_SCALE = 1.5
const LIFE_CONSTANT = Math.log(500)

const waveVertex = `
precision highp float;
attribute vec2 position;
attribute vec2 uv;
attribute vec2 iOffset;
attribute vec2 iScale;
attribute float iOpacity;

varying vec2 vUv;
varying float vOpacity;

void main() {
  vUv = uv;
  vOpacity = iOpacity;
  gl_Position = vec4(iOffset + position * iScale, 0.0, 1.0);
}
`

const waveFragment = `
precision highp float;
varying vec2 vUv;
varying float vOpacity;

uniform float uRings;

const float PI = 3.141592653589793;
const float EDGE = 0.006737947;

void main() {
  vec2 p = vUv * 2.0 - 1.0;
  float r = dot(p, p);
  if (r > 1.0) discard;

  float brush = (exp(-r * 5.0) - EDGE) / (1.0 - EDGE);
  brush *= 0.55 + 0.45 * cos(sqrt(r) * PI * 2.0 * uRings);

  gl_FragColor = vec4(vec3(brush * vOpacity * vOpacity), 1.0);
}
`

const screenVertex = `
precision highp float;
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`

const compositeFragment = `
precision highp float;

varying vec2 vUv;

uniform sampler2D uTexture;
uniform sampler2D uDisplacement;
uniform vec2 uResolution;
uniform vec2 uTextureSize;
uniform vec2 uTexel;
uniform float uStrength;
uniform float uSwirl;
uniform float uGlint;

vec2 coverUV(vec2 uv) {
  vec2 safe = max(uTextureSize, vec2(1.0));
  vec2 s = uResolution / safe;
  vec2 scaledSize = safe * max(s.x, s.y);
  vec2 offset = (uResolution - scaledSize) * 0.5;
  return (uv * uResolution - offset) / scaledSize;
}

void main() {
  float amount = texture2D(uDisplacement, vUv).r;
  vec2 base = coverUV(vUv);

  float theta = amount * uSwirl * 6.28318530718;
  vec2 dir = vec2(sin(theta), cos(theta));
  vec2 push = dir * amount * uStrength;

  vec3 color = texture2D(uTexture, base + push).rgb;

  if (uGlint > 0.001) {
    float ex = texture2D(uDisplacement, vUv + vec2(uTexel.x, 0.0)).r
             - texture2D(uDisplacement, vUv - vec2(uTexel.x, 0.0)).r;
    float ey = texture2D(uDisplacement, vUv + vec2(0.0, uTexel.y)).r
             - texture2D(uDisplacement, vUv - vec2(0.0, uTexel.y)).r;

    vec3 normal = normalize(vec3(-ex * 26.0, -ey * 26.0, 1.0));
    vec3 light = normalize(vec3(-0.35, 0.55, 1.0));
    float raw = pow(max(dot(normal, light), 0.0), 22.0);
    color += vec3(1.0) * raw * uGlint;
  }

  gl_FragColor = vec4(color, 1.0);
}
`

export default function RippleBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Respect users who've asked for reduced motion.
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    let renderer
    let gl
    try {
      renderer = new Renderer({
        canvas,
        alpha: true,
        antialias: false,
        dpr: Math.min(window.devicePixelRatio || 1, 2),
      })
      gl = renderer.gl
    } catch (err) {
      console.warn('WebGL initialization skipped:', err)
      return
    }

    if (!gl) return
    gl.clearColor(0, 0, 0, 0)

    const offsets = new Float32Array(MAX_WAVES * 2)
    const scales = new Float32Array(MAX_WAVES * 2)
    const opacities = new Float32Array(MAX_WAVES)

    const waves = Array.from({ length: MAX_WAVES }, () => ({
      x: 0,
      y: 0,
      scale: START_SCALE,
      target: START_SCALE,
      size: 1,
      opacity: 0,
    }))

    let current = 0
    let width = 1
    let height = 1
    let previousX = 0
    let previousY = 0
    let lastWaveTime = 0
    let isCleanedUp = false

    let geometry
    let waveProgram
    let waveMesh
    let displacementTarget
    let baseTexture
    let compositeMesh
    const compositeUniforms = {}

    try {
      geometry = new Geometry(gl, {
        position: {
          size: 2,
          data: new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
        },
        uv: {
          size: 2,
          data: new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]),
        },
        iOffset: { instanced: 1, size: 2, data: offsets },
        iScale: { instanced: 1, size: 2, data: scales },
        iOpacity: { instanced: 1, size: 1, data: opacities },
      })

      waveProgram = new Program(gl, {
        vertex: waveVertex,
        fragment: waveFragment,
        uniforms: { uRings: { value: 4 } },
        transparent: true,
        depthTest: false,
        depthWrite: false,
        cullFace: false,
      })

      waveProgram.setBlendFunc(gl.ONE, gl.ONE)

      waveMesh = new Mesh(gl, {
        geometry,
        program: waveProgram,
        frustumCulled: false,
      })

      displacementTarget = new RenderTarget(gl, {
        width: 2,
        height: 2,
        depth: false,
        minFilter: gl.LINEAR,
        magFilter: gl.LINEAR,
        wrapS: gl.CLAMP_TO_EDGE,
        wrapT: gl.CLAMP_TO_EDGE,
      })

      // Transparent 1x1 texture as the compositing source, so the WebGL
      // layer produces subtle light ripples without replacing the CSS background.
      baseTexture = new Texture(gl, {
        generateMipmaps: false,
        minFilter: gl.LINEAR,
        magFilter: gl.LINEAR,
        wrapS: gl.CLAMP_TO_EDGE,
        wrapT: gl.CLAMP_TO_EDGE,
      })

      const pixel = new Uint8Array([5, 5, 5, 255])
      baseTexture.image = pixel
      baseTexture.width = 1
      baseTexture.height = 1

      compositeUniforms.uTexture = { value: baseTexture }
      compositeUniforms.uDisplacement = { value: displacementTarget.texture }
      compositeUniforms.uResolution = { value: [1, 1] }
      compositeUniforms.uTextureSize = { value: [1, 1] }
      compositeUniforms.uTexel = { value: [1, 1] }
      compositeUniforms.uStrength = { value: 0.045 }
      compositeUniforms.uSwirl = { value: 0.65 }
      compositeUniforms.uGlint = { value: 0.9 }

      compositeMesh = new Mesh(gl, {
        geometry: new Triangle(gl),
        program: new Program(gl, {
          vertex: screenVertex,
          fragment: compositeFragment,
          uniforms: compositeUniforms,
          transparent: true,
          depthTest: false,
          depthWrite: false,
        }),
      })
    } catch (err) {
      console.warn('WebGL shader/mesh initialization error:', err)
      return
    }

    function resize() {
      if (isCleanedUp || !renderer) return
      width = Math.max(1, window.innerWidth)
      height = Math.max(1, window.innerHeight)

      renderer.setSize(width, height)
      if (compositeUniforms.uResolution) {
        compositeUniforms.uResolution.value = [width, height]
      }

      const fieldW = Math.max(2, Math.round(width * QUALITY_SCALE))
      const fieldH = Math.max(2, Math.round(height * QUALITY_SCALE))

      if (displacementTarget) {
        displacementTarget.setSize(fieldW, fieldH)
      }
      if (compositeUniforms.uTexel) {
        compositeUniforms.uTexel.value = [1 / fieldW, 1 / fieldH]
      }
    }

    function addWave(clientX, clientY, power = 1) {
      const wave = waves[current]
      current = (current + 1) % MAX_WAVES

      wave.x = clientX
      wave.y = height - clientY
      wave.scale = START_SCALE * power
      wave.target = START_SCALE * 5 * power
      wave.size = 145
      wave.opacity = 0.8
    }

    function handlePointerMove(event) {
      const now = performance.now()
      if (now - lastWaveTime < 38) return

      const dx = event.clientX - previousX
      const dy = event.clientY - previousY

      if (Math.hypot(dx, dy) > 12) {
        addWave(event.clientX, event.clientY, 0.9)
        previousX = event.clientX
        previousY = event.clientY
        lastWaveTime = now
      }
    }

    function handlePointerDown(event) {
      addWave(event.clientX, event.clientY, 1.8)
    }

    window.addEventListener('resize', resize, { passive: true })
    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('pointerdown', handlePointerDown, { passive: true })

    resize()

    let raf = 0
    let previousTime = 0

    function loop(now) {
      if (isCleanedUp) return

      raf = requestAnimationFrame(loop)

      if (gl.isContextLost && gl.isContextLost()) return

      const delta = previousTime ? Math.min(0.05, (now - previousTime) / 1000) : 0
      previousTime = now

      const growth = 1 - Math.exp(-delta * 1.09)
      const decay = Math.exp((-delta * LIFE_CONSTANT) / 3)

      for (let i = 0; i < MAX_WAVES; i++) {
        const wave = waves[i]

        if (wave.opacity <= 0) {
          opacities[i] = 0
          continue
        }

        wave.opacity *= decay
        wave.scale += (wave.target - wave.scale) * growth

        if (wave.opacity < 0.002) {
          wave.opacity = 0
          opacities[i] = 0
          continue
        }

        const half = (wave.scale * wave.size) / 2

        offsets[i * 2] = (wave.x / width) * 2 - 1
        offsets[i * 2 + 1] = (wave.y / height) * 2 - 1

        scales[i * 2] = (half / width) * 2
        scales[i * 2 + 1] = (half / height) * 2

        opacities[i] = wave.opacity
      }

      if (geometry?.attributes?.iOffset) {
        geometry.attributes.iOffset.needsUpdate = true
        geometry.attributes.iScale.needsUpdate = true
        geometry.attributes.iOpacity.needsUpdate = true
      }

      try {
        renderer.render({ scene: waveMesh, target: displacementTarget, clear: true })
        renderer.render({ scene: compositeMesh, clear: true })
      } catch {
        // Context might have been invalidated
      }
    }

    raf = requestAnimationFrame(loop)

    return () => {
      isCleanedUp = true
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [])

  return <canvas ref={canvasRef} id="rippleCanvas" aria-hidden="true" />
}
