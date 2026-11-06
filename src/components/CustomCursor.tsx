import { useEffect, useRef, useState } from 'react'
import { ensureGsap, isTouchDevice, prefersReducedMotion } from '../lib/motion'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    if (isTouchDevice() || prefersReducedMotion()) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const { gsap } = ensureGsap()

    // Smooth physics with quickTo
    const xDot = gsap.quickTo(dot, 'x', { duration: 0.1, ease: 'power3' })
    const yDot = gsap.quickTo(dot, 'y', { duration: 0.1, ease: 'power3' })
    const xRing = gsap.quickTo(ring, 'x', { duration: 0.28, ease: 'power2.out' })
    const yRing = gsap.quickTo(ring, 'y', { duration: 0.28, ease: 'power2.out' })

    const handleMouseMove = (e: MouseEvent) => {
      setVisible(true)
      const x = e.clientX
      const y = e.clientY
      xDot(x)
      yDot(y)
      xRing(x)
      yRing(y)

      // Global mouse spotlight CSS variables
      document.documentElement.style.setProperty('--mouse-x', `${x}px`)
      document.documentElement.style.setProperty('--mouse-y', `${y}px`)
    }

    const handleMouseDown = () => setClicked(true)
    const handleMouseUp = () => setClicked(false)
    const handleMouseLeave = () => setVisible(false)
    const handleMouseEnter = () => setVisible(true)

    const handlePointerOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (!target) return
      const interactive = target.closest(
        'a, button, [role="button"], input, textarea, .theme-toggle, .arch-case, .skill-pill, .arch-secondary-item, .exp-log-row, [data-interactive]',
      )
      setHovered(Boolean(interactive))
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)
    window.addEventListener('mouseover', handlePointerOver, { passive: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      window.removeEventListener('mouseover', handlePointerOver)
    }
  }, [])

  if (isTouchDevice() || prefersReducedMotion()) return null

  return (
    <>
      <div
        ref={ringRef}
        className={`custom-cursor-ring${visible ? ' is-visible' : ''}${
          hovered ? ' is-hovered' : ''
        }${clicked ? ' is-clicked' : ''}`}
        aria-hidden="true"
      />
      <div
        ref={dotRef}
        className={`custom-cursor-dot${visible ? ' is-visible' : ''}${
          hovered ? ' is-hovered' : ''
        }`}
        aria-hidden="true"
      />
    </>
  )
}

