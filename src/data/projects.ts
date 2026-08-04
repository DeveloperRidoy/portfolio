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

export function isMediaReady(
  media: ProjectMedia,
): media is ProjectMediaReady {
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
      "A production driver-onboarding and compliance platform for Canadian and U.S. hiring workflows. As a full-stack engineer on the team, I contributed across the multilingual applicant experience, administrative review flows, backend workflow logic, document processing, integrations, and the lifecycle that moves drivers from prequalification through safety review, testing, training, and completion.",
    ownership:
      "Team-built platform. My work spanned the applicant-facing flow, safety and compliance review screens, workflow and validation logic on the server, document generation, and the identity and storage integrations behind them.",
    challenge:
      "Hiring a driver meant moving paper packets between HR, safety, compliance, and operations, in two countries and three languages, with no shared view of where an applicant actually stood.",
    contributions: [
      {
        title: "Applicant experience",
        items: [
          "Prequalification with country, company, and application-type selection",
          "A five-page application form followed by policies and consents",
          "English, French, and Spanish applicant experiences",
          "Canadian/U.S., company-specific, and jurisdiction-specific forms and validation",
          "Employment-history, licence, address, document, and competency validation",
          "Secure resumption using SIN/email verification, expiring codes, session cookies, and server-side step gating",
        ],
      },
      {
        title: "Lifecycle and safety review",
        items: [
          "Ten required lifecycle stages plus conditional Flatbed Training",
          "Drive Test, CarriersEdge Training, and Drug Test stages with conditional branching",
          "Safety dashboards with search and filtering, applicant sections, and status visibility",
          "Notes, audit history, termination and restore, and document review",
        ],
      },
      {
        title: "Documents, identity, and delivery",
        items: [
          "S3 presigned upload and download flows with MIME, folder, and size validation",
          "Company- and jurisdiction-specific PDF generation and filling with pdf-lib, previewed through PDF.js/react-pdf-viewer",
          "AWS Lambda processing with Puppeteer and PDFMake for automated document generation",
          "Generated onboarding forms, policies and consents, road-test certificates, and U.S. I-9/W-4 flows where applicable",
          "Microsoft identity/NextAuth with SSP Portal access control",
          "Notifications, completion PDF emails, Cloudflare Turnstile, GitHub Actions, and Vercel delivery",
        ],
      },
    ],
    outcomes: [
      "Enabled paperless onboarding",
      "Improved onboarding data accuracy by 95%",
      "Reduced manual coordination across HR, safety, compliance, and operations",
      "Centralized applicant and lifecycle visibility",
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
        detail: "Multilingual applicant flow, safety dashboards, document review",
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
        status: "placeholder",
        role: "primary",
        projectLabel: "DriveDock",
        screen: "Safety / review operations dashboard",
        filename: "drivedock-safety-processing.png",
        alt: "DriveDock safety processing dashboard showing the driver onboarding lifecycle and review panels",
        width: PROJECT_MEDIA_WIDTH,
        height: PROJECT_MEDIA_HEIGHT,
        focal: "top",
      },
      {
        status: "placeholder",
        role: "secondary",
        projectLabel: "DriveDock",
        screen: "Multilingual applicant workflow",
        filename: "drivedock-applicant-workflow.png",
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
      "A multi-tenant employee-onboarding platform that gives HR teams a secure, repeatable way to invite, verify, onboard, review, modify, approve, and manage employees across Canada, the United States, and India. I built core backend and workflow services spanning protected onboarding sessions, region-aware lifecycle APIs, document pipelines, email automation, auditability, reporting, and generated application packages.",
    ownership:
      "Team-built platform. I owned core backend and workflow services: protected onboarding sessions, region-aware lifecycle APIs, document pipelines, email automation, reporting, and the audit trail.",
    challenge:
      "HR teams in three countries needed one repeatable onboarding path, but each region asks for different data, and every action had to stay verifiable long after the employee started.",
    contributions: [
      {
        title: "Secure onboarding access",
        items: [
          "Digital and manual onboarding paths",
          "Invite tokens stored as HMAC hashes, with encrypted recoverability for the current HR link",
          "One-time six-digit OTP with ten-minute expiry, resend throttling, failed-attempt lockout, and a secure session cookie",
          "AES-256-GCM encryption and HMAC-SHA256 protection in the audited implementation",
        ],
      },
      {
        title: "Region-aware lifecycle",
        items: [
          "Region-aware onboarding flows supporting Canada, the United States, and India",
          "Multi-section employee forms with country-specific data requirements — the India flow covers personal details, government IDs, education, employment, certificates, bank details, declaration, and signature",
          "Lifecycle states for invite/manual PDF, requested modifications, submitted and resubmitted, details confirmed, contract sent and submitted, approved, and terminated",
          "HR actions for review, modification requests, detail confirmation, approval, termination, restore, resend, and deletion",
          "Subsidiary-scoped search, filtering, sorting, pagination, bulk actions, and reporting",
        ],
      },
      {
        title: "Documents, email, and reporting",
        items: [
          "S3 presigned uploads with temporary-to-final document moves, MIME and size validation, cleanup, rollback, and secure downloads",
          "Microsoft Graph email for invitations, OTP, modification, approval, termination, and attachments",
          "Lambda-backed CSV/XLSX reporting with status tracking and S3 delivery",
          "Lambda-backed application-form PDF generation using pdf-lib, including signatures and checkmarks with uploaded documents appended",
          "Audit logs and employee-lifecycle history",
        ],
      },
    ],
    outcomes: [
      "Gave HR a single onboarding path across three countries instead of three parallel processes",
      "Replaced ad-hoc invitations with verified, time-limited, throttled access",
      "Made every lifecycle action reviewable through audit logs and employee history",
      "Automated application packages and subsidiary reporting instead of assembling them by hand",
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
        detail: "Invite and OTP sessions, lifecycle APIs, approvals, audit logs",
      },
      {
        label: "Data, Integrations & Cloud",
        detail: "MongoDB, S3, Lambda, Microsoft Graph, Entra ID",
      },
    ],
    media: [
      {
        status: "placeholder",
        role: "primary",
        projectLabel: "NPT Onboard",
        screen: "HR onboarding-lifecycle dashboard",
        filename: "npt-hr-dashboard.png",
        alt: "NPT Onboard HR dashboard showing employee onboarding lifecycle statuses",
        width: PROJECT_MEDIA_WIDTH,
        height: PROJECT_MEDIA_HEIGHT,
        focal: "top",
      },
      {
        status: "placeholder",
        role: "secondary",
        projectLabel: "NPT Onboard",
        screen: "Region-aware employee onboarding form",
        filename: "npt-onboarding-form.png",
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
      "A complete eCommerce platform I independently researched, designed, and built for a freelance client. It combines a responsive storefront, a live custom-neon builder, calculated dimensions and pricing, guest and customer checkout, multiple payment providers, order tracking, and an administrative workspace for products, categories, media, orders, and fulfilment.",
    ownership:
      "I built the project end to end — from the configurable-product interface and storefront to API routes, MongoDB models, authentication, payment processing, verified webhooks, email workflows, media handling, order lifecycle, and admin tools.",
    challenge:
      "A made-to-order neon sign is not a catalogue item. The builder needed research into how a customizable physical product could be previewed, priced, persisted as structured commerce data, and carried intact through checkout and fulfilment.",
    contributions: [
      {
        title: "Custom neon builder",
        items: [
          "Live neon text preview with glow and responsive scaling",
          "21 fonts, 12 colors, and eight optional social/logo icons",
          "Regular and large size models with calculated physical width",
          "Dynamic price driven by text length, size, and icon choice",
          "Clear, black, mirror, and gold-mirror acrylic finishes",
          "Square, round, and cut-to-shape backing with wall or hanging mounts",
          "Customer notes, validation, and approval consent",
        ],
      },
      {
        title: "Storefront and commerce",
        items: [
          "Categories, product details, variants, sale percentages, search, and filters",
          "Guest and registered-user carts and checkout, with standard and custom products in the same cart",
          "Stripe card checkout, Afterpay/Clearpay through Stripe, and PayPal order creation and capture",
          "Stripe webhook verification with pending and completed payment states",
          "Transactional customer and business emails",
          "Public order tracking using order ID and email",
          "Customer order history, password reset, and address management",
        ],
      },
      {
        title: "Operations and administration",
        items: [
          "Full custom configuration stored in cart and order data",
          "Custom preview and specification rendered in cart, tracking, and admin order interfaces",
          "Admin dashboard with product and category CRUD",
          "Order search and filtering, detail views, state updates, and bulk operations",
          "Cloudinary upload and delete workflows with multiple product images",
          "JWT authentication, HTTP-only cookies, password hashing, and role-based access",
        ],
      },
    ],
    outcomes: [
      "Delivered a complete client commerce operation as a solo developer",
      "Connected custom-product design directly to cart, payment, order, and fulfilment",
      "Gave the business an operational admin interface rather than requiring database or code changes",
      "Supported multiple payment methods with guest and registered checkout",
      "Demonstrated independent research and end-to-end ownership early in my career",
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
        status: "placeholder",
        role: "primary",
        projectLabel: "Neon Shop",
        screen: "Custom neon builder",
        filename: "neonshop-builder.png",
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
      "A launched web platform for discovering, creating, and managing local events. GeoEvent combines first-party listings with Ticketmaster events, map-based discovery, registrations, organizer tools, analytics, role-based administration, and AI-assisted event creation and import.",
    ownership:
      "Built and launched for real users as a capstone project, covering the web application, the API layer, the data model, and every third-party integration behind it.",
    challenge:
      "Local event discovery was split between first-party listings and external ticketing sources, and organizers had nowhere to publish an event, fill it, and then measure what happened.",
    contributions: [
      {
        title: "Discovery and attendance",
        items: [
          "Local events normalized alongside Ticketmaster events",
          "Google Maps advanced markers with marker clustering",
          "Search and filtering by text, location, date, category, format, and event-language metadata",
          "Saved events, registration and unregistration, confirmation email, and customer-facing event history",
          "Post-event reviews and ratings limited to registered attendees",
        ],
      },
      {
        title: "Organizer tools and AI assistance",
        items: [
          "Organizer event creation and editing with S3 image and video uploads",
          "URL-based event import using Cheerio extraction and OpenAI structuring",
          "AI-assisted event descriptions and event-banner generation",
          "Organizer followers with notifications when a new event is published",
          "Organizer analytics for event counts, views, registrations, average rating, top events, trends, and followers",
        ],
      },
      {
        title: "Platform",
        items: [
          "Next.js web application over a Route Handler API layer and a MongoDB/Mongoose data model",
          "JWT/bcrypt authentication with admin, organizer, and user roles",
          "Per-event view, share, and registration analytics",
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
        status: "placeholder",
        role: "primary",
        projectLabel: "GeoEvent",
        screen: "Map-based event discovery",
        filename: "geoevent-map-discovery.png",
        alt: "GeoEvent map-based event discovery interface with clustered markers",
        width: PROJECT_MEDIA_WIDTH,
        height: PROJECT_MEDIA_HEIGHT,
        focal: "center",
      },
      {
        status: "placeholder",
        role: "secondary",
        projectLabel: "GeoEvent",
        screen: "Organizer analytics dashboard",
        filename: "geoevent-organizer-analytics.png",
        alt: "GeoEvent organizer analytics dashboard showing event performance metrics",
        width: PROJECT_MEDIA_WIDTH,
        height: PROJECT_MEDIA_HEIGHT,
        focal: "top",
      },
    ],
    links: [
      { label: "Source", href: "https://github.com/DeveloperRidoy/GeoEventv2" },
      { label: "Live site", href: "https://geoevent.vercel.app" },
    ],
    accent: "teal",
  },
];
