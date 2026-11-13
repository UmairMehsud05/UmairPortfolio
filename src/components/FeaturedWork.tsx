import { useRef, useState } from 'react'
import { featuredProjects, secondaryProjects, type Project } from '../data/content'
import { useSectionReveal } from '../hooks/useSectionReveal'
import { CaseStudyDrawer } from './CaseStudyDrawer'
import { TiltCard } from './TiltCard'

function CaseStudyCard({
  project,
  index,
  onOpenCaseStudy,
}: {
  project: Project
  index: string
  onOpenCaseStudy: (project: Project) => void
}) {
  return (
    <TiltCard className="featured-card" maxTilt={3} scale={1.01}>
      <div className="featured-card-top">
        <span className="featured-card-num">{index}</span>
        <span className="featured-layer-badge">{project.layerLabel ?? project.category}</span>
      </div>

      <h3 className="featured-card-title">{project.title}</h3>
      <p className="featured-card-summary">{project.summary}</p>

      {project.outcome ? (
        <div className="featured-card-outcome">
          <span className="outcome-label">Key Production Impact</span>
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

        <div className="featured-card-actions">
          <div className="featured-card-status">
            <span className="status-dot-pulse" aria-hidden="true" />
            <span>{project.role}</span>
          </div>

          {project.caseStudy && (
            <button
              className="btn btn-case-study"
              onClick={() => onOpenCaseStudy(project)}
              aria-label={`Read in-depth case study for ${project.title}`}
            >
              <span>Read Case Study</span>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </TiltCard>
  )
}

export function FeaturedWork() {
  const [activeCaseStudy, setActiveCaseStudy] = useState<Project | null>(null)
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef)

  const otherClientProjects = secondaryProjects.filter((p) => p.category === 'Professional')
  const openSourceProjects = secondaryProjects.filter((p) => p.category === 'Personal')

  return (
    <section className="section work-section" id="work" ref={rootRef}>
      <div className="container">
        <header className="section-head" data-reveal>
          <span className="section-eyebrow">01 / Flagship Engineering</span>
          <h2 className="section-title">
            In-Depth <span className="text-gradient">Case Studies</span>
          </h2>
          <p className="section-lead">
            Production systems delivered across Fidsor and Dynamics 360 with deep architectural breakdowns,
            sanitized system topologies, and verified business outcomes.
          </p>
        </header>

        {/* Flagship Case Studies Grid */}
        <div className="featured-grid" data-reveal>
          {featuredProjects.map((project, idx) => (
            <CaseStudyCard
              key={project.id}
              project={project}
              index={`0${idx + 1}`}
              onOpenCaseStudy={setActiveCaseStudy}
            />
          ))}
        </div>

        {/* Additional Production & Client Systems */}
        {otherClientProjects.length > 0 && (
          <div className="additional-projects-wrap" data-reveal>
            <div className="additional-head">
              <div>
                <h3 className="additional-title">Other Production Systems</h3>
                <p className="additional-sub">
                  Commercial web platforms and specialized desktop runtimes built in production teams.
                </p>
              </div>
            </div>

            <div className="secondary-grid">
              {otherClientProjects.map((project) => (
                <TiltCard key={project.id} className="secondary-card" maxTilt={4}>
                  <div className="secondary-card-header">
                    <span className="secondary-category">{project.layerLabel ?? project.category}</span>
                    <span className="secondary-private">Client Platform</span>
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
        )}

        {/* Open Source & Engineering Labs */}
        <div className="additional-projects-wrap" data-reveal>
          <div className="additional-head">
            <div>
              <h3 className="additional-title">Open Source &amp; Engineering Labs</h3>
              <p className="additional-sub">
                Complete verifiable ASP.NET MVC, desktop, and management systems on GitHub with source code.
              </p>
            </div>
          </div>

          <div className="secondary-grid">
            {openSourceProjects.map((project) => (
              <TiltCard key={project.id} className="secondary-card" maxTilt={4}>
                <div className="secondary-card-header">
                  <span className="secondary-category">{project.category}</span>
                  {project.github && (
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

      {/* Slide-out Architectural Case Study Drawer */}
      <CaseStudyDrawer
        project={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
      />
    </section>
  )
}
