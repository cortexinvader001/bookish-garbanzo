import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'
import TechStacks from '../components/TechStacks.jsx'

export default function Projects() {
  return (
    <section className="projects-section" id="projects-main-section">
      <div className="projects-header-block">
        <h2 className="section-title">Projects &amp; Ecosystem</h2>
        <p className="section-subtitle">A curated index of architecture, systems, and creative experiments.</p>
      </div>

      {/* Tech Stacks interactive floating balls section */}
      <TechStacks />

      {/* Projects Title and Grid with Moving Animated Borders */}
      <div className="projects-collection-header">
        <div className="projects-collection-title-wrap">
          <h3 className="projects-collection-title">Featured Builds</h3>
          <span className="projects-count-tag">{projects.length} PROJECTS DEPLOYED</span>
        </div>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <Link
            to={`/projects/${project.slug}`}
            className="project-card-wrapper"
            key={project.slug}
            id={`project-card-${project.slug}`}
          >
            <div className="project-card-inner">
              <div className="project-card-image">
                <img
                  src={project.image}
                  alt={project.title}
                  onError={(e) => {
                    e.currentTarget.onerror = null
                    e.currentTarget.src = 'https://placehold.co/640x400/0c0c0c/ffffff?text=' + encodeURIComponent(project.title)
                  }}
                />
                <div className="project-card-overlay">
                  <span className="project-view-badge">
                    Inspect Specs
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="project-card-body">
                {(project.tags || project.tech) && (project.tags || project.tech).length > 0 && (
                  <div className="project-tech-pills">
                    {(project.tags || project.tech).map((t) => (
                      <span key={t} className="project-tech-pill">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                <h3>{project.title}</h3>
                <p>{project.tagline}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

