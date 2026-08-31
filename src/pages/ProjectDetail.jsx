import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects.js'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <section className="project-detail">
        <h2 className="section-title">Project not found</h2>
        <Link to="/projects" className="cta" style={{ marginTop: 24 }}>
          Back to Projects
        </Link>
      </section>
    )
  }

  const index = projects.findIndex((p) => p.slug === slug)
  const next = projects[(index + 1) % projects.length]

  return (
    <section className="project-detail">
      <Link to="/projects" className="back-link">← Back to Projects</Link>

      <h1 className="project-detail-title">{project.title}</h1>
      <p className="project-detail-tagline">{project.tagline}</p>

      <img className="project-detail-image" src={project.image} alt={project.title} />

      <div className="project-detail-body">
        <p>{project.description}</p>

        {(project.tags || project.tech)?.length > 0 && (
          <ul className="tech-list">
            {(project.tags || project.tech).map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}

        <div className="project-detail-links">
          {project.links?.live && (
            <a href={project.links.live} className="cta" target="_blank" rel="noreferrer">
              Live Demo
            </a>
          )}
          {project.links?.code && (
            <a href={project.links.code} className="cta cta-outline" target="_blank" rel="noreferrer">
              View Code
            </a>
          )}
        </div>
      </div>

      {next && next.slug !== project.slug && (
        <Link to={`/projects/${next.slug}`} className="next-project">
          Next project: {next.title} →
        </Link>
      )}
    </section>
  )
}
