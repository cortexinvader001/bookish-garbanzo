export default function Contact() {
  return (
    <section className="contact-section">
      <h2 className="section-title">Contact</h2>
      <p className="section-subtitle">
        Have a project in mind, or just want to say hi? Reach out.
      </p>

      <div className="contact-links">
        <a href="mailto:hello@example.com" className="cta">
          Email Me
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer" className="cta cta-outline">
          GitHub
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="cta cta-outline">
          LinkedIn
        </a>
      </div>
    </section>
  )
}
