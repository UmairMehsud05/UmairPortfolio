import { useRef } from 'react'
import { skillCategories } from '../data/content'
import { useSectionReveal } from '../hooks/useSectionReveal'
import { CodeShowcase } from './CodeShowcase'
import { TiltCard } from './TiltCard'

export function SkillsSection() {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef)

  return (
    <section className="section skills-section" id="skills" ref={rootRef}>
      <div className="container">
        <header className="section-head" data-reveal>
          <span className="section-eyebrow">02 / Engineering Stack</span>
          <h2 className="section-title">
            Technical Stack &amp; <span className="text-gradient">Core Capabilities</span>
          </h2>
          <p className="section-lead">
            Modern, enterprise-tested tools and patterns I use to deliver end-to-end full-stack web platforms,
            desktop client runtimes, and resilient API backends.
          </p>
        </header>

        <div className="skills-category-grid" data-reveal>
          {skillCategories.map((cat) => (
            <TiltCard key={cat.title} className="skill-cat-card" maxTilt={4} scale={1.01}>
              <div className="skill-cat-head">
                <span className="skill-cat-icon">{cat.icon}</span>
                <h3 className="skill-cat-title">{cat.title}</h3>
              </div>

              <div className="skill-cat-pills">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-badge-item">
                    <span className="skill-badge-dot" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Live Interactive Production Code Showcase */}
        <CodeShowcase />
      </div>
    </section>
  )
}

