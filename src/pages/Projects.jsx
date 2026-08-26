import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <section className="projects-section">
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">A selection of things I've built.</p>

      <div className="project-grid">
        {projects.map((project) => (
          <Link to={`/projects/${project.slug}`} className="project-card" key={project.slug}>
            <div className="project-card-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-card-body">
              <h3>{project.title}</h3>
              <p>{project.tagline}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
