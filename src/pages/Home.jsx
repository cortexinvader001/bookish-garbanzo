import { Link } from 'react-router-dom'
import ScrollCue from '../components/ScrollCue.jsx'
import { projects } from '../data/projects.js'

export default function Home() {
  const featured = projects[0]

  return (
    <>
      <div className="hero">
        <div className="hero-left">
          <h1>
            Kolawole
            <br />
            Suleiman
          </h1>
          <p className="tagline">chronophobic yet optimistic.</p>
          <div className="underline" />

          <Link to="/projects" className="cta">
            Explore Projects
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
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
    </>
  )
}
