import { contacts, profile } from '../data/projects.js'

function getPlatformIcon(iconName) {
  switch (iconName) {
    case 'github':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      )
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      )
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      )
    case 'threads':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M12.186 24C5.467 24 0 18.533 0 11.814 0 5.094 5.467 0 12.186 0c6.643 0 11.899 5.086 11.899 11.666 0 .543-.038 1.082-.115 1.616-.27 1.884-1.127 3.593-2.483 4.943-1.579 1.572-3.69 2.458-5.945 2.496-2.585.044-4.887-1.109-6.155-3.083l1.838-1.258c.957 1.49 2.686 2.36 4.607 2.327 1.637-.027 3.17-.674 4.316-1.817.994-.99 1.637-2.247 1.85-3.619.055-.353.082-.712.082-1.072 0-5.32-4.225-9.646-9.895-9.646-5.503 0-9.98 4.477-9.98 9.98 0 5.503 4.477 9.98 9.98 9.98 3.518 0 6.645-1.826 8.361-4.882l1.93 1.085C19.789 21.758 16.208 24 12.186 24zm-.008-16.942c-2.73 0-4.942 2.213-4.942 4.943 0 2.73 2.212 4.942 4.942 4.942 2.378 0 4.38-1.688 4.84-3.957.067-.329.1-.667.1-1.01 0-2.705-2.212-4.918-4.94-4.918zm0 7.864c-1.611 0-2.922-1.31-2.922-2.921 0-1.612 1.311-2.922 2.922-2.922 1.612 0 2.922 1.31 2.922 2.922 0 1.611-1.31 2.921-2.922 2.921z" />
        </svg>
      )
    case 'mail':
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      )
  }
}

export default function Contact() {
  return (
    <section className="contact-section" id="contact-main-section">
      <div className="contact-header-block">
        <span className="contact-badge">GET IN TOUCH</span>
        <h2 className="section-title">Connect &amp; Collaborate</h2>
        <p className="section-subtitle">
          Have a project proposal, technical inquiry, or want to explore collaboration? Reach out through any channel below.
        </p>
      </div>

      <div className="contact-grid">
        {contacts.map((c) => (
          <a
            key={c.platform}
            href={c.url}
            target={c.url.startsWith('mailto:') ? '_self' : '_blank'}
            rel="noreferrer"
            className="contact-card"
            style={{
              '--card-brand': c.color,
              '--card-accent': c.accent,
            }}
            id={`contact-card-${c.platform.toLowerCase()}`}
          >
            <div className="contact-card-glow" />
            <div className="contact-card-icon-box">
              {getPlatformIcon(c.icon)}
            </div>
            <div className="contact-card-info">
              <div className="contact-platform-row">
                <span className="contact-platform-name">{c.platform}</span>
                <span className="contact-card-arrow">&nearr;</span>
              </div>
              <span className="contact-handle">{c.handle}</span>
              <p className="contact-description">{c.description}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="contact-direct-box">
        <div className="contact-direct-content">
          <div className="contact-direct-status">
            <span className="status-indicator-dot" />
            <span className="status-text">Available for select projects &amp; engineering roles</span>
          </div>
          <p className="contact-direct-subtext">
            Prefer direct messaging? Drop a line to <a href={`mailto:${profile.email}`} className="contact-inline-email">{profile.email}</a>.
          </p>
        </div>
        <a href={`mailto:${profile.email}`} className="cta contact-send-btn">
          Send Email
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  )
}

