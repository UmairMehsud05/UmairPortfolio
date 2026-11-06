import { useEffect, useState } from 'react'

export function BackToTop() {
  const [visible, setVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight <= 0) return

      const currentScroll = window.scrollY
      const p = Math.min(Math.max(currentScroll / totalHeight, 0), 1)
      setProgress(p)
      setVisible(currentScroll > 350)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!visible) return null

  const strokeDashoffset = 100 - progress * 100

  return (
    <button
      type="button"
      className="back-to-top-btn"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      title="Back to top"
    >
      <svg className="progress-ring" width="44" height="44" viewBox="0 0 44 44" aria-hidden="true">
        <circle
          className="progress-ring-track"
          cx="22"
          cy="22"
          r="18"
          fill="none"
          strokeWidth="2.5"
        />
        <circle
          className="progress-ring-indicator"
          cx="22"
          cy="22"
          r="18"
          fill="none"
          strokeWidth="2.5"
          style={{
            strokeDasharray: '100',
            strokeDashoffset: `${strokeDashoffset}`,
          }}
        />
      </svg>
      <span className="back-to-top-arrow">↑</span>
    </button>
  )
}

