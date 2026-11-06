import { useEffect, useRef } from 'react'
import { profile } from '../data/content'
import { EASE, ensureGsap, prefersReducedMotion } from '../lib/motion'
import { AmbientBackdrop } from './AmbientBackdrop'
import { TiltCard } from './TiltCard'

const STACK_MARQUEE = [
  'C#',
  '.NET 10',
  'ASP.NET Core',
  'Angular',
  'TypeScript',
  'Blazor',
  'WPF (MVVM)',
  'SQL Server',
  'Entity Framework Core',
  'Clean Architecture',
  'CQRS / MediatR',
  'JWT & REST APIs',
]

const STATS = [
  { value: '1+ Year', label: 'Professional Delivery' },
  { value: '5+ Systems', label: 'Production Work' },
  { value: '3.95 / 4.0', label: 'BS CS Academic CGPA' },
  { value: 'Full Stack', label: '.NET 10 & Angular' },
]

export function Hero() {
  const rootRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (prefersReducedMotion()) return
    const root = rootRef.current
    if (!root) return

    const { gsap } = ensureGsap()

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.15 })

      tl.from('.hero-badge-pill', {
        opacity: 0,
        y: -15,
        duration: 0.6,
        ease: EASE,
      })
        .from(
          '.hero-headline-name',
          {
            opacity: 0,
            y: 35,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.3',
        )
        .from(
          '.hero-role-tag',
          {
            opacity: 0,
            y: 20,
            duration: 0.65,
            ease: EASE,
          },
          '-=0.4',
        )
        .from(
          '.hero-description',
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
            ease: EASE,
          },
          '-=0.4',
        )
        .from(
          '.hero-cta-group > *',
          {
            opacity: 0,
            y: 18,
            duration: 0.6,
            stagger: 0.1,
            ease: EASE,
          },
          '-=0.4',
        )
        .from(
          '.hero-stat-card',
          {
            opacity: 0,
            y: 24,
            duration: 0.7,
            stagger: 0.08,
            ease: 'power2.out',
          },
          '-=0.3',
        )
    }, root)

    return () => ctx.revert()
  }, [])

  const marqueeItems = [...STACK_MARQUEE, ...STACK_MARQUEE, ...STACK_MARQUEE]

  return (
    <section className="hero-section" id="hero" ref={rootRef}>
      <AmbientBackdrop className="hero-ambient" />

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge-pill">
            <span className="live-beacon">
              <span className="live-beacon-core" />
              <span className="live-beacon-ring" />
            </span>
            <span>Available for Full-Time Roles · Islamabad / Remote</span>
          </div>

          <h1 className="hero-headline-name">
            Umair <span className="hero-accent-name">Khan</span>
          </h1>

          <div className="hero-role-tag">
            <span className="hero-role-bullet">/</span>
            <span>Full Stack .NET Developer</span>
            <span className="hero-role-stack">ASP.NET Core · Angular · Blazor · WPF · SQL Server</span>
          </div>

          <p className="hero-description">
            {profile.heroSupport}
          </p>

          <div className="hero-cta-group">
            <a className="btn btn-primary btn-magnetic" href="#work">
              <span>View Selected Work</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a className="btn btn-ghost btn-magnetic" href="#contact">
              <span>Contact Me</span>
            </a>
            <a className="btn btn-ghost btn-magnetic" href={profile.cvHref} download>
              <span>Download CV</span>
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M8 2v8m0 0l-3-3m3 3l3-3M3 13h10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div className="hero-stats-grid">
            {STATS.map((stat) => (
              <TiltCard key={stat.label} className="hero-stat-card" maxTilt={6}>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </TiltCard>
            ))}
          </div>
        </div>

        <div className="hero-marquee-wrap" aria-hidden="true">
          <div className="arch-marquee-track">
            {marqueeItems.map((item, idx) => (
              <span key={`${item}-${idx}`}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

