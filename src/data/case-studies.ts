export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  technicalHighlights: string[];
  businessImpact: string[];
  techStack: string[];
  /** Path under public/, e.g. "/images/case-studies/drivedock.png" */
  image?: string;
  imageAlt: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "drivedock",
    title: "DriveDock",
    subtitle: "Driver Onboarding & Workflow Automation Platform",
    description:
      "Production onboarding platform that digitized and automated driver hiring workflows across HR, safety, compliance, and operations teams.",
    problem:
      "Driver onboarding involved fragmented paper-based processes across multiple departments, causing delays, data inconsistencies, and compliance gaps.",
    solution:
      "Built a centralized workflow automation platform with multi-step validation, role-based dashboards, and cloud-integrated document generation to orchestrate end-to-end onboarding.",
    technicalHighlights: [
      "Multi-step workflow engine",
      "Validation and session persistence",
      "Role-based dashboards",
      "Document generation",
      "Cross-department workflow orchestration",
      "Cloud-based automation",
      "Paperless onboarding",
    ],
    businessImpact: [
      "95% improvement in onboarding data accuracy",
      "Reduced cross-department handoff delays",
      "Enabled paperless compliance workflows",
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
    description:
      "Multi-tenant employee onboarding system supporting hiring workflows across Canada, the United States, and India.",
    problem:
      "Organizations needed a secure, scalable onboarding system that could handle multi-region compliance, document collection, and HR approval workflows across tenants.",
    solution:
      "Developed a multi-tenant platform with invite-based onboarding, OTP verification, secure document uploads, and audit-tracked approval workflows.",
    technicalHighlights: [
      "Invite-based onboarding",
      "OTP verification",
      "Secure document uploads using AWS S3",
      "HR approval workflows",
      "Audit tracking",
      "Multi-stage onboarding lifecycle",
      "Digital and PDF-based onboarding flows",
    ],
    businessImpact: [
      "Standardized onboarding across multiple regions",
      "Improved compliance auditability",
      "Reduced manual HR processing time",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "AWS S3",
      "React Hook Form",
      "Zod",
    ],
    image: "/images/case-studies/npt-onboard.png",
    imageAlt: "NPT Onboard employee onboarding workflow",
  },
  {
    id: "geoevent",
    title: "GeoEvent",
    subtitle: "Event Discovery & Management Platform",
    description:
      "Full-stack event discovery and management platform with scalable backend APIs, PostgreSQL data modeling, map-based search, and analytics dashboards.",
    problem:
      "Event organizers and attendees lacked a unified platform for discovery, registration, and management with reliable data modeling and location-based search.",
    solution:
      "Designed ASP.NET Core APIs with PostgreSQL relational schemas, integrated Google Maps for location search, and built analytics dashboards with multilingual support.",
    technicalHighlights: [
      "ASP.NET Core backend APIs",
      "PostgreSQL relational schema design",
      "Google Maps API integration",
      "OpenAI API integration for structured event descriptions",
      "Event registration workflows",
      "Analytics dashboards",
      "Multilingual support",
    ],
    businessImpact: [
      "Scalable event management for organizers",
      "Improved discovery through map-based search",
      "Structured data pipeline for reporting",
    ],
    techStack: [
      "ASP.NET Core",
      "C#",
      "PostgreSQL",
      "React",
      "React Native",
      "Google Maps API",
      "OpenAI API",
    ],
    image: "/images/case-studies/geoevent.png",
    imageAlt: "GeoEvent event discovery map and dashboard",
  },
  {
    id: "logistics",
    title: "Logistics Automation Platform",
    subtitle: "B. Nestor Logistics",
    description:
      "Internal logistics automation platform that reduced manual workflows, automated invoicing, generated compliance documents, and improved reporting efficiency.",
    problem:
      "Logistics operations relied on manual invoicing, spreadsheet-based reporting, and disconnected compliance document workflows.",
    solution:
      "Built an internal platform with QuickBooks API integration, automated PDF and spreadsheet generation, RBAC, and AWS-deployed CI/CD pipelines.",
    technicalHighlights: [
      "QuickBooks API integration",
      "Automated invoicing",
      "PDF and spreadsheet generation",
      "RBAC",
      "AWS deployment",
      "CI/CD pipeline",
    ],
    businessImpact: [
      "70% reduction in manual logistics workflows",
      "40% improvement in reporting efficiency",
      "10+ hours/week saved through QuickBooks automation",
    ],
    techStack: [
      "Node.js",
      "React",
      "MongoDB",
      "PostgreSQL",
      "AWS EC2",
      "AWS S3",
      "QuickBooks API",
    ],
    image: "/images/case-studies/bnestor-logistics.png",
    imageAlt: "B. Nestor Logistics logistics automation platform",
  },
];
