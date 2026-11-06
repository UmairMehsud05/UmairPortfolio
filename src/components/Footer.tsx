import { profile } from '../data/content'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-brand">
            © {year} <strong>{profile.name}</strong> · {profile.role}
          </p>
          <p className="footer-location">
            {profile.location} · Open to opportunities (Remote / On-site)
          </p>
        </div>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <span aria-hidden="true"> · </span>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <span aria-hidden="true"> · </span>
          <a href={`mailto:${profile.email}`}>
            Email
          </a>
          <span aria-hidden="true"> · </span>
          <a href={profile.cvHref} download>
            Resume (PDF)
          </a>
        </div>
      </div>
    </footer>
  )
}
