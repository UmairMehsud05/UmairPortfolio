import { useEffect, type RefObject } from 'react'
import { EASE_SMOOTH, ensureGsap, prefersReducedMotion } from '../lib/motion'

/**
 * Editorial scroll reveals with staggered cascade and smooth easing.
 */
export function useSectionReveal(
  rootRef: RefObject<HTMLElement | null>,
  selector = '[data-reveal]',
) {
  useEffect(() => {
    const root = rootRef.current
    if (!root || prefersReducedMotion()) return

    const { gsap, ScrollTrigger } = ensureGsap()
    const nodes = root.querySelectorAll<HTMLElement>(selector)
    if (!nodes.length) return

    const ctx = gsap.context(() => {
      // Group elements by parent or batch them for elegant staggered reveal
      ScrollTrigger.batch(nodes, {
        start: 'top 88%',
        once: true,
        onEnter: (batch) => {
          gsap.fromTo(
            batch,
            {
              opacity: 0,
              y: 28,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.75,
              stagger: 0.08,
              ease: EASE_SMOOTH,
              overwrite: 'auto',
            },
          )
        },
      })
    }, root)

    ScrollTrigger.refresh()
    return () => ctx.revert()
  }, [rootRef, selector])
}
