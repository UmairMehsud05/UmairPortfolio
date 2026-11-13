import { useEffect } from 'react'
import type { Project } from '../data/content'

interface CaseStudyDrawerProps {
  project: Project | null
  onClose: () => void
}

export function CaseStudyDrawer({ project, onClose }: CaseStudyDrawerProps) {
  useEffect(() => {
    if (!project) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  if (!project || !project.caseStudy) return null

  const { caseStudy } = project

  return (
    <div className="case-drawer-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="case-study-title">
      <div className="case-drawer-surface" onClick={(e) => e.stopPropagation()}>
        {/* Drawer Header */}
        <header className="case-drawer-header">
          <div className="case-drawer-meta">
            <span className="case-drawer-badge">{project.layerLabel ?? project.category}</span>
            <span className="case-drawer-role">{project.role}</span>
          </div>

          <button className="case-drawer-close" onClick={onClose} aria-label="Close Case Study">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </header>

        {/* Drawer Body */}
        <div className="case-drawer-body">
          <div className="case-hero-intro">
            <h2 id="case-study-title" className="case-drawer-title">{project.title}</h2>
            <p className="case-drawer-lead">{caseStudy.overview}</p>
          </div>

          {/* Tech Stack Pills */}
          <div className="case-stack-wrap">
            <span className="case-section-kicker">Engineered With</span>
            <div className="case-stack-pills">
              {project.stack.map((tech) => (
                <span key={tech} className="case-stack-pill">{tech}</span>
              ))}
            </div>
          </div>

          {/* Business & Technical Problem */}
          <section className="case-section-block">
            <h3 className="case-block-heading">
              <span className="case-heading-num">01</span>
              <span>The Engineering Challenge</span>
            </h3>
            <p className="case-block-copy">{caseStudy.problem}</p>
          </section>

          {/* Architecture Topology */}
          <section className="case-section-block">
            <h3 className="case-block-heading">
              <span className="case-heading-num">02</span>
              <span>System Architecture &amp; Data Flow</span>
            </h3>
            <p className="case-block-copy">{caseStudy.architectureDesc}</p>

            <div className="case-arch-topology">
              {caseStudy.architectureLayers.map((layer, idx) => (
                <div key={layer.name} className="arch-layer-card">
                  <div className="arch-layer-header">
                    <span className="arch-layer-idx">Layer 0{idx + 1}</span>
                    <span className="arch-layer-tech">{layer.tech}</span>
                  </div>
                  <h4 className="arch-layer-title">{layer.name}</h4>
                  <p className="arch-layer-detail">{layer.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Key Architectural Decisions */}
          <section className="case-section-block">
            <h3 className="case-block-heading">
              <span className="case-heading-num">03</span>
              <span>Key Architectural Decisions</span>
            </h3>
            <ul className="case-decisions-list">
              {caseStudy.keyDecisions.map((dec) => (
                <li key={dec} className="case-decision-item">
                  <span className="decision-check-icon">✓</span>
                  <span>{dec}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Challenges & Solutions */}
          <section className="case-section-block">
            <h3 className="case-block-heading">
              <span className="case-heading-num">04</span>
              <span>Technical Bottlenecks &amp; Solutions</span>
            </h3>
            <div className="case-challenges-grid">
              {caseStudy.challengesSolved.map((item, idx) => (
                <div key={idx} className="case-challenge-box">
                  <div className="challenge-col">
                    <span className="challenge-tag">Challenge</span>
                    <p>{item.challenge}</p>
                  </div>
                  <div className="solution-col">
                    <span className="solution-tag">Architectural Solution</span>
                    <p>{item.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Verified Outcomes */}
          <section className="case-section-block">
            <h3 className="case-block-heading">
              <span className="case-heading-num">05</span>
              <span>Verified Delivery Outcomes</span>
            </h3>
            <div className="case-outcomes-grid">
              {caseStudy.outcomeMetrics.map((outcome, idx) => (
                <div key={idx} className="case-outcome-card">
                  <span className="outcome-icon">⚡</span>
                  <p>{outcome}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Drawer Footer */}
        <footer className="case-drawer-footer">
          <button className="btn btn-primary" onClick={onClose}>
            <span>Done Reading</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
