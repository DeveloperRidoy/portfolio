export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  /** Optional line below subtitle (e.g. showcase positioning) */
  showcaseLabel?: string;
  overview: string;
  description: string;
  problem: string;
  solution: string;
  architecture: string[];
  architectureIntegrations?: string[];
  keyEngineeringDecisions: string[];
  engineeringFocus?: {
    title: string;
    description: string;
    items: string[];
  };
  technicalHighlights: string[];
  businessImpact: string[];
  techStack: string[];
  image?: string;
  imageAlt: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "drivedock",
    title: "DriveDock",
    subtitle: "Driver Onboarding & Compliance Workflow Platform",
    overview:
      "Production workflow platform that replaced paper-based driver hiring across HR, safety, compliance, and operations. The system orchestrates multi-step onboarding, cross-department review queues, compliance document collection, and automated document generation — giving every team visibility into where each applicant stands in the hiring process.",
    description:
      "Production onboarding system digitizing driver hiring, safety processing, compliance documentation, and cross-department review workflows.",
    problem:
      "Driver onboarding required multiple departments to collect, review, validate, and process sensitive hiring and compliance information. Manual paperwork created delays, inconsistent data, repeated follow-ups, and no centralized visibility into onboarding progress.",
    solution:
      "Centralized onboarding platform with step-based workflows, session-protected applicant portals, admin review dashboards, safety and compliance processing modules, automated PDF generation, and audit logging — replacing manual handoffs with structured operational workflows.",
    architecture: [
      "Applicant Portal",
      "Onboarding Workflow Engine",
      "Validation Layer",
      "MongoDB",
      "Admin Review Queue",
      "PDF Generation",
      "AWS Storage",
    ],
    keyEngineeringDecisions: [
      "Multi-step workflow architecture instead of a single large form",
      "Session persistence to support long onboarding processes",
      "Centralized PDF generation rather than manual document handling",
      "Role-based review workflows across departments",
    ],
    technicalHighlights: [
      "Multi-step onboarding engine with step gating",
      "Cross-department review queues and approval states",
      "Safety and compliance workflow modules",
      "Audit logging across the onboarding lifecycle",
      "Automated document generation from structured data",
      "Cloud-integrated file handling for compliance documents",
    ],
    businessImpact: [
      "Eliminated paper-based onboarding by digitizing hiring, safety, and compliance workflows across all participating departments.",
      "Standardized data collection across onboarding stages and reduced validation errors through structured workflows.",
      "Reduced manual coordination between HR, safety, and compliance teams by centralizing onboarding state and review workflows.",
      "Enabled paperless compliance document handling with automated generation and cloud-based storage.",
      "Gave operations and management teams real-time visibility into applicant progress across every onboarding stage.",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "AWS S3",
      "AWS Lambda",
      "OAuth / Microsoft Entra",
    ],
    image: "/images/case-studies/drivedock.png",
    imageAlt: "DriveDock driver onboarding dashboard",
  },
  {
    id: "npt-onboard",
    title: "NPT Onboard",
    subtitle: "Multi-Tenant Employee Onboarding Platform",
    overview:
      "Multi-tenant employee onboarding platform standardizing hiring workflows across subsidiaries and regions. HR teams manage invite-based onboarding, document collection, approval workflows, and compliance tracking from a single operational dashboard — with full audit visibility into every employee lifecycle action.",
    description:
      "Multi-tenant employee onboarding platform supporting secure, repeatable hiring workflows across subsidiaries and regions.",
    problem:
      "HR teams needed a secure and repeatable onboarding process for employees across different regions while maintaining compliance, auditability, and visibility — without manual coordination between subsidiaries.",
    solution:
      "Platform with invite-based onboarding, OTP verification, secure sessions, document uploads, approval workflows, audit logs, PDF generation, and HR reporting — standardizing how employees move from offer to fully onboarded across the organization.",
    architecture: [
      "HR Dashboard",
      "Employee Invite & OTP",
      "Onboarding Workflow",
      "Validation Layer",
      "MongoDB",
      "HR Review Queue",
      "PDF Generation",
      "Audit Logs",
    ],
    keyEngineeringDecisions: [
      "Invite-based onboarding rather than public registration",
      "OTP verification for secure access",
      "Audit logging for compliance visibility",
      "S3-backed document management",
    ],
    technicalHighlights: [
      "Multi-tenant onboarding with region-specific flows",
      "Protected sessions and invite lifecycle management",
      "HR review queues and approval workflows",
      "Audit trail for every onboarding action",
      "Automated PDF and report generation workers",
      "Presigned upload workflows for employee documents",
    ],
    businessImpact: [
      "Standardized employee onboarding across subsidiaries and regions, replacing inconsistent manual processes with a single repeatable workflow.",
      "Gave HR teams centralized visibility into onboarding progress, pending approvals, and document completion across all tenants.",
      "Reduced manual data entry and follow-up by automating invite delivery, document collection, and approval routing.",
      "Strengthened compliance tracking with audit logs capturing every lifecycle action from invite through completion.",
      "Enabled the organization to scale onboarding operations without proportional increases in HR administrative overhead.",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "AWS S3",
      "NextAuth",
      "React Hook Form",
      "Zod",
    ],
    image: "/images/case-studies/npt-onboard.png",
    imageAlt: "NPT Onboard employee onboarding dashboard",
  },
  {
    id: "geoevent",
    title: "GeoEvent",
    subtitle: "Event Discovery & Management Platform",
    showcaseLabel: "C# / ASP.NET Core Showcase Project",
    overview:
      "Full-stack event management platform connecting organizers and attendees through location-aware discovery, registration workflows, and operational analytics. While DriveDock and NPT focus on enterprise workflow automation, GeoEvent served as a dedicated exploration of ASP.NET Core backend architecture, relational data modeling, and service-oriented application design — applied to a real event management domain.",
    description:
      "Event management platform with organizer workflows, registration pipelines, location-based discovery, and operational analytics.",
    problem:
      "Organizers lacked a unified platform for event creation, attendee management, analytics, and communication. Attendees lacked effective local event discovery — and manual administration created bottlenecks in registration and reporting.",
    solution:
      "Centralized event platform with organizer dashboards, registration workflows, analytics for operational decision-making, location-based discovery, and automated communication — replacing fragmented manual event administration.",
    architecture: [
      "Organizer Dashboard",
      "ASP.NET Core API Layer",
      "Business Services",
      "Entity Framework Core",
      "PostgreSQL",
      "External Integrations",
    ],
    architectureIntegrations: [
      "Google Maps",
      "OpenAI",
      "AWS S3",
      "Email Services",
    ],
    engineeringFocus: {
      title: "Backend Engineering Focus",
      description:
        "This project was intentionally designed to explore enterprise backend patterns alongside production case studies:",
      items: [
        "ASP.NET Core API design",
        "Relational data modeling",
        "Service-layer architecture",
        "Entity Framework Core",
        "Integration patterns",
      ],
    },
    keyEngineeringDecisions: [
      "Relational data modeling for event relationships",
      "Service-layer architecture in ASP.NET Core",
      "External integrations isolated behind services",
      "Analytics separated from event management workflows",
    ],
    technicalHighlights: [
      "Event registration and attendee management workflows",
      "Organizer dashboards for operational control",
      "Location-based discovery and map integration",
      "Analytics pipeline for event performance tracking",
      "Automated email notification workflows",
      "Media management for event content",
    ],
    businessImpact: [
      "Consolidated event creation, registration, and attendee management into a single platform, eliminating fragmented manual administration.",
      "Improved local event discoverability for attendees through location-aware search and map-based browsing.",
      "Enabled organizers to make data-driven decisions using registration analytics and attendance tracking rather than manual record-keeping.",
      "Reduced coordination overhead between event setup, promotion, registration, and post-event reporting workflows.",
    ],
    techStack: [
      "C#",
      "ASP.NET Core",
      "Entity Framework Core",
      "PostgreSQL",
      "React",
      "Next.js",
      "Google Maps API",
      "OpenAI API",
      "AWS S3",
      "Docker",
    ],
    image: "/images/case-studies/geoevent.png",
    imageAlt: "GeoEvent organizer dashboard",
  },
  {
    id: "logistics",
    title: "B. Nestor Logistics",
    subtitle: "Logistics Operations & Financial Automation Platform",
    overview:
      "Internal logistics automation platform unifying dispatch operations, load management, invoicing, and compliance reporting. Operations teams manage the full load lifecycle from dispatch through billing — with QuickBooks integration eliminating manual invoice preparation and spreadsheet-based reporting.",
    description:
      "Internal platform automating dispatch operations, load management, invoicing, compliance reporting, and financial workflows.",
    problem:
      "Operations relied on disconnected workflows for dispatching, invoicing, reporting, and documentation. Manual processes duplicated work across teams and slowed billing cycles.",
    solution:
      "Centralized platform with load lifecycle management, dispatch workflows, driver and equipment tracking, QuickBooks-integrated invoicing, automated PDF and spreadsheet generation, and operational reporting dashboards.",
    architecture: [
      "Admin Portal",
      "Load Lifecycle Management",
      "Dispatch Workflows",
      "Invoice Module",
      "QuickBooks Integration",
      "PDF & Report Generation",
      "MongoDB",
    ],
    keyEngineeringDecisions: [
      "QuickBooks as source of truth for invoicing",
      "Generated reports rather than manual spreadsheets",
      "Dispatch lifecycle modeled as workflow states",
    ],
    technicalHighlights: [
      "Load lifecycle management from dispatch to delivery",
      "Dispatch workflow state transitions",
      "QuickBooks OAuth integration for invoice sync",
      "Automated PDF and spreadsheet report generation",
      "Driver and equipment management workflows",
      "Operational reporting dashboards",
    ],
    businessImpact: [
      "Connected dispatch, invoicing, and reporting into a single operational platform, eliminating duplicated data entry across teams.",
      "Accelerated billing cycles by automating invoice generation and syncing financial records directly with QuickBooks.",
      "Replaced manual spreadsheet reporting with generated exports, reducing preparation time for compliance and management reviews.",
      "Reduced document preparation effort by automating PDF generation for invoices, load records, and operational reports.",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "QuickBooks API",
      "PDF generation",
      "Spreadsheet generation",
      "AWS",
    ],
    image: "/images/case-studies/bnestor-logistics.png",
    imageAlt: "B. Nestor Logistics operations dashboard",
  },
];
