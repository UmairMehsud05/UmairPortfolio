import { useEffect, useRef, useState } from 'react'
import {
  featuredProjects,
  profile,
  secondaryProjects,
  spotlightProjects,
  type Project,
} from '../data/content'
import { EASE, ensureGsap, prefersReducedMotion } from '../lib/motion'
import { AmbientBackdrop } from './AmbientBackdrop'
import { ProjectShot } from './ProjectShot'
import { TiltCard } from './TiltCard'

const STACK_MARQUEE = [
  'C#',
  'ASP.NET Core',
  'Blazor',
  'WPF',
  'SQL Server',
  'Entity Framework',
  'Web API',
  'JWT',
  'MVVM',
  'Clean Architecture',
]

const FLOATING_BADGES = [
  { label: '.NET 9 & C#', x: '82%', y: '16%', delay: 0 },
  { label: 'REST & JWT', x: '88%', y: '42%', delay: 0.6 },
  { label: 'SQL Server & EF', x: '78%', y: '68%', delay: 1.2 },
  { label: 'Clean Architecture', x: '85%', y: '88%', delay: 1.8 },
]

type StoryPhase = 'intro' | 'cms' | 'apis' | 'pos' | 'reassemble'

const PHASE_ORDER: StoryPhase[] = ['intro', 'cms', 'apis', 'pos', 'reassemble']

function CaseArticle({
  project,
  index,
  layerLabel,
}: {
  project: Project
  index: string
  layerLabel: string
}) {
  return (
    <TiltCard
      className="arch-case arch-case--text"
      id={project.id}
      maxTilt={6}
      scale={1.01}
    >
      <div className="arch-case-inner">
        <div className="arch-case-header">
          <p className="arch-case-num" data-reveal>
            {index}
          </p>
          <span className="arch-case-badge" data-reveal>
            {layerLabel}
          </span>
        </div>

        <h2 className="arch-case-title" data-reveal>
          {project.title}
        </h2>
        <p className="arch-case-body" data-reveal>
          {project.summary}
        </p>

        <ProjectShot
          src={project.screenshot}
          alt={project.screenshotAlt ?? project.title}
        />

        {project.outcome ? (
          <div className="arch-case-meta" data-reveal>
            <span>Outcome</span>
            <p>{project.outcome}</p>
          </div>
        ) : null}

        {project.highlights?.length ? (
          <ul className="arch-highlights" data-reveal>
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}

        {project.role ? (
          <div className="arch-case-meta" data-reveal>
            <span>Role</span>
            <p>{project.role}</p>
          </div>
        ) : null}

        <ul className="arch-tags" data-reveal>
          {project.stack.map((t) => (
            <li key={t} className="arch-tag-pill">
              {t}
            </li>
          ))}
        </ul>

        <p className="arch-case-status" data-reveal>
          <span className="status-dot-pulse" aria-hidden="true" />
          {project.status}
          {project.access === 'private' ? ' · Client project' : null}
        </p>
      </div>
    </TiltCard>
  )
}

export function ArchitectureStory() {
  const rootRef = useRef<HTMLElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const [phase, setPhase] = useState<StoryPhase>('intro')
  const cms = featuredProjects.find((p) => p.id === 'kapl-cms')
  const apis = featuredProjects.find((p) => p.id === 'kapl-apis')
  const pos = featuredProjects.find((p) => p.id === 'restaurant-pos')
  const integration = spotlightProjects[0]

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const reduce = prefersReducedMotion()
    const { gsap, ScrollTrigger } = ensureGsap()

    const ctx = gsap.context(() => {
      if (!reduce) {
        // Hero entrance sequence
        const tl = gsap.timeline({ delay: 0.15 })

        tl.from('.arch-hero-badge', {
          opacity: 0,
          y: -16,
          duration: 0.65,
          ease: EASE,
        })
          .from(
            '.arch-name-word',
            {
              opacity: 0,
              y: 40,
              duration: 0.85,
              stagger: 0.12,
              ease: 'power3.out',
            },
            '-=0.4',
          )
          .from(
            '.arch-hero-copy > *:not(.arch-hero-badge):not(.arch-name)',
            {
              opacity: 0,
              y: 24,
              duration: 0.75,
              stagger: 0.08,
              ease: EASE,
            },
            '-=0.5',
          )
          .from(
            '.hero-floating-badge',
            {
              opacity: 0,
              scale: 0.75,
              y: 20,
              duration: 0.8,
              stagger: 0.12,
              ease: 'back.out(1.5)',
            },
            '-=0.4',
          )
      }

      const panels = root.querySelectorAll<HTMLElement>('[data-story-phase]')
      panels.forEach((panel) => {
        const nextPhase = panel.dataset.storyPhase as StoryPhase
        ScrollTrigger.create({
          trigger: panel,
          start: 'top 55%',
          end: 'bottom 45%',
          onEnter: () => {
            setPhase(nextPhase)
            panel.querySelector('.arch-case')?.classList.add('is-live')
            if (!reduce) {
              gsap.fromTo(
                panel.querySelectorAll('[data-reveal]'),
                { opacity: 0, y: 24 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.65,
                  stagger: 0.05,
                  ease: EASE,
                  overwrite: 'auto',
                },
              )
            }
          },
          onEnterBack: () => {
            setPhase(nextPhase)
            panel.querySelector('.arch-case')?.classList.add('is-live')
          },
          onLeave: () => {
            panel.querySelector('.arch-case')?.classList.remove('is-live')
          },
          onLeaveBack: () => {
            panel.querySelector('.arch-case')?.classList.remove('is-live')
          },
        })
      })

      ScrollTrigger.create({
        trigger: root,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.6,
        onUpdate: (self) => {
          if (progressRef.current) {
            progressRef.current.style.width = `${self.progress * 100}%`
          }
          root.style.setProperty('--scroll-p', self.progress.toFixed(4))
        },
      })
    }, root)

    return () => {
      ctx.revert()
    }
  }, [])

  const marqueeItems = [...STACK_MARQUEE, ...STACK_MARQUEE, ...STACK_MARQUEE]

  return (
    <section className="arch-story" id="top" ref={rootRef} aria-label="Selected work">
      <div className="arch-progress" aria-hidden="true">
        <div className="arch-progress-bar" ref={progressRef} />
      </div>

      <div className="arch-phase-rail" aria-hidden="true">
        {PHASE_ORDER.map((p) => (
          <span
            key={p}
            className={`arch-phase-dot${phase === p ? ' is-active' : ''}`}
          />
        ))}
      </div>

      <div className="arch-stage" aria-hidden="true">
        <AmbientBackdrop className="arch-ambient" />
      </div>

      <div className="arch-scroll">
        <div className="arch-panel arch-hero" data-story-phase="intro">
          <div className="arch-hero-copy">
            <div className="arch-hero-badge" data-reveal>
              <span className="live-beacon">
                <span className="live-beacon-core" />
                <span className="live-beacon-ring" />
              </span>
              <span>Available for .NET Roles</span>
            </div>

            <h1 className="arch-name" data-reveal>
              <span className="arch-name-word">Umair</span>{' '}
              <span className="arch-name-word">
                <em>Khan</em>
              </span>
            </h1>

            <p className="arch-role-line" data-reveal>
              {profile.role} · Islamabad, Pakistan
            </p>

            <p className="arch-hiring" data-reveal>
              {profile.hiringLine}
            </p>

            <p className="arch-support" data-reveal>
              {profile.heroSupport}
            </p>

            <div className="arch-actions" data-reveal>
              <a className="btn btn-primary btn-magnetic" href="#work">
                <span>View Selected Work</span>
                <svg
                  className="btn-arrow"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a className="btn btn-ghost btn-magnetic" href="#contact">
                <span>Contact Me</span>
              </a>
              <a
                className="btn btn-ghost btn-magnetic"
                href={profile.cvHref}
                download
              >
                <span>Download CV</span>
                <svg
                  className="btn-download-icon"
                  width="15"
                  height="15"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M8 2v8m0 0l-3-3m3 3l3-3M3 13h10"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

            <p className="arch-scroll-hint" data-reveal>
              <span className="scroll-hint-mouse" aria-hidden="true">
                <span className="scroll-hint-wheel" />
              </span>
              <span>Scroll to explore projects</span>
            </p>

            <div className="arch-marquee" data-reveal aria-hidden="true">
              <div className="arch-marquee-track">
                {marqueeItems.map((item, i) => (
                  <span key={`${item}-${i}`}>{item}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop floating visual accent badges */}
          <div className="hero-floating-badges" aria-hidden="true">
            {FLOATING_BADGES.map((b) => (
              <div
                key={b.label}
                className="hero-floating-badge"
                style={
                  {
                    left: b.x,
                    top: b.y,
                    animationDelay: `${b.delay}s`,
                  } as React.CSSProperties
                }
              >
                <span className="floating-badge-dot" />
                <span>{b.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="arch-panel arch-chapter"
          id="work"
          data-story-phase="cms"
        >
          {cms ? (
            <CaseArticle
              project={cms}
              index="01"
              layerLabel={cms.layerLabel ?? 'Presentation layer'}
            />
          ) : null}
        </div>

        <div
          className="arch-panel arch-chapter arch-chapter-alt"
          data-story-phase="apis"
        >
          {apis ? (
            <CaseArticle
              project={apis}
              index="02"
              layerLabel={apis.layerLabel ?? 'Services layer'}
            />
          ) : null}
        </div>

        <div className="arch-panel arch-chapter" data-story-phase="pos">
          {pos ? (
            <CaseArticle
              project={pos}
              index="03"
              layerLabel={pos.layerLabel ?? 'Runtime layer'}
            />
          ) : null}
        </div>

        <div className="arch-panel arch-reassemble" data-story-phase="reassemble">
          <TiltCard className="arch-reassemble-copy" maxTilt={4} scale={1.01}>
            <p className="arch-label" data-reveal>
              Full-Stack Architecture
            </p>
            <h2 className="arch-reassemble-title" data-reveal>
              CMS, APIs, and POS
              <br />
              <span className="text-gradient">on one unified .NET stack.</span>
            </h2>
            <p className="arch-case-body" data-reveal>
              From Blazor presentation and ASP.NET Core REST APIs to high-performance
              WPF desktop point-of-sale execution with SQL Server transactional integrity.
            </p>

            <div className="arch-stack-flow" data-reveal>
              <div className="arch-stack-step">
                <span className="stack-step-label">Web Admin</span>
                <strong>Blazor / KAPL CMS</strong>
              </div>
              <div className="arch-stack-arrow">↔</div>
              <div className="arch-stack-step">
                <span className="stack-step-label">Backend APIs</span>
                <strong>ASP.NET Core / JWT</strong>
              </div>
              <div className="arch-stack-arrow">↔</div>
              <div className="arch-stack-step">
                <span className="stack-step-label">Desktop POS</span>
                <strong>WPF / MVVM / C#</strong>
              </div>
              <div className="arch-stack-arrow">↔</div>
              <div className="arch-stack-step">
                <span className="stack-step-label">Database</span>
                <strong>SQL Server / EF Core</strong>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>

      {integration ? (
        <div className="arch-spotlight" id="integration">
          <div className="container arch-spotlight-grid">
            <div className="arch-spotlight-copy" data-reveal>
              <div className="arch-case-badge">Enterprise Integration</div>
              <h3 className="arch-spotlight-title">{integration.title}</h3>
              <p className="arch-case-body">{integration.summary}</p>
              {integration.outcome ? (
                <div className="arch-case-meta">
                  <span>Outcome</span>
                  <p>{integration.outcome}</p>
                </div>
              ) : null}
              {integration.highlights?.length ? (
                <ul className="arch-highlights">
                  {integration.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
              <ul className="arch-tags">
                {integration.stack.map((t) => (
                  <li key={t} className="arch-tag-pill">
                    {t}
                  </li>
                ))}
              </ul>
              <p className="arch-case-status">
                <span className="status-dot-pulse" aria-hidden="true" />
                {integration.status} · {integration.role}
              </p>
            </div>
            <TiltCard className="arch-spotlight-shot-wrap" maxTilt={8}>
              <ProjectShot
                src={integration.screenshot}
                alt={integration.screenshotAlt ?? integration.title}
              />
            </TiltCard>
          </div>
        </div>
      ) : null}

      <div className="arch-secondary">
        <div className="container">
          <div className="arch-secondary-header">
            <h3 className="arch-secondary-heading">Additional Projects</h3>
            <p className="arch-secondary-sub">
              Personal tools, systems, and specialized client modules
            </p>
          </div>
          <ul className="arch-secondary-list">
            {secondaryProjects.map((project) => (
              <li key={project.id} className="arch-secondary-item" data-reveal>
                <div className="arch-secondary-info">
                  <span className="arch-secondary-title">{project.title}</span>
                  <span className="arch-secondary-meta">
                    {project.category} · {project.status}
                  </span>
                  {project.outcome ? (
                    <p className="arch-secondary-outcome">{project.outcome}</p>
                  ) : null}
                </div>
                <div className="arch-secondary-stack-wrap">
                  {project.stack.map((s) => (
                    <span key={s} className="arch-secondary-pill">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="arch-secondary-action">
                  {project.github ? (
                    <a
                      className="project-link"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>GitHub</span>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M4 12L12 4M12 4H6M12 4V10"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  ) : (
                    <span className="project-private">Client Project</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <span className="visually-hidden">{profile.name}</span>
    </section>
  )
}
