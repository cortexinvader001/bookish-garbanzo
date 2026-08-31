import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ScrollCue from '../components/ScrollCue.jsx'
import { projects, about, profile, contacts } from '../data/projects.js'

export default function Home() {
  const featured = projects[0]
  const location = useLocation()

  // Smooth scroll to #aboutme if hash is present
  useEffect(() => {
    if (location.hash === '#aboutme') {
      const el = document.getElementById('aboutme')
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    }
  }, [location.hash])

  const scrollToAbout = (e) => {
    e.preventDefault()
    const el = document.getElementById('aboutme')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <div className="hero">
        <div className="hero-left">
          <h1>
            Kolawole
            <br />
            Suleiman
          </h1>
          <p className="tagline">{profile.tagline}</p>
          <div className="underline" />

          <div className="hero-actions-row">
            <Link to="/projects" className="cta" id="home-explore-btn">
              Explore Projects
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
            <a href="#aboutme" onClick={scrollToAbout} className="cta cta-outline hero-about-link" id="home-about-btn">
              About Me
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>

        {featured && (
          <div className="hero-right">
            <img
              className="laptop"
              src={featured.image}
              alt={`MacBook Pro mockup displaying the ${featured.title} project splash screen`}
              onError={(e) => {
                e.currentTarget.onerror = null
                e.currentTarget.src = 'https://placehold.co/640x420/0a0a0a/ffffff?text=Laptop+Mockup'
              }}
            />
          </div>
        )}
      </div>

      <ScrollCue />

      {/* About Me & Notes Section */}
      <section id="aboutme" className="about-section">
        <div className="about-header-block">
          <span className="about-badge">SYSTEMS &amp; VISION</span>
          <h2 className="section-title">{about.title || 'About Me'}</h2>
          <p className="section-subtitle">
            {about.subtitle}
          </p>
        </div>

        <div className="about-main-card">
          <div className="about-main-glow" />
          <div className="about-main-body">
            <div className="about-role-tag">
              <span className="about-role-dot" />
              {profile.role}
            </div>
            <p className="about-bio-text">{about.bio}</p>
            <div className="about-meta-row">
              <div className="about-meta-item">
                <span className="meta-label">Location</span>
                <span className="meta-value">{profile.location}</span>
              </div>
              <div className="about-meta-item">
                <span className="meta-label">Status</span>
                <span className="meta-value text-emerald-400">Open for Collaborations</span>
              </div>
              <div className="about-meta-item">
                <span className="meta-label">Direct Contact</span>
                <a href={`mailto:${profile.email}`} className="meta-value meta-email-link">
                  {profile.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Notes Grid */}
        <div className="about-notes-area">
          <h3 className="about-notes-title">Architectural Notes &amp; Core Tenets</h3>
          <div className="about-notes-grid">
            {about.notes && about.notes.map((note, idx) => (
              <div key={note.id || idx} className="about-note-card" id={`note-card-${note.id || idx}`}>
                <div className="note-card-header">
                  <span className="note-number">0{idx + 1}</span>
                  <h4 className="note-title">{note.title}</h4>
                </div>
                <p className="note-desc">{note.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick connect footer row in about section */}
        <div className="about-connect-strip">
          <div className="about-connect-text">
            <h4>Ready to build or collaborate?</h4>
            <p>Explore full project specifications or connect on social platforms.</p>
          </div>
          <div className="about-connect-buttons">
            <Link to="/projects" className="cta">
              View All Projects
            </Link>
            <Link to="/contact" className="cta cta-outline">
              Contact Channels
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

