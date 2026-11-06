import { useRef } from 'react'
import {
  education,
  profile,
  skillFamiliar,
  skillPrimary,
} from '../data/content'
import { useSectionReveal } from '../hooks/useSectionReveal'
import { TiltCard } from './TiltCard'

export function Practice() {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef)

  return (
    <section className="section practice-section" id="practice" ref={rootRef}>
      <div className="container practice-wrap">
        <header className="practice-head" data-reveal>
          <div className="arch-case-badge">Technical Mastery</div>
          <h2 className="practice-title">
            Stack &amp; <span className="text-gradient">Engineering Practice</span>
          </h2>
          <div className="practice-lede">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="practice-seeking-card" data-reveal>
            <span className="seeking-indicator" />
            <p className="practice-seeking">{profile.seeking}</p>
          </div>
        </header>

        <div className="practice-grid">
          <TiltCard className="practice-edu" data-reveal maxTilt={7}>
            <div className="practice-edu-badge">Academic Background</div>
            <h3>{education.degree}</h3>
            <p className="edu-school">{education.school}</p>
            <div className="edu-cgpa-pill">
              <span className="cgpa-dot" />
              <span>{education.detail}</span>
            </div>
          </TiltCard>

          <div className="practice-skills">
            <TiltCard className="practice-skill-block" data-reveal maxTilt={5}>
              <div className="skill-block-header">
                <span className="skill-icon-core">⚡</span>
                <div>
                  <h3>Primary Stack</h3>
                  <span className="skill-sub">Core expertise used daily</span>
                </div>
              </div>
              <div className="skill-pills-wrap">
                {skillPrimary.map((skill) => (
                  <span key={skill} className="skill-pill skill-pill--primary">
                    <span className="skill-pill-bullet" />
                    {skill}
                  </span>
                ))}
              </div>
            </TiltCard>

            <TiltCard className="practice-skill-block" data-reveal maxTilt={5}>
              <div className="skill-block-header">
                <span className="skill-icon-familiar">🛠️</span>
                <div>
                  <h3>Architecture &amp; Tooling</h3>
                  <span className="skill-sub">Patterns, libraries &amp; pipelines</span>
                </div>
              </div>
              <div className="skill-pills-wrap">
                {skillFamiliar.map((skill) => (
                  <span key={skill} className="skill-pill skill-pill--familiar">
                    {skill}
                  </span>
                ))}
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  )
}
