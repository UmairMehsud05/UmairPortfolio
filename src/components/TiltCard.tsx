import { useRef, type ReactNode, type HTMLAttributes } from 'react'
import { isTabletOrNarrower, prefersReducedMotion } from '../lib/motion'

type TiltCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  className?: string
  maxTilt?: number
  glare?: boolean
  scale?: number
}

export function TiltCard({
  children,
  className = '',
  maxTilt = 8,
  glare = true,
  scale = 1.015,
  ...rest
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const glareRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTabletOrNarrower() || prefersReducedMotion()) return
    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * -maxTilt
    const rotateY = ((x - centerX) / centerX) * maxTilt

    card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`

    if (glare && glareRef.current) {
      const glareX = (x / rect.width) * 100
      const glareY = (y / rect.height) * 100
      glareRef.current.style.opacity = '1'
      glareRef.current.style.background = `radial-gradient(circle 240px at ${glareX}% ${glareY}%, var(--glow), transparent 75%)`
    }
  }

  const handleMouseLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
    if (glareRef.current) {
      glareRef.current.style.opacity = '0'
    }
  }

  return (
    <div
      ref={cardRef}
      className={`tilt-card ${className}`.trim()}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {children}
      {glare ? (
        <div
          ref={glareRef}
          className="tilt-glare"
          aria-hidden="true"
        />
      ) : null}
    </div>
  )
}

