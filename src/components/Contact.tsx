import { useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { profile } from '../data/content'
import { useSectionReveal } from '../hooks/useSectionReveal'
import { TiltCard } from './TiltCard'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef)

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    setStatus('sending')

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })

      if (!response.ok) throw new Error('Network error')
      const result = await response.json()
      if (result.success === 'false' || result.success === false) {
        throw new Error(result.message || 'Form submission failed')
      }
      setStatus('sent')
      form.reset()
    } catch {
      const name = String(data.get('name') ?? '')
      const email = String(data.get('email') ?? '')
      const subject = String(data.get('subject') ?? 'Portfolio inquiry')
      const message = String(data.get('message') ?? '')
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`,
      )
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${body}`
      setStatus('sent')
    }
  }

  return (
    <section className="section contact-section" id="contact" ref={rootRef}>
      <div className="container contact-finale">
        <div className="contact-finale-copy" data-reveal>
          <span className="section-eyebrow">04 / Connect</span>
          <h2 className="contact-finale-title">
            Let&apos;s build <span className="text-gradient">together</span>
          </h2>
          <p className="contact-finale-lede">
            Actively seeking full-time Full Stack .NET Developer and Backend Software Engineering roles.
            Whether you have an open position or a project to discuss, feel free to reach out.
          </p>

          <div className="contact-finale-links">
            <a
              href={`mailto:${profile.email}`}
              className="contact-channel-pill"
            >
              <span className="channel-icon">✉</span>
              <span className="channel-text">{profile.email}</span>
              <span className="channel-arrow">→</span>
            </a>
            <a href={profile.phoneHref} className="contact-channel-pill">
              <span className="channel-icon">📞</span>
              <span className="channel-text">{profile.phone}</span>
              <span className="channel-arrow">→</span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="contact-channel-pill"
            >
              <span className="channel-icon">💻</span>
              <span className="channel-text">GitHub / UmairMehsud05</span>
              <span className="channel-arrow">↗</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="contact-channel-pill"
            >
              <span className="channel-icon">🔗</span>
              <span className="channel-text">LinkedIn Profile</span>
              <span className="channel-arrow">↗</span>
            </a>
            <a
              href={profile.cvHref}
              download
              className="contact-channel-pill contact-cv-pill"
            >
              <span className="channel-icon">📄</span>
              <span className="channel-text">Download Resume (PDF)</span>
              <span className="channel-arrow">↓</span>
            </a>
          </div>
        </div>

        <TiltCard
          className="contact-form-wrap"
          data-reveal
          maxTilt={3}
          scale={1.005}
        >
          <form
            className="contact-form contact-finale-form"
            onSubmit={onSubmit}
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="hidden"
              name="_subject"
              value="New message from Umair Khan portfolio"
            />

            <div className="form-row">
              <label className="form-field">
                <span>Your Name</span>
                <input
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="e.g. Alex Vance"
                />
              </label>
              <label className="form-field">
                <span>Email Address</span>
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="alex@company.com"
                />
              </label>
            </div>

            <label className="form-field">
              <span>Subject</span>
              <input
                name="subject"
                type="text"
                required
                placeholder=".NET Opportunity / Inquiry"
              />
            </label>

            <label className="form-field">
              <span>Message</span>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Hi Umair, let's discuss..."
              />
            </label>

            <div className="form-actions">
              <button
                className={`btn btn-primary btn-submit${
                  status === 'sending' ? ' is-loading' : ''
                }`}
                type="submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <>
                    <span className="btn-spinner" />
                    <span>Sending message…</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
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
                  </>
                )}
              </button>

              {status === 'sent' ? (
                <div className="form-status ok">
                  <span className="status-check">✓</span>
                  <span>Thank you! Message received. I&apos;ll be in touch shortly.</span>
                </div>
              ) : null}
            </div>
          </form>
        </TiltCard>
      </div>
    </section>
  )
}
