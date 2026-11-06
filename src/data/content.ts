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
    'At Fidsor, I delivered a production restaurant POS client in WPF, engineered the TranslationsAwards CMS (Blazor frontend + .NET 10 Web APIs), built modules for KAPL CMS in Blazor & Angular, and owned high-throughput public website REST APIs. At Dynamics 360, I engineered a robust Cizaro ↔ Dynamics 365 Business Central sync pipeline leveraging Clean Architecture and CQRS/MediatR.',
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
      'Engineered and delivered a production restaurant POS client in WPF (MVVM/XAML) with C#, EF Core, and SQL Server — managing fast order dispatch, kitchen display routing, and persistent transactional writes.',
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
  detail: 'Graduated 2024 · CGPA 3.95 / 4.00 (Gold Medalist Caliber)',
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
}

const projectEntries: Project[] = [
  {
    id: 'kapl-cms',
    title: 'KAPL CMS & Web Platform',
    shortTitle: 'Full-Stack Platform',
    category: 'Professional',
    summary:
      'Enterprise ASP.NET Core & .NET 10 platform with Blazor & Angular admin interfaces and secure Web APIs for content delivery and live client operations.',
    outcome:
      'Powering day-to-day dynamic publishing with high-reliability REST APIs and modern administrative interfaces.',
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
    featured: true,
    order: 1,
    layerLabel: 'Full-Stack Web Platform',
  },
  {
    id: 'translations-awards-cms',
    title: 'TranslationsAwards CMS & APIs',
    shortTitle: 'Awards CMS',
    category: 'Professional',
    summary:
      'Digital translation awards and content management platform at Fidsor engineered with Blazor frontend, .NET 10 Web API backend, and SQL Server persistence.',
    outcome:
      'Engineered publishing modules, awards submission workflows, and secure REST APIs for seamless live platform operations.',
    highlights: [
      'Interactive Blazor UI for jury reviews, awards categorization, and content management',
      'High-performance .NET 10 ASP.NET Core REST APIs with JWT authentication',
      'Optimized SQL Server database schema and stored procedures for awards tracking',
    ],
    role: 'Full Stack .NET Developer, Fidsor',
    stack: ['.NET 10', 'ASP.NET Core', 'Blazor', 'Web API', 'C#', 'SQL Server', 'JWT'],
    period: '2026',
    status: 'Completed',
    access: 'private',
    featured: true,
    order: 2,
    layerLabel: 'Awards & Content Platform',
  },
  {
    id: 'restaurant-pos',
    title: 'Restaurant POS System',
    shortTitle: 'Desktop POS',
    category: 'Professional',
    summary:
      'High-performance WPF desktop point-of-sale built on MVVM pattern with .NET 10, SQL Server, and EF Core for instant cashier checkout and kitchen dispatch.',
    outcome:
      'Delivered into live production at Fidsor with zero order drops, low latency, and robust offline transactional write integrity.',
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
    featured: true,
    order: 3,
    layerLabel: 'Desktop Runtime & Database',
  },
  {
    id: 'cizaro-dynamics',
    title: 'Cizaro × Dynamics 365 BC Integration',
    shortTitle: 'Enterprise Integration',
    category: 'Professional',
    summary:
      'Robust ASP.NET Core synchronization service connecting third-party Cizaro API with Microsoft Dynamics 365 Business Central using Clean Architecture.',
    outcome:
      'Automated bidirectional customer and order data exchange between Cizaro and ERP, replacing error-prone manual reconciliation.',
    highlights: [
      'Structured on Clean Architecture with CQRS and MediatR decoupling business rules',
      'Secured REST endpoints validated with Swagger and JWT token enforcement',
      'Reliable error handling and schema translation pipeline between disparate ERP formats',
    ],
    role: '.NET Developer, Dynamics 360',
    stack: ['ASP.NET Core', 'Web API', 'Clean Architecture', 'CQRS', 'JWT', 'Swagger'],
    period: 'September 2025 — December 2025',
    status: 'Completed',
    access: 'private',
    featured: true,
    order: 4,
    layerLabel: 'Enterprise Integration Layer',
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
    order: 5,
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
    order: 6,
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
    order: 7,
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
    order: 8,
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
