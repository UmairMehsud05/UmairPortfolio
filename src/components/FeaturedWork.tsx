import { useRef } from 'react'
import { featuredProjects, secondaryProjects, type Project } from '../data/content'
import { useSectionReveal } from '../hooks/useSectionReveal'
import { TiltCard } from './TiltCard'

function ProjectCard({ project, index }: { project: Project; index: string }) {
  return (
    <TiltCard className="featured-card" maxTilt={4} scale={1.01}>
      <div className="featured-card-top">
        <span className="featured-card-num">{index}</span>
        <span className="featured-layer-badge">{project.layerLabel ?? project.category}</span>
      </div>

      <h3 className="featured-card-title">{project.title}</h3>
      <p className="featured-card-summary">{project.summary}</p>

      {project.outcome ? (
        <div className="featured-card-outcome">
          <span className="outcome-label">Key Impact</span>
          <p>{project.outcome}</p>
        </div>
      ) : null}

      {project.highlights?.length ? (
        <ul className="featured-card-highlights">
          {project.highlights.map((item) => (
            <li key={item}>
              <span className="bullet-chevron">›</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}

      <div className="featured-card-footer">
        <ul className="featured-tags-list">
          {project.stack.map((tech) => (
            <li key={tech} className="featured-tag-pill">
              {tech}
            </li>
          ))}
        </ul>

        <div className="featured-card-status">
          <span className="status-dot-pulse" aria-hidden="true" />
          <span>{project.role}</span>
        </div>
      </div>
    </TiltCard>
  )
}

export function FeaturedWork() {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef)

  return (
    <section className="section work-section" id="work" ref={rootRef}>
      <div className="container">
        <header className="section-head" data-reveal>
          <span className="section-eyebrow">01 / Portfolio</span>
          <h2 className="section-title">
            Featured <span className="text-gradient">Production Work</span>
          </h2>
          <p className="section-lead">
            Production systems delivered at Fidsor and Dynamics 360 spanning full-stack web platforms,
            desktop point-of-sale clients, and enterprise ERP integration pipelines.
          </p>
        </header>

        <div className="featured-grid" data-reveal>
          {featuredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={`0${idx + 1}`}
            />
          ))}
        </div>

        <div className="additional-projects-wrap" data-reveal>
          <div className="additional-head">
            <div>
              <h3 className="additional-title">Personal &amp; Academic Systems</h3>
              <p className="additional-sub">
                Complete open-source MVC, desktop, and management systems on GitHub.
              </p>
            </div>
          </div>

          <div className="secondary-grid">
            {secondaryProjects.map((project) => (
              <TiltCard key={project.id} className="secondary-card" maxTilt={5}>
                <div className="secondary-card-header">
                  <span className="secondary-category">{project.category}</span>
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="secondary-github-link"
                      aria-label={`${project.title} on GitHub`}
                    >
                      <span>GitHub</span>
                      <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  ) : (
                    <span className="secondary-private">Client Project</span>
                  )}
                </div>

                <h4 className="secondary-title">{project.title}</h4>
                <p className="secondary-summary">{project.summary}</p>

                <div className="secondary-tags">
                  {project.stack.map((t) => (
                    <span key={t} className="secondary-tag-pill">{t}</span>
                  ))}
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

