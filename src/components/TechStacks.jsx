import { useState } from 'react'

export const stackList = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com',
    color: '#a371f7',
    bgGlow: 'rgba(163, 113, 247, 0.4)',
    accent: '#ffffff',
    category: 'Version Control & CI/CD',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    id: 'render',
    name: 'Render',
    url: 'https://render.com',
    color: '#46e3b7',
    bgGlow: 'rgba(70, 227, 183, 0.4)',
    accent: '#46e3b7',
    category: 'Cloud Hosting & Services',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M12 2L2.5 7.5v9L12 22l9.5-5.5v-9L12 2zm0 2.8l6.8 3.95-6.8 3.95-6.8-3.95L12 4.8zm-7.5 5.5l6.5 3.77v7.55l-6.5-3.77v-7.55zm15 7.55l-6.5 3.77v-7.55l6.5-3.77v7.55z" />
      </svg>
    ),
  },
  {
    id: 'vercel',
    name: 'Vercel',
    url: 'https://vercel.com',
    color: '#ffffff',
    bgGlow: 'rgba(255, 255, 255, 0.45)',
    accent: '#ffffff',
    category: 'Frontend Cloud & Edge',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
        <path d="M12 2L23 21H1L12 2z" />
      </svg>
    ),
  },
  {
    id: 'replit',
    name: 'Replit',
    url: 'https://replit.com',
    color: '#f26207',
    bgGlow: 'rgba(242, 98, 7, 0.4)',
    accent: '#f26207',
    category: 'Cloud IDE & Execution',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M2 3h9.6v5.4H2V3zm0 6.3h9.6v5.4H2V9.3zm10.4 0H22v5.4h-9.6V9.3zm-10.4 6.3h9.6V21H2v-5.4z" />
      </svg>
    ),
  },
  {
    id: 'google-apps-script',
    name: 'Google Apps Script',
    url: 'https://developers.google.com/apps-script',
    color: '#4285f4',
    bgGlow: 'rgba(66, 133, 244, 0.45)',
    accent: '#34a853',
    category: 'Workspace Cloud Automation',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="m10 13-2 2 2 2" />
        <path d="m14 17 2-2-2-2" />
      </svg>
    ),
  },
  {
    id: 'python',
    name: 'Python',
    url: 'https://www.python.org',
    color: '#ffc331',
    bgGlow: 'rgba(255, 195, 49, 0.4)',
    accent: '#387eb8',
    category: 'AI, Scripting & Backend',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M11.91 2c-5.08 0-4.76 2.2-4.76 2.2l.01 2.29h4.86v.69H5.16S2 6.82 2 11.93c0 5.12 2.76 4.93 2.76 4.93h1.65v-2.31s-.09-2.76 2.71-2.76h4.66s2.61.04 2.61-2.52V4.63S16.99 2 11.91 2zm-2.59 1.48a.9.9 0 110 1.8.9.9 0 010-1.8zm2.77 18.52c5.08 0 4.76-2.2 4.76-2.2l-.01-2.29h-4.86v-.69h6.86s3.16.36 3.16-4.75c0-5.12-2.76-4.93-2.76-4.93h-1.65v2.31s.09 2.76-2.71 2.76H12.7s-2.61-.04-2.61 2.52v4.64s-.6 2.63 4.48 2.63zm2.59-1.48a.9.9 0 110-1.8.9.9 0 010 1.8z" />
      </svg>
    ),
  },
  {
    id: 'cpp',
    name: 'C++',
    url: 'https://isocpp.org',
    color: '#00599c',
    bgGlow: 'rgba(0, 89, 156, 0.5)',
    accent: '#004482',
    category: 'High Performance & Systems',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M12 2L2 7.77v8.46L12 22l10-5.77V7.77L12 2zm0 2.31l7.69 4.44-2.69 1.55-5-2.89-5 2.89-2.69-1.55L12 4.31zM9.5 13.5A2.5 2.5 0 0112 11a2.49 2.49 0 012.3 1.5h2.15A4.5 4.5 0 0012 9a4.5 4.5 0 00-4.5 4.5A4.5 4.5 0 0012 18a4.5 4.5 0 004.45-3.5h-2.15A2.5 2.5 0 0112 16a2.5 2.5 0 01-2.5-2.5zm8.5-1.5h1v1h-1v1h-1v-1h-1v-1h1v-1h1v1zm3 0h1v1h-1v1h-1v-1h-1v-1h1v-1h1v1z" />
      </svg>
    ),
  },
  {
    id: 'react',
    name: 'React',
    url: 'https://react.dev',
    color: '#00d8ff',
    bgGlow: 'rgba(0, 216, 255, 0.45)',
    accent: '#61dafb',
    category: 'UI & Reactive Architecture',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="30" height="30">
        <ellipse cx="12" cy="12" rx="10" ry="4.2" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
  },
]

export default function TechStacks() {
  const [hoveredStack, setHoveredStack] = useState(null)

  return (
    <div className="stacks-wrapper">
      <div className="stacks-header-area">
        <div className="stacks-title-row">
          <span className="stacks-badge">CORE TECH & ECOSYSTEM</span>
          <span className="stacks-hint">Hover spheres to inspect &bull; Click to launch documentation</span>
        </div>
      </div>

      <div className="stacks-arena" id="stacks-arena">
        {stackList.map((item, index) => {
          const isHovered = hoveredStack === item.id

          return (
            <a
              key={item.id}
              id={`stack-ball-${item.id}`}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`stack-ball stack-ball-${index + 1} ${isHovered ? 'is-hovered' : ''}`}
              style={{
                '--brand-color': item.color,
                '--brand-glow': item.bgGlow,
              }}
              onMouseEnter={() => setHoveredStack(item.id)}
              onMouseLeave={() => setHoveredStack(null)}
              aria-label={`${item.name} (${item.category})`}
            >
              <div className="ball-sphere">
                <div className="ball-specular" />
                <div className="ball-inner-glow" />
                <div className="ball-icon-wrapper">{item.icon}</div>
                <div className="ball-collision-ring" />
              </div>
              <div className="ball-label-tag">
                <span className="ball-name">{item.name}</span>
                <span className="ball-ext-icon">&nearr;</span>
              </div>
            </a>
          )
        })}
      </div>

      {hoveredStack && (
        <div className="stack-active-info">
          {(() => {
            const active = stackList.find((s) => s.id === hoveredStack)
            return (
              active && (
                <div className="stack-active-banner">
                  <span className="active-dot" style={{ background: active.color }} />
                  <span className="active-title">{active.name}</span>
                  <span className="active-divider">&mdash;</span>
                  <span className="active-category">{active.category}</span>
                  <span className="active-url">({new URL(active.url).hostname})</span>
                </div>
              )
            )
          })()}
        </div>
      )}
    </div>
  )
}
