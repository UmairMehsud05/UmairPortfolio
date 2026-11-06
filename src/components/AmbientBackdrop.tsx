import { useEffect, useRef } from 'react'
import { isTouchDevice, prefersReducedMotion } from '../lib/motion'

type Props = {
  className?: string
}

const CODE_GLYPHS = ['C#', '{ }', '</>', 'API', 'SQL', '=>', 'async', 'POS']

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  alpha: number
}

/**
 * Rich ambient canvas backdrop:
 * Floating micro-particles, connecting constellation lines, drifting .NET glyphs,
 * and mouse-responsive perspective lighting.
 */
export function AmbientBackdrop({ className = '' }: Props) {
  const rootRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root || prefersReducedMotion()) return

    const isTouch = isTouchDevice()
    let raf = 0
    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0

    const onMove = (e: PointerEvent) => {
      const { innerWidth: w, innerHeight: h } = window
      targetX = (e.clientX / w - 0.5) * 2
      targetY = (e.clientY / h - 0.5) * 2
    }

    const tick = () => {
      currentX += (targetX - currentX) * 0.05
      currentY += (targetY - currentY) * 0.05
      root.style.setProperty('--px', currentX.toFixed(4))
      root.style.setProperty('--py', currentY.toFixed(4))
      raf = requestAnimationFrame(tick)
    }

    if (!isTouch) {
      window.addEventListener('pointermove', onMove, { passive: true })
      raf = requestAnimationFrame(tick)
    }

    return () => {
      if (!isTouch) {
        window.removeEventListener('pointermove', onMove)
        cancelAnimationFrame(raf)
      }
    }
  }, [])

  // Canvas particle constellation
  useEffect(() => {
    if (prefersReducedMotion()) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId = 0
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const particleCount = Math.min(Math.floor((width * height) / 38000), 45)
    const particles: Particle[] = []

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 1.8 + 0.8,
        alpha: Math.random() * 0.4 + 0.15,
      })
    }

    const onResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener('resize', onResize, { passive: true })

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // Read accent color from document
      const isDark = document.documentElement.dataset.theme === 'dark'
      const rgb = isDark ? '138, 164, 192' : '53, 90, 120'

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = width
        else if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        else if (p.y > height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${rgb}, ${p.alpha})`
        ctx.fill()

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 110) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(${rgb}, ${(1 - dist / 110) * 0.12})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(render)
    }

    animId = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <div
      ref={rootRef}
      className={`ambient ${className}`.trim()}
      aria-hidden="true"
    >
      <div className="ambient-wash" />
      <div className="ambient-grid" />
      <div className="ambient-beam" />
      <canvas ref={canvasRef} className="ambient-canvas" />

      {/* Floating drifting glyphs in subtle background layer */}
      <div className="ambient-glyphs">
        {CODE_GLYPHS.map((glyph, idx) => (
          <span
            key={glyph}
            className={`ambient-glyph ambient-glyph--${idx + 1}`}
          >
            {glyph}
          </span>
        ))}
      </div>

      <div className="ambient-orb ambient-orb--a" />
      <div className="ambient-orb ambient-orb--b" />
      <div className="ambient-orb ambient-orb--c" />
      <div className="ambient-vignette" />
    </div>
  )
}
