import { useRef } from 'react'
import { education, experience } from '../data/content'
import { useSectionReveal } from '../hooks/useSectionReveal'
import { TiltCard } from './TiltCard'

export function Experience() {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef)

  return (
    <section className="section experience-section" id="experience" ref={rootRef}>
      <div className="container">
        <header className="section-head" data-reveal>
          <span className="section-eyebrow">03 / Track Record</span>
          <h2 className="section-title">
            Work Experience &amp; <span className="text-gradient">Education</span>
          </h2>
          <p className="section-lead">
            Hands-on production delivery across client-facing desktop POS and full-stack web platforms at Fidsor,
            and enterprise ERP integration engineering at Dynamics 360.
          </p>
        </header>

        <div className="exp-timeline-wrapper" data-reveal>
          <div className="exp-timeline-line" aria-hidden="true" />

          <ol className="exp-log">
            {experience.map((item, index) => {
              const year = item.period.match(/\d{4}/)?.[0] ?? ''
              return (
                <li
                  key={`${item.company}-${item.title}`}
                  className="exp-log-row"
                >
                  <div className="exp-log-aside">
                    <span className="exp-timeline-node" aria-hidden="true">
                      <span className="exp-node-inner" />
                    </span>
                    <span className="exp-log-year">{year}</span>
                    <span className="exp-log-badge">0{index + 1}</span>
                  </div>

                  <TiltCard className="exp-log-card" maxTilt={3} scale={1.01}>
                    <div className="exp-log-card-head">
                      <div>
                        <div className="exp-company-tag">
                          <span>{item.company}</span>
                          <span className="exp-loc-pill">{item.location}</span>
                        </div>
                        <h3 className="exp-job-title">{item.title}</h3>
                      </div>
                      <span className="exp-period-pill">{item.period}</span>
                    </div>

                    <ul className="exp-points-list">
                      {item.points.map((point) => (
                        <li key={point}>
                          <span className="point-bullet" aria-hidden="true">
                            ›
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </TiltCard>
                </li>
              )
            })}
          </ol>
        </div>

        {/* Dedicated Education Card */}
        <div className="education-wrap" data-reveal>
          <TiltCard className="education-card" maxTilt={3}>
            <div className="education-card-inner">
              <div className="education-badge">Academic Qualification</div>
              <div className="education-main">
                <div>
                  <h3 className="education-degree">{education.degree}</h3>
                  <p className="education-school">{education.school}</p>
                </div>
                <div className="education-cgpa-pill">
                  <span className="cgpa-beacon" />
                  <span>{education.detail}</span>
                </div>
              </div>
              <p className="education-notes">
                Core coursework: Data Structures &amp; Algorithms, Object-Oriented Programming (C#),
                Database Management Systems (SQL Server), Software Engineering &amp; Architecture.
              </p>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  )
}
