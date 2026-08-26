export default function ScrollCue() {
  return (
    <div className="scroll-cue">
      <div className="mouse" />
      <div className="chevrons">
        <svg viewBox="0 0 14 8" fill="none">
          <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <svg viewBox="0 0 14 8" fill="none">
          <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}
