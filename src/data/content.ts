export const profile = {
  name: 'Umair Khan',
  role: 'Full Stack .NET Developer',
  location: 'Islamabad, Pakistan',
  phone: '+92 331 3555610',
  phoneHref: 'tel:+923313555610',
  /** One-line scan for recruiters (hero). */
  hiringLine:
    'Full Stack .NET Developer · .NET 10, ASP.NET Core, Angular, Blazor, WPF, SQL Server · Open to full-time roles',
  tagline:
    'Full-stack web applications with .NET 10, ASP.NET Core, Angular & Blazor, desktop runtime in WPF, and scalable SQL Server architectures.',
  heroSupport:
    'I engineer scalable web & desktop solutions across the full stack — designing robust .NET 10 & ASP.NET Core REST APIs, dynamic Angular & Blazor frontends, responsive WPF desktop applications, and optimized SQL Server database architectures.',
  about: [
    'Full Stack .NET Developer with 1+ year of professional delivery experience across modern web and desktop ecosystems using C#, .NET 10, ASP.NET Core, Angular, Blazor, WPF, and SQL Server.',
    'At Fidsor, I engineered the FidsorOne POS and a specialized Restaurant POS client in WPF, architected the TranslationsAwards CMS (Blazor frontend + .NET 10 Web APIs), built modules for KAPL CMS in Blazor & Angular, and owned high-throughput public website REST APIs. At Dynamics 360, I engineered a robust Cizaro ↔ Dynamics 365 Business Central sync pipeline leveraging Clean Architecture and CQRS/MediatR.',
  ],
  seeking:
    'Open to Full Stack .NET Developer & Backend Software Engineering roles (.NET 10, ASP.NET Core, Angular, SQL Server) — Islamabad or Remote.',
  email: 'umairbscs145@gmail.com',
  github: 'https://github.com/UmairMehsud05',
  linkedin: 'https://www.linkedin.com/in/umair-khan05',
  cvHref: './Umair_Khan_Junior_DOT_NET_Developer.pdf',
}

export const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const experience = [
  {
    title: 'Full Stack .NET Developer',
    company: 'Fidsor',
    period: 'January 2026 — Present',
    location: 'Islamabad, Pakistan',
    points: [
      'Architected and delivered TranslationsAwards CMS with a responsive Blazor frontend and .NET 10 ASP.NET Core Web API services for publishing and awards administration.',
      'Engineered and delivered FidsorOne POS and a specialized Restaurant POS client in WPF (MVVM/XAML) with C#, EF Core, and SQL Server — managing fast order dispatch, cashier billing, and persistent transactional writes.',
      'Designed normalized SQL Server database schemas, transaction locks, and tuned stored procedures to ensure zero-latency cashier workflows during peak hours.',
      'Developed core modules for KAPL CMS and web applications using .NET 10, ASP.NET Core, Blazor, and Angular components.',
      'Owned and optimized public-facing RESTful Web APIs with JWT bearer authentication, structured request validation, and comprehensive API contracts.',
      'Collaborated within Agile sprint cycles, conducting code reviews and shipping via Git PR workflows.',
    ],
  },
  {
    title: '.NET Developer',
    company: 'Dynamics 360',
    period: 'September 2025 — December 2025',
    location: 'Islamabad, Pakistan',
    points: [
      'Built high-reliability ASP.NET Core microservices synchronizing third-party Cizaro API data with Microsoft Dynamics 365 Business Central.',
      'Architected backend services adhering to Clean Architecture principles, CQRS pattern with MediatR, and robust Dependency Injection.',
      'Secured communication channels with JWT authentication and authored interactive Swagger / OpenAPI contract documentation for client handoff.',
    ],
  },
]

export const education = {
  degree: 'Bachelor of Science in Computer Science',
  school: 'Gomal University, D.I. Khan',
  detail: 'Graduated 2024 · CGPA 3.95 / 4.00 (High Academic Distinction)',
}

export interface SkillCategory {
  title: string
  icon: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Backend & Cloud APIs',
    icon: '⚡',
    skills: [
      'C#',
      '.NET 10 / 9',
      'ASP.NET Core',
      'Web API',
      'Entity Framework Core',
      'LINQ',
      'SQL Server',
      'Dapper',
      'JWT Authentication',
      'Stored Procedures',
    ],
  },
  {
    title: 'Frontend & Desktop UI',
    icon: '🎨',
    skills: [
      'Angular',
      'TypeScript',
      'Blazor',
      'WPF (XAML / MVVM)',
      'JavaScript (ES6+)',
      'HTML5 & Modern CSS',
      'Responsive Web Design',
      'WinForms',
    ],
  },
  {
    title: 'Architecture & Design',
    icon: '🏛️',
    skills: [
      'Clean Architecture',
      'CQRS & MediatR',
      'Repository Pattern',
      'Dependency Injection',
      'RESTful API Design',
      'Microservices Principles',
      'Database Normalization',
    ],
  },
  {
    title: 'Tools & DevOps',
    icon: '🛠️',
    skills: [
      'Git & GitHub',
      'Swagger / OpenAPI',
      'Postman',
      'Visual Studio 2022',
      'SQL Server Mgmt Studio',
      'Crystal Reports',
      'Agile / Scrum',
    ],
  },
]

/** Legacy arrays for backward compatibility */
export const skillPrimary = [
  'C#',
  '.NET 10',
  'ASP.NET Core',
  'Angular',
  'Web API',
  'Blazor',
  'WPF (MVVM)',
  'SQL Server',
  'Entity Framework Core',
  'Clean Architecture',
  'JWT / REST',
]

export const skillFamiliar = [
  'TypeScript',
  'CQRS / MediatR',
  'LINQ',
  'Dapper',
  'Stored Procedures',
  'Swagger / OpenAPI',
  'Git / GitHub',
  'Postman',
  'Crystal Reports',
]

export type ProjectCategory = 'Professional' | 'Personal'
export type ProjectAccess = 'private' | 'public'
export type ProjectStatus = 'In progress' | 'Completed'

export interface ArchitectureLayer {
  name: string
  detail: string
  tech: string
}

export interface CaseStudy {
  overview: string
  problem: string
  architectureDesc: string
  architectureLayers: ArchitectureLayer[]
  keyDecisions: string[]
  challengesSolved: { challenge: string; solution: string }[]
  outcomeMetrics: string[]
}

export type Project = {
  id: string
  title: string
  shortTitle?: string
  category: ProjectCategory
  summary: string
  outcome?: string
  highlights?: string[]
  role?: string
  stack: string[]
  period?: string
  status: ProjectStatus
  access: ProjectAccess
  github?: string
  liveUrl?: string
  screenshot?: string
  screenshotAlt?: string
  featured: boolean
  spotlight?: boolean
  order: number
  layerLabel?: string
  caseStudy?: CaseStudy
}

const projectEntries: Project[] = [
  {
    id: 'fidsorone-pos',
    title: 'FidsorOne POS System',
    shortTitle: 'Retail Enterprise POS',
    category: 'Professional',
    summary:
      'High-performance retail & multi-counter point-of-sale system engineered in WPF (MVVM) with C#, EF Core, and SQL Server for zero-latency cashier checkout and reliable transactional persistence.',
    outcome:
      'Engineered for multi-outlet retail operations with audit-grade sales transaction consistency and sub-second barcode checkout.',
    highlights: [
      'WPF MVVM architecture strictly separating UI rendering from sales calculations and hardware dispatch',
      'Normalized SQL Server database schema with optimized indexing for rapid inventory queries',
      'Resilient transactional locking preventing concurrency anomalies during peak checkout hours',
    ],
    role: 'Full Stack .NET Developer, Fidsor',
    stack: ['.NET 10', 'WPF', 'MVVM', 'XAML', 'C#', 'EF Core', 'SQL Server'],
    period: '2026',
    status: 'Completed',
    access: 'private',
    featured: true,
    order: 1,
    layerLabel: 'Retail POS & Transactional Engine',
    caseStudy: {
      overview:
        'FidsorOne POS is an enterprise point-of-sale and sales management platform designed for high-throughput retail stores and multi-counter outlets.',
      problem:
        'Retail environments experience intense peak-hour transaction bursts. Standard desktop solutions frequently suffer from UI freezes, unhandled printer exceptions, or race conditions during simultaneous inventory adjustments across multiple counters.',
      architectureDesc:
        'Architected with a decoupled WPF (MVVM) presentation runtime bound to an asynchronous C# data-access layer powered by Entity Framework Core and SQL Server 2022. All sales commitments are encapsulated in atomic database transactions.',
      architectureLayers: [
        {
          name: 'Presentation Layer',
          detail: 'XAML / MVVM views with zero code-behind, asynchronous command bindings, and hardware barcode listeners',
          tech: 'WPF · XAML · MVVM',
        },
        {
          name: 'Business Logic Layer',
          detail: 'Tax calculation, price discount engines, receipt formatting, and cashier permission verification',
          tech: 'C# · .NET 10',
        },
        {
          name: 'Persistence & Transaction Layer',
          detail: 'Entity Framework Core with atomic SQL transactions, stored procedures, and audit journaling',
          tech: 'EF Core · SQL Server 2022',
        },
      ],
      keyDecisions: [
        'Selected MVVM pattern with command-based execution to prevent heavy DB queries from blocking the UI thread during checkout.',
        'Implemented pessimistic and row-level locks on inventory tables to eliminate double-selling items during concurrent sales.',
        'Tuned SQL Server covering indexes on barcode lookups and daily invoice headers to maintain sub-50ms query responses.',
      ],
      challengesSolved: [
        {
          challenge: 'UI freezing when searching catalog across thousands of inventory items.',
          solution:
            'Introduced in-memory barcode lookup caching and debounced asynchronous search queries backed by indexed SQL columns.',
        },
        {
          challenge: 'Cashier interrupted transactions due to network blips or hardware receipt printer delays.',
          solution:
            'Implemented an asynchronous print spooler and transactional commit rollback mechanism ensuring no invoice is finalized unless persistence succeeds.',
        },
      ],
      outcomeMetrics: [
        'Sub-100ms barcode scanning to line-item insertion latency',
        'Zero dropped sales records across live testing and checkout stress tests',
        'Clean MVVM separation enabling swift UI customizations without touching core transactional models',
      ],
    },
  },
  {
    id: 'translations-awards-cms',
    title: 'TranslationsAwards CMS & APIs',
    shortTitle: 'Awards Platform',
    category: 'Professional',
    summary:
      'Digital translation awards and content management platform engineered with an interactive Blazor frontend, .NET 10 ASP.NET Core Web API backend, and SQL Server persistence.',
    outcome:
      'Powering digital awards submission, jury evaluation workflows, and high-throughput content publishing with JWT-secured APIs.',
    highlights: [
      'Engineered robust .NET 10 ASP.NET Core REST APIs with JWT authentication and structured validation',
      'Collaborated on dynamic Blazor admin modules for jury scoring, category matrices, and media publishing',
      'Designed normalized SQL Server schemas and stored procedures for audit-grade vote tallying',
    ],
    role: 'Full Stack .NET Developer, Fidsor',
    stack: ['.NET 10', 'ASP.NET Core', 'Blazor', 'Web API', 'C#', 'SQL Server', 'JWT'],
    period: '2026',
    status: 'Completed',
    access: 'private',
    featured: true,
    order: 2,
    layerLabel: 'Awards CMS & Secure Web APIs',
    caseStudy: {
      overview:
        'TranslationsAwards CMS is a comprehensive administrative and digital publishing platform facilitating international translation awards competitions and public winner announcements.',
      problem:
        'Managing hundreds of submissions across multilingual categories requires strict role-based access for juries, content moderators, and administrators without risking scoring tampering or content leaks prior to official ceremonies.',
      architectureDesc:
        'Engineered with a clean separation between an ASP.NET Core (.NET 10) REST API gateway and a responsive Blazor administrative portal. State and authorization are managed through cryptographically signed JWT bearer tokens with granular role claims.',
      architectureLayers: [
        {
          name: 'Client Application',
          detail: 'Interactive Blazor components for real-time jury score submissions, candidate previews, and media asset management',
          tech: 'Blazor WebAssembly · Modern CSS',
        },
        {
          name: 'API Service Layer',
          detail: 'RESTful endpoints with model validation filters, rate limiting, and JWT bearer authorization middleware',
          tech: 'ASP.NET Core (.NET 10) · Web API',
        },
        {
          name: 'Data & Security Layer',
          detail: 'Normalized relational database schema tracking jury rubrics, audit logs, and locked score calculations',
          tech: 'SQL Server · EF Core · Stored Procedures',
        },
      ],
      keyDecisions: [
        'Employed ASP.NET Core Web API with strict contract definitions (Swagger/OpenAPI) enabling clean integration between Blazor and public consumer portals.',
        'Collaborated on Blazor component hierarchy with the frontend developer, taking ownership of API contracts and client state synchronization.',
        'Utilized SQL Server transactions for jury grade submissions to prevent partial scoring submissions.',
      ],
      challengesSolved: [
        {
          challenge: 'Concurrent jury scoring caused temporary lock contention on aggregate tally tables.',
          solution:
            'Separated individual jury score entries into append-only evaluation records and calculated tallies asynchronously on demand via optimized stored procedures.',
        },
        {
          challenge: 'Securing sensitive jury evaluation records prior to public announcement.',
          solution:
            'Enforced granular policy-based authorization in ASP.NET Core middleware verifying both JWT role claims and competition cycle stages.',
        },
      ],
      outcomeMetrics: [
        '100% data integrity across all scoring cycles with tamper-evident audit logs',
        'Standardized REST API contract facilitating rapid additions of new award categories',
        'Sub-80ms average response time for administrative API operations',
      ],
    },
  },
  {
    id: 'cizaro-dynamics',
    title: 'Cizaro × Dynamics 365 BC Integration',
    shortTitle: 'Enterprise ERP Sync',
    category: 'Professional',
    summary:
      'Robust ASP.NET Core synchronization service connecting third-party Cizaro API with Microsoft Dynamics 365 Business Central built on Clean Architecture and CQRS with MediatR.',
    outcome:
      'Automated bidirectional order and customer data synchronization between Cizaro and ERP, completely eliminating manual data entry.',
    highlights: [
      'Architected on Clean Architecture principles strictly decoupling business mapping from external ERP protocols',
      'Implemented CQRS pattern using MediatR for clean command/query segregation and testability',
      'Secured REST endpoints validated with Swagger and JWT token enforcement',
    ],
    role: '.NET Developer, Dynamics 360',
    stack: ['ASP.NET Core', 'Web API', 'Clean Architecture', 'CQRS / MediatR', 'JWT', 'Dynamics 365 BC'],
    period: 'September 2025 — December 2025',
    status: 'Completed',
    access: 'private',
    featured: true,
    order: 3,
    layerLabel: 'Enterprise ERP Integration Service',
    caseStudy: {
      overview:
        'An enterprise-grade middleware synchronization service connecting the external Cizaro POS platform with Microsoft Dynamics 365 Business Central ERP.',
      problem:
        'Retailers using Cizaro for in-store operations previously had to manually transcribe daily sales receipts, customer records, and inventory adjustments into Dynamics 365 Business Central, resulting in human error, delayed financial reporting, and stock mismatches.',
      architectureDesc:
        'Constructed following Clean Architecture (Domain, Application, Infrastructure, and API layers) and CQRS pattern powered by MediatR. External API clients and Dynamics 365 OData connectors are isolated in Infrastructure behind strict interfaces.',
      architectureLayers: [
        {
          name: 'Domain Layer',
          detail: 'Enterprise entities, value objects, and business validation rules completely free of external dependencies',
          tech: 'Pure C# (.NET 8/9)',
        },
        {
          name: 'Application Layer (CQRS)',
          detail: 'MediatR commands (SyncSalesOrder, UpdateCustomer) and queries (GetSyncStatus), with pipeline validation behaviors',
          tech: 'MediatR · FluentValidation',
        },
        {
          name: 'Infrastructure Layer',
          detail: 'HTTP client factories communicating with Cizaro REST API and Microsoft Dynamics 365 Business Central OData services',
          tech: 'ASP.NET Core · HttpClientFactory',
        },
        {
          name: 'API & Worker Layer',
          detail: 'JWT-secured REST endpoints for manual trigger, webhook ingress, and automated scheduled sync workers',
          tech: 'ASP.NET Core Web API · Swagger',
        },
      ],
      keyDecisions: [
        'Adopted Clean Architecture to insulate core sync rules from frequent changes in external ERP and POS API schemas.',
        'Used CQRS with MediatR to decouple request pipelines, making logging, validation, and error-handling reusable via MediatR pipeline behaviors.',
        'Authored comprehensive Swagger / OpenAPI contracts with JWT security to facilitate seamless client verification and handoff.',
      ],
      challengesSolved: [
        {
          challenge: 'Intermittent third-party network outages caused partial order synchronizations in Dynamics 365.',
          solution:
            'Implemented idempotency keys and exponential backoff retry policies with Polly, ensuring no orders were duplicated or lost.',
        },
        {
          challenge: 'Complex schema translation between nested Cizaro JSON structures and flat Dynamics 365 ERP entities.',
          solution:
            'Engineered dedicated domain mapping services with strict validation, rejecting malformed payloads before invoking ERP endpoints.',
        },
      ],
      outcomeMetrics: [
        '100% automated data sync between Cizaro and Microsoft Dynamics 365 Business Central',
        'Zero duplicate order incidents achieved through idempotency tracking',
        'Clean Architecture codebase validated through automated unit tests for all mapping logic',
      ],
    },
  },
  {
    id: 'restaurant-pos',
    title: 'Restaurant POS System',
    shortTitle: 'Hospitality POS',
    category: 'Professional',
    summary:
      'Specialized WPF desktop point-of-sale built on MVVM pattern with .NET 10 and SQL Server for fast table management, kitchen order printing, and cashier dispatch.',
    outcome:
      'Delivered into production at Fidsor with reliable kitchen display ticket routing and transactional write integrity.',
    highlights: [
      'WPF MVVM architecture separating view logic from kitchen print and order handling',
      'Transactional SQL Server schema ensuring audit-grade sales persistence',
      'Optimized reporting queries and stored procedures reducing operator wait times',
    ],
    role: 'Full Stack .NET Developer, Fidsor',
    stack: ['.NET 10', 'WPF', 'MVVM', 'XAML', 'C#', 'EF Core', 'SQL Server'],
    period: '2026',
    status: 'Completed',
    access: 'private',
    featured: false,
    order: 4,
    layerLabel: 'Hospitality POS Runtime',
  },
  {
    id: 'kapl-cms',
    title: 'KAPL CMS & Web Platform',
    shortTitle: 'Full-Stack Platform',
    category: 'Professional',
    summary:
      'Enterprise ASP.NET Core & .NET 10 platform with Blazor & Angular admin interfaces and secure Web APIs for content delivery and live client operations.',
    outcome:
      'Powering dynamic content publishing with high-reliability REST APIs and modern administrative interfaces.',
    highlights: [
      'Blazor & Angular UI modules for content workflows and operator management',
      'Secured ASP.NET Core REST API backend with JWT token authorization',
      'Shared SQL Server data layer tuned for fast content retrieval',
    ],
    role: 'Full Stack .NET Developer, Fidsor',
    stack: ['.NET 10', 'ASP.NET Core', 'Angular', 'Blazor', 'C#', 'SQL Server', 'JWT'],
    period: 'January 2026 — Present',
    status: 'In progress',
    access: 'private',
    featured: false,
    order: 5,
    layerLabel: 'Full-Stack Web Platform',
  },
  {
    id: 'testsphere',
    title: 'TestSphere — Online Examination',
    category: 'Personal',
    summary:
      'Role-based exam platform (Admin, Teacher, Student) with timed exams, auto-save, analytics, and bulk question management.',
    outcome: 'Full MVC exam system with multi-role auth and timed assessment flows.',
    stack: ['ASP.NET MVC', 'EF Core', 'LINQ', 'SQL Server'],
    status: 'Completed',
    access: 'public',
    github: 'https://github.com/UmairMehsud05/TestSphere',
    featured: false,
    order: 6,
  },
  {
    id: 'smartstock',
    title: 'SmartStock — Inventory & Sales',
    category: 'Personal',
    summary:
      'WinForms inventory and sales app with authentication and PDF/Excel reporting.',
    stack: ['C#', 'WinForms', 'SQL Server', 'Crystal Reports'],
    status: 'Completed',
    access: 'public',
    github: 'https://github.com/UmairMehsud05/SmartStock',
    featured: false,
    order: 7,
  },
  {
    id: 'online-shop',
    title: 'Online Shop — E-Commerce',
    category: 'Personal',
    summary:
      'ASP.NET MVC storefront with auth, cart, checkout, wishlist, and order tracking; SQL Server with stored procedures and indexing.',
    stack: ['ASP.NET MVC', 'AJAX', 'SQL Server', 'Bootstrap'],
    status: 'Completed',
    access: 'public',
    github: 'https://github.com/UmairMehsud05/OnlineShopping',
    featured: false,
    order: 8,
  },
  {
    id: 'lab-management',
    title: 'Medical Laboratory Management',
    category: 'Personal',
    summary:
      'Multi-role lab system with Crystal Reports and a dynamic test catalog for doctors and staff.',
    stack: ['ASP.NET MVC', 'SQL Server', 'Crystal Reports'],
    status: 'Completed',
    access: 'public',
    github: 'https://github.com/UmairMehsud05/LaboratoryManagementSystem',
    featured: false,
    order: 9,
  },
]

export const projects: Project[] = [...projectEntries].sort(
  (a, b) => a.order - b.order,
)

export const featuredProjects: Project[] = projects.filter((p) => p.featured)

export const spotlightProjects: Project[] = projects.filter((p) => p.spotlight)

export const secondaryProjects: Project[] = projects.filter(
  (p) => !p.featured,
)
