export type ProjectAccent = "cobalt" | "teal" | "neon";

export type MediaRole = "primary" | "secondary";

/** Ideal capture size for every project screenshot slot. */
export const PROJECT_MEDIA_WIDTH = 1440;
export const PROJECT_MEDIA_HEIGHT = 900;

interface ProjectMediaBase {
  role: MediaRole;
  /** Project name shown on placeholders and used in alt text. */
  projectLabel: string;
  /** Short screen name shown on placeholders. */
  screen: string;
  /** Final filename under public/images/projects/. */
  filename: string;
  alt: string;
  /** Intrinsic pixel dimensions of the source file. */
  width: number;
  height: number;
  caption?: string;
  /** Object position used only if a future layout crops the frame. */
  focal?: "top" | "center" | "bottom";
}

/** Slot awaiting a real PNG — renders a labeled CSS placeholder, never a broken path. */
export type ProjectMediaPlaceholder = ProjectMediaBase & {
  status: "placeholder";
};

/** Slot with a file on disk — set `src` to `/images/projects/${filename}`. */
export type ProjectMediaReady = ProjectMediaBase & {
  status: "ready";
  src: string;
};

export type ProjectMedia = ProjectMediaPlaceholder | ProjectMediaReady;

export function isMediaReady(media: ProjectMedia): media is ProjectMediaReady {
  return media.status === "ready";
}

export interface ProjectLayer {
  label: "Interface" | "Services & Workflow" | "Data, Integrations & Cloud";
  detail: string;
}

export interface ContributionGroup {
  title: string;
  items: string[];
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  status: string;
  title: string;
  subtitle: string;
  summary: string;
  ownership: string;
  challenge: string;
  contributions: ContributionGroup[];
  outcomes: string[];
  stack: string[];
  layers: ProjectLayer[];
  media: ProjectMedia[];
  links?: ProjectLink[];
  accent?: ProjectAccent;
}

export const projects: Project[] = [
  {
    id: "drivedock",
    status: "PRODUCTION · DRIVER ONBOARDING & COMPLIANCE",
    title: "DriveDock",
    subtitle:
      "Multilingual driver onboarding across applicant, safety, and compliance workflows",
    summary:
      "A production driver-onboarding and compliance platform for carrier hiring in Canada and the United States. It takes an applicant from prequalification through safety review, testing, training, and completion, with multilingual forms for drivers and review tooling for HR, safety, and compliance staff.",
    ownership:
      "Team-built platform. I designed and built the full backend, including the data model, lifecycle APIs, workflow and validation logic, document generation, identity and access control, file storage, notifications, and external integrations. I also contributed to frontend features in the applicant, safety, and compliance flows where the interface depended on complex backend state and validation.",
    challenge:
      "Hiring a driver meant moving paper packets between HR, safety, compliance, and operations, in two countries and three languages, with no shared view of where an applicant actually stood.",
    contributions: [
      {
        title: "Applicant experience",
        items: [
          "Prequalification by country, company, and application type",
          "A five-page application form in English, French, and Spanish",
          "Canadian/U.S., company-, and jurisdiction-specific forms with employment-history, licence, address, and competency validation",
          "Secure resumption using SIN/email verification, expiring codes, session cookies, and server-side step gating",
        ],
      },
      {
        title: "Lifecycle and safety review",
        items: [
          "Ten required lifecycle stages, with conditional branching into Drive Test, CarriersEdge Training, Drug Test, and Flatbed Training",
          "Safety dashboards with search, filtering, and status visibility across applicants",
          "Notes, audit history, termination and restore, and document review",
        ],
      },
      {
        title: "Documents, identity, and delivery",
        items: [
          "Presigned upload and download flows with MIME, folder, and size validation",
          "Serverless generation and filling of company- and jurisdiction-specific PDFs, previewed in the browser",
          "Generated onboarding forms, policies and consents, road-test certificates, and U.S. I-9/W-4 flows where applicable",
          "Microsoft identity with SSP Portal access control, plus notification and completion-PDF emails",
        ],
      },
    ],
    outcomes: [
      "Achieved 95% onboarding data accuracy through structured validation and step gating",
      "Enabled paperless onboarding",
      "Reduced manual coordination across HR, safety, compliance, and operations",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "React",
      "Node.js / Route Handlers",
      "MongoDB / Mongoose",
      "AWS S3",
      "AWS Lambda",
      "NextAuth",
      "Microsoft Entra ID",
      "pdf-lib",
      "PDF.js / react-pdf-viewer",
      "Puppeteer",
      "PDFMake",
      "i18next / next-i18next",
      "React Hook Form",
      "Zod",
      "Tailwind CSS",
      "Cloudflare Turnstile",
      "GitHub Actions",
      "Vercel",
    ],
    layers: [
      {
        label: "Interface",
        detail:
          "Multilingual applicant flow, safety dashboards, document review",
      },
      {
        label: "Services & Workflow",
        detail: "Ten-stage lifecycle, step gating, validation, PDF generation",
      },
      {
        label: "Data, Integrations & Cloud",
        detail: "MongoDB, S3, Lambda, Microsoft Entra ID, Vercel",
      },
    ],
    media: [
      {
        status: "ready",
        role: "primary",
        projectLabel: "DriveDock",
        screen: "Safety / review operations dashboard",
        filename: "drivedock-safety-processing.png",
        src: "/images/projects/drivedock-safety-processing.png",
        alt: "DriveDock safety processing dashboard showing the driver onboarding lifecycle and review panels",
        width: PROJECT_MEDIA_WIDTH,
        height: PROJECT_MEDIA_HEIGHT,
        focal: "top",
      },
      {
        status: "ready",
        role: "secondary",
        projectLabel: "DriveDock",
        screen: "Multilingual applicant workflow",
        filename: "drivedock-applicant-workflow.png",
        src: "/images/projects/drivedock-applicant-workflow.png",
        alt: "DriveDock multilingual applicant workflow with the language selector visible",
        width: PROJECT_MEDIA_WIDTH,
        height: PROJECT_MEDIA_HEIGHT,
        focal: "top",
      },
    ],
    accent: "cobalt",
  },
  {
    id: "npt-onboard",
    status: "PRODUCTION · MULTI-TENANT HR PLATFORM",
    title: "NPT Onboard",
    subtitle: "Employee onboarding across Canada, the United States, and India",
    summary:
      "A multi-tenant employee-onboarding platform for HR teams in Canada, the United States, and India. It covers the employee lifecycle from invitation and verified access through onboarding, review, modification, approval, and termination.",
    ownership:
      "Team-built platform. I owned core backend and workflow services: protected onboarding sessions, region-aware lifecycle APIs, document pipelines, email automation, reporting, and the audit trail.",
    challenge:
      "HR teams in three countries needed one repeatable onboarding path, but each region asks for different data, and every action had to stay verifiable long after the employee started.",
    contributions: [
      {
        title: "Secure onboarding access",
        items: [
          "Digital and manual onboarding paths",
          "Invite tokens stored as HMAC-SHA256 hashes, with AES-256-GCM encryption so HR can recover the current link",
          "One-time six-digit OTP with ten-minute expiry, resend throttling, failed-attempt lockout, and a secure session cookie",
        ],
      },
      {
        title: "Region-aware lifecycle",
        items: [
          "Region-aware forms for Canada, the United States, and India — the India flow covers personal details, government IDs, education, employment, certificates, bank details, declaration, and signature",
          "Lifecycle states from invite or manual PDF through submission, resubmission, detail confirmation, contract, approval, and termination",
          "HR review, modification requests, approval, termination, restore, resend, and deletion",
          "Subsidiary-scoped search, filtering, sorting, pagination, bulk actions, and reporting",
        ],
      },
      {
        title: "Documents, email, and reporting",
        items: [
          "Presigned uploads with temporary-to-final moves, MIME and size validation, cleanup, rollback, and secure downloads",
          "Microsoft Graph email for invitations, OTP, modification, approval, termination, and attachments",
          "Serverless CSV/XLSX reporting and application-form PDF generation, with signatures, checkmarks, and uploaded documents appended",
          "Audit logs and employee-lifecycle history",
        ],
      },
    ],
    outcomes: [
      "Gave HR a single onboarding path across three countries instead of three parallel processes",
      "Made every lifecycle action reviewable through audit logs and employee history",
      "Automated application-package generation and subsidiary reporting, replacing manual preparation.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "React",
      "Node.js / Route Handlers",
      "MongoDB / Mongoose",
      "NextAuth",
      "Microsoft Entra ID",
      "Microsoft Graph",
      "AWS S3",
      "AWS Lambda",
      "pdf-lib",
      "ExcelJS",
      "React Hook Form",
      "Zod",
      "Tailwind CSS",
    ],
    layers: [
      {
        label: "Interface",
        detail: "HR lifecycle dashboard, region-aware employee forms",
      },
      {
        label: "Services & Workflow",
        detail:
          "Invite and OTP sessions, lifecycle APIs, approvals, audit logs",
      },
      {
        label: "Data, Integrations & Cloud",
        detail: "MongoDB, S3, Lambda, Microsoft Graph, Entra ID",
      },
    ],
    media: [
      {
        status: "ready",
        role: "primary",
        projectLabel: "NPT Onboard",
        screen: "HR onboarding-lifecycle dashboard",
        filename: "npt-hr-dashboard.png",
        src: "/images/projects/npt-hr-dashboard.png",
        alt: "NPT Onboard HR dashboard showing employee onboarding lifecycle statuses",
        width: PROJECT_MEDIA_WIDTH,
        height: PROJECT_MEDIA_HEIGHT,
        focal: "top",
      },
      {
        status: "ready",
        role: "secondary",
        projectLabel: "NPT Onboard",
        screen: "Region-aware employee onboarding form",
        filename: "npt-onboarding-form.png",
        src: "/images/projects/npt-onboarding-form.png",
        alt: "NPT Onboard region-aware employee onboarding form",
        width: PROJECT_MEDIA_WIDTH,
        height: PROJECT_MEDIA_HEIGHT,
        focal: "top",
      },
    ],
    accent: "cobalt",
  },
  {
    id: "neon-shop",
    status: "CLIENT WORK · SOLO FULL-STACK BUILD · 2022",
    title: "Neon Shop",
    subtitle:
      "Configurable-product eCommerce with payments, order operations, and administration",
    summary:
      "An eCommerce platform for a freelance client selling made-to-order neon signs. Customers design and price a sign in a live builder, then buy it alongside catalogue products in a storefront the client administers.",
    ownership:
      "I built the project end to end: storefront and builder interface, API routes and data models, authentication, payment processing with verified webhooks, email workflows, media handling, order lifecycle, and admin tools.",
    challenge:
      "A made-to-order neon sign is not a standard catalogue item. The configurator had to translate customer choices into a live preview, calculated pricing, structured order data, and a configuration that remained intact through checkout and fulfilment.",
    contributions: [
      {
        title: "Custom neon builder",
        items: [
          "Live neon text preview with glow and responsive scaling",
          "21 fonts, 12 colours, and eight optional social/logo icons",
          "Regular and large size models with calculated physical width, acrylic finish, backing shape, and mount options",
          "Dynamic pricing based on text length, size, and icon choice",
        ],
      },
      {
        title: "Storefront and commerce",
        items: [
          "Categories, product details, variants, sale percentages, search, and filters",
          "Guest and registered-user checkout, with standard and custom products in the same cart",
          "Stripe card checkout, Afterpay/Clearpay through Stripe, and PayPal order creation and capture",
          "Verified payment webhooks driving pending and completed states, with transactional emails and public order tracking",
        ],
      },
      {
        title: "Operations and administration",
        items: [
          "Full custom configuration stored with the order and rendered in cart, tracking, and admin views",
          "Admin product and category CRUD with order search, filtering, state updates, and bulk operations",
          "Media upload and delete workflows for multiple product images",
          "JWT authentication, HTTP-only cookies, password hashing, and role-based access",
        ],
      },
    ],
    outcomes: [
      "Delivered a complete client commerce operation as a solo developer",
      "Connected custom-product design directly to cart, payment, order, and fulfilment",
      "Gave the business an operational admin interface rather than requiring database or code changes",
    ],
    stack: [
      "Next.js 12 (Pages Router)",
      "React 17",
      "JavaScript",
      "Next.js API Routes / Node.js",
      "next-connect",
      "MongoDB / Mongoose",
      "JWT / RBAC",
      "bcrypt",
      "HTTP-only cookies",
      "Stripe",
      "Afterpay / Clearpay",
      "PayPal",
      "Stripe webhooks",
      "Cloudinary",
      "Nodemailer",
      "Tailwind CSS",
      "Vercel",
    ],
    layers: [
      {
        label: "Interface",
        detail: "Storefront, live neon builder, cart and checkout",
      },
      {
        label: "Services & Workflow",
        detail: "API routes, order lifecycle, verified webhooks, email",
      },
      {
        label: "Data, Integrations & Cloud",
        detail: "MongoDB, Stripe, PayPal, Cloudinary, Vercel",
      },
    ],
    media: [
      {
        status: "ready",
        role: "primary",
        projectLabel: "Neon Shop",
        screen: "Custom neon builder",
        filename: "neonshop-builder.png",
        src: "/images/projects/neonshop-builder.png",
        alt: "Neon Shop custom neon builder with live preview and configuration controls",
        width: PROJECT_MEDIA_WIDTH,
        height: PROJECT_MEDIA_HEIGHT,
        focal: "center",
      },
    ],
    links: [
      { label: "Source", href: "https://github.com/DeveloperRidoy/neonshop" },
      { label: "Live site", href: "https://neonshop.vercel.app" },
    ],
    accent: "neon",
  },
  {
    id: "geoevent",
    status: "LAUNCHED · WINNING CAPSTONE",
    title: "GeoEvent",
    subtitle:
      "Map-based event discovery, creation, registration, and organizer analytics",
    summary:
      "A launched web platform for local event discovery and organizing. First-party listings and Ticketmaster events appear on one map, and organizers create, promote, and measure events in the same product.",
    ownership:
      "Built and launched for real users as a capstone project, covering the web application, the API layer, the data model, and every third-party integration behind it.",
    challenge:
      "Local event discovery was fragmented across first-party listings and external ticketing sources, while organizers lacked one place to publish events, attract attendees, and measure results.",
    contributions: [
      {
        title: "Discovery and attendance",
        items: [
          "Local events normalized alongside Ticketmaster events",
          "Google Maps advanced markers with marker clustering",
          "Filtering by text, location, date, category, format, and event language",
          "Registration, saved events, confirmation emails, and post-event reviews limited to registered attendees",
        ],
      },
      {
        title: "Organizer tools and AI assistance",
        items: [
          "Event creation and editing with image and video uploads",
          "URL-based event import with AI extraction and structuring, plus generated descriptions and banners",
          "Follower notifications when an organizer publishes a new event",
          "Analytics for views, registrations, average rating, top events, trends, and followers",
        ],
      },
      {
        title: "Platform",
        items: [
          "Authentication with admin, organizer, and user roles",
          "Administrative dashboards and public API documentation",
          "Jest/Supertest route tests",
        ],
      },
    ],
    outcomes: [
      "Launched for real users and selected as the winning capstone project for Conestoga College's Computer Programming program",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "React",
      "Node.js / Route Handlers",
      "MongoDB / Mongoose",
      "Google Maps API",
      "Ticketmaster API",
      "OpenAI API",
      "Cheerio",
      "AWS S3",
      "Chart.js",
      "JWT / bcrypt",
      "Nodemailer",
      "Tailwind CSS",
      "Jest / Supertest",
      "Vercel",
    ],
    layers: [
      {
        label: "Interface",
        detail: "Map discovery, organizer dashboards, analytics",
      },
      {
        label: "Services & Workflow",
        detail: "Route Handler APIs, registrations, AI import, notifications",
      },
      {
        label: "Data, Integrations & Cloud",
        detail: "MongoDB, Google Maps, Ticketmaster, OpenAI, S3",
      },
    ],
    media: [
      {
        status: "ready",
        role: "primary",
        projectLabel: "GeoEvent",
        screen: "Map-based event discovery",
        filename: "geoevent-map-discovery.png",
        src: "/images/projects/geoevent-map-discovery.png",
        alt: "GeoEvent map-based event discovery interface with clustered markers",
        width: PROJECT_MEDIA_WIDTH,
        height: PROJECT_MEDIA_HEIGHT,
        focal: "center",
      },
      {
        status: "ready",
        role: "secondary",
        projectLabel: "GeoEvent",
        screen: "Organizer analytics dashboard",
        filename: "geoevent-organizer-analytics.png",
        src: "/images/projects/geoevent-organizer-analytics.png",
        alt: "GeoEvent organizer analytics dashboard showing event performance metrics",
        width: PROJECT_MEDIA_WIDTH,
        height: PROJECT_MEDIA_HEIGHT,
        focal: "top",
      },
    ],
    links: [
      { label: "Source", href: "https://github.com/DeveloperRidoy/GeoEventv2" },
      { label: "Live site", href: "https://geo-eventv2.vercel.app/" },
    ],
    accent: "teal",
  },
];
