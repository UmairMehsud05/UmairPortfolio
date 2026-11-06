import { useState } from 'react'
import { TiltCard } from './TiltCard'

interface CodeTab {
  id: string
  filename: string
  icon: string
  badge: string
  code: string
}

const TABS: CodeTab[] = [
  {
    id: 'api',
    filename: 'OrderEndpoints.cs',
    icon: '⚡',
    badge: 'ASP.NET Core Web API',
    code: `// KAPL & POS Web API — Secured Minimal API Endpoint
app.MapPost("/api/v1/orders", async (
    CreateOrderDto dto,
    IOrderService orderService,
    ClaimsPrincipal user,
    CancellationToken ct) =>
{
    var userId = user.GetUserId();
    var result = await orderService.CreateOrderAsync(dto, userId, ct);

    return result.Match(
        order => Results.Created($"/api/v1/orders/{order.Id}", order),
        error => Results.BadRequest(new ProblemDetails { Detail = error.Message })
    );
})
.RequireAuthorization("PosOperatorPolicy")
.WithTags("Orders")
.WithOpenApi();`,
  },
  {
    id: 'wpf',
    filename: 'PosCheckoutViewModel.cs',
    icon: '🖥️',
    badge: 'WPF · MVVM & C#',
    code: `// Fidsor Restaurant POS — Transactional Checkout Engine
public partial class PosCheckoutViewModel : ObservableObject
{
    private readonly IOrderRepository _repository;
    private readonly IKitchenPrintService _printer;

    [ObservableProperty]
    [NotifyCanExecuteChangedFor(nameof(ProcessSaleCommand))]
    private OrderCart _cart = new();

    [RelayCommand(CanExecute = nameof(CanProcess))]
    private async Task ProcessSaleAsync()
    {
        IsProcessing = true;
        try
        {
            var invoice = await _repository.CommitOrderTransactionAsync(Cart);
            await _printer.SendToKitchenKdsAsync(invoice);
            Cart.Clear();
        }
        finally
        {
            IsProcessing = false;
        }
    }
}`,
  },
  {
    id: 'clean',
    filename: 'SyncCustomerQuery.cs',
    icon: '🏛️',
    badge: 'Clean Architecture & CQRS',
    code: `// Dynamics 360 — Cizaro to Business Central Integration
public sealed record SyncCustomerCommand(string CizaroId) 
    : IRequest<Result<BusinessCentralCustomerDto>>;

public sealed class SyncCustomerHandler 
    : IRequestHandler<SyncCustomerCommand, Result<BusinessCentralCustomerDto>>
{
    private readonly ICizaroApiClient _cizaro;
    private readonly IBusinessCentralClient _bc;

    public async Task<Result<BusinessCentralCustomerDto>> Handle(
        SyncCustomerCommand request, 
        CancellationToken ct)
    {
        var source = await _cizaro.GetCustomerAsync(request.CizaroId, ct);
        if (source is null) return Error.NotFound("Customer missing in Cizaro");

        return await _bc.UpsertCustomerAsync(source.ToDto(), ct);
    }
}`,
  },
]

export function CodeShowcase() {
  const [activeTab, setActiveTab] = useState(TABS[0].id)
  const [copied, setCopied] = useState(false)

  const current = TABS.find((t) => t.id === activeTab) ?? TABS[0]

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(current.code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback
    }
  }

  return (
    <div className="code-showcase-container" data-reveal>
      <div className="code-showcase-head">
        <div className="code-showcase-title-wrap">
          <span className="code-terminal-badge">Engineering Standards</span>
          <h3 className="code-showcase-title">
            Clean Architecture &amp; C# <span className="text-gradient">in Practice</span>
          </h3>
          <p className="code-showcase-sub">
            Real architectural patterns used in production at Fidsor &amp; Dynamics 360.
          </p>
        </div>

        <button
          type="button"
          className="btn-copy-code"
          onClick={handleCopy}
          aria-label="Copy code snippet"
        >
          {copied ? (
            <>
              <span className="copy-check">✓</span>
              <span>Copied!</span>
            </>
          ) : (
            <>
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <rect x="5" y="5" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                <path d="M11 2H3.5A1.5 1.5 0 002 3.5V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span>Copy snippet</span>
            </>
          )}
        </button>
      </div>

      <TiltCard className="code-window" maxTilt={3} scale={1.005}>
        <div className="code-window-topbar">
          <div className="code-window-dots" aria-hidden="true">
            <span className="dot dot--red" />
            <span className="dot dot--yellow" />
            <span className="dot dot--green" />
          </div>

          <div className="code-window-tabs" role="tablist">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                type="button"
                className={`code-tab${activeTab === tab.id ? ' is-active' : ''}`}
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="code-tab-icon">{tab.icon}</span>
                <span className="code-tab-name">{tab.filename}</span>
              </button>
            ))}
          </div>

          <span className="code-window-tag">{current.badge}</span>
        </div>

        <div className="code-editor-body">
          <pre className="code-pre">
            <code>
              {current.code.split('\n').map((line, i) => (
                <div key={`${current.id}-${i}`} className="code-line">
                  <span className="code-line-num" aria-hidden="true">
                    {(i + 1).toString().padStart(2, '0')}
                  </span>
                  <span className="code-line-text">
                    {formatSyntax(line)}
                  </span>
                </div>
              ))}
            </code>
          </pre>
        </div>
      </TiltCard>
    </div>
  )
}

/** Lightweight high-contrast C# syntax coloring helper */
function formatSyntax(line: string) {
  if (line.trim().startsWith('//')) {
    return <span className="tok-comment">{line}</span>
  }

  // Split into basic tokens for readability
  const parts = line.split(
    /(\b(?:public|private|sealed|record|class|async|await|var|return|if|is|new|null|try|finally|partial|void)\b|\b(?:string|int|Task|Result|ObservableObject|CancellationToken|ClaimsPrincipal|ProblemDetails)\b|".*?"|\b[A-Z][a-zA-Z0-9_]*\b)/g,
  )

  return parts.map((part, index) => {
    if (
      /^\b(public|private|sealed|record|class|async|await|var|return|if|is|new|null|try|finally|partial|void)\b$/.test(
        part,
      )
    ) {
      return (
        <span key={index} className="tok-keyword">
          {part}
        </span>
      )
    }
    if (
      /^\b(string|int|Task|Result|ObservableObject|CancellationToken|ClaimsPrincipal|ProblemDetails)\b$/.test(
        part,
      )
    ) {
      return (
        <span key={index} className="tok-type">
          {part}
        </span>
      )
    }
    if (part.startsWith('"') && part.endsWith('"')) {
      return (
        <span key={index} className="tok-string">
          {part}
        </span>
      )
    }
    if (/^[A-Z][a-zA-Z0-9_]*$/.test(part)) {
      return (
        <span key={index} className="tok-class">
          {part}
        </span>
      )
    }
    return <span key={index}>{part}</span>
  })
}

