import { useEffect, useState } from 'react'

const TERMINAL_COMMAND = 'dotnet run --project UmairPlatform.Web'

interface PipelineStep {
  tag: string
  label: string
  detail: string
  status: 'ready' | 'active' | 'done'
}

const PIPELINE_STEPS: PipelineStep[] = [
  { tag: 'API Engine', label: 'ASP.NET Core (.NET 10)', detail: 'REST Endpoints & JWT Auth', status: 'done' },
  { tag: 'Client UI', label: 'Angular & Blazor WASM', detail: 'Dynamic Admin & Operator UX', status: 'done' },
  { tag: 'Core Logic', label: 'Clean Architecture · CQRS', detail: 'MediatR Commands & Handlers', status: 'done' },
  { tag: 'Data Store', label: 'SQL Server 2022 & EF Core', detail: 'Atomic Transactions & Indexing', status: 'done' },
  { tag: 'Desktop POS', label: 'WPF (MVVM / XAML)', detail: 'Hardware Dispatch & Printing', status: 'done' },
]

export function HeroTerminal() {
  const [typedCommand, setTypedCommand] = useState('')
  const [stepIndex, setStepIndex] = useState(0)

  useEffect(() => {
    let charIdx = 0
    const typeInterval = setInterval(() => {
      if (charIdx <= TERMINAL_COMMAND.length) {
        setTypedCommand(TERMINAL_COMMAND.slice(0, charIdx))
        charIdx++
      } else {
        clearInterval(typeInterval)
      }
    }, 45)

    return () => clearInterval(typeInterval)
  }, [])

  useEffect(() => {
    if (typedCommand.length < TERMINAL_COMMAND.length) return
    const stepInterval = setInterval(() => {
      setStepIndex((prev) => (prev < PIPELINE_STEPS.length ? prev + 1 : prev))
    }, 180)

    return () => clearInterval(stepInterval)
  }, [typedCommand])

  return (
    <div className="hero-terminal-card" aria-label="Developer Architecture Terminal">
      <div className="hero-terminal-header">
        <div className="terminal-dots" aria-hidden="true">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <div className="terminal-title">
          <span className="terminal-user">umair@platform</span>
          <span className="terminal-sep">:</span>
          <span className="terminal-path">~/production-stack</span>
        </div>
        <div className="terminal-tag">.NET 10</div>
      </div>

      <div className="hero-terminal-body">
        <div className="terminal-prompt-line">
          <span className="terminal-prompt">$</span>
          <span className="terminal-command">{typedCommand}</span>
          <span className="terminal-cursor" aria-hidden="true" />
        </div>

        <div className="terminal-pipeline-list">
          {PIPELINE_STEPS.slice(0, stepIndex).map((step, idx) => (
            <div key={step.tag} className="terminal-pipeline-row" style={{ animationDelay: `${idx * 0.05}s` }}>
              <div className="pipeline-check">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8.5l3.5 3.5 6.5-7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="pipeline-meta">
                <span className="pipeline-tag">[{step.tag}]</span>
                <span className="pipeline-label">{step.label}</span>
                <span className="pipeline-detail">— {step.detail}</span>
              </div>
            </div>
          ))}
        </div>

        {stepIndex >= PIPELINE_STEPS.length && (
          <div className="terminal-status-footer">
            <span className="status-live-beacon" aria-hidden="true" />
            <span>5/5 Architectural Services Operational · Zero Latency</span>
          </div>
        )}
      </div>
    </div>
  )
}
