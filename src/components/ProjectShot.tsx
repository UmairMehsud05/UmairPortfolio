import { useState } from 'react'

type Props = {
  src?: string
  alt: string
  caption?: string
  className?: string
}

/**
 * Renders only when the screenshot file exists and loads.
 * Drop files into /public/screenshots — until then, nothing is shown.
 */
export function ProjectShot({ src, alt, caption, className = '' }: Props) {
  const [status, setStatus] = useState<'loading' | 'ready' | 'missing'>(
    src ? 'loading' : 'missing',
  )

  if (!src || status === 'missing') return null

  return (
    <figure
      className={`project-shot ${className}`.trim()}
      data-reveal
      hidden={status !== 'ready'}
      style={status === 'loading' ? { display: 'none' } : undefined}
    >
      <div className="project-shot-frame">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setStatus('ready')}
          onError={() => setStatus('missing')}
        />
      </div>
      {caption && status === 'ready' ? <figcaption>{caption}</figcaption> : null}
    </figure>
  )
}
