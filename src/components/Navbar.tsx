import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/content'
import { ensureGsap, prefersReducedMotion } from '../lib/motion'
import { useTheme } from '../theme/useTheme'

const sectionIds = ['work', 'skills', 'experience', 'contact'] as const

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeHref, setActiveHref] = useState('')
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (prefersReducedMotion()) return

    const { ScrollTrigger } = ensureGsap()
    const triggers: { kill: () => void }[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      triggers.push(
        ScrollTrigger.create({
          trigger: el,
          start: 'top 45%',
          end: 'bottom 45%',
          onToggle: (self) => {
            if (self.isActive) setActiveHref(`#${id}`)
          },
        }),
      )
    })

    triggers.push(
      ScrollTrigger.create({
        trigger: '#hero',
        start: 'top top',
        end: 'bottom 55%',
        onToggle: (self) => {
          if (self.isActive) setActiveHref('')
        },
      }),
    )

    return () => {
      triggers.forEach((t) => t.kill())
    }
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      <header className={`site-nav${scrolled ? ' scrolled' : ''}`}>
        <div className="container nav-inner">
          <a className="brand" href="#hero" onClick={close}>
            Umair<span className="brand-dot">.</span>
          </a>

          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={activeHref === link.href ? 'is-active' : undefined}
                  aria-current={activeHref === link.href ? 'true' : undefined}
                >
                  <span>{link.label}</span>
                  {activeHref === link.href ? (
                    <span className="nav-active-pill" aria-hidden="true" />
                  ) : null}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <a
              href="#contact"
              className="btn btn-sm btn-ghost nav-cta-btn"
            >
              Get In Touch
            </a>

            <button
              type="button"
              className={`theme-toggle theme-toggle--${theme}`}
              onClick={toggleTheme}
              aria-label={
                theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
              }
              title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
            >
              <span className="theme-toggle-icon">
                {theme === 'dark' ? (
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.6" />
                    <path
                      d="M12 2.5v2.2M12 19.3v2.2M4.7 4.7l1.6 1.6M17.7 17.7l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.7 19.3l1.6-1.6M17.7 6.3l1.6-1.6"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M19.5 13.2A7.5 7.5 0 1 1 10.8 4.5 6.2 6.2 0 0 0 19.5 13.2Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>
            </button>

            <button
              className={`menu-toggle${open ? ' open' : ''}`}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
              type="button"
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <nav id="mobile-nav" className="mobile-panel" aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={activeHref === link.href ? 'is-active' : undefined}
              aria-current={activeHref === link.href ? 'true' : undefined}
              onClick={close}
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.cvHref}
            download
            className="btn btn-primary"
            onClick={close}
          >
            Download Resume (PDF)
          </a>
        </nav>
      ) : null}
    </>
  )
}
