import type { ProjectMedia } from "@/data/projects";

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  media?: ProjectMedia;
}

export const experience: ExperienceItem[] = [
  {
    role: "Software Engineer",
    company: "SSP Group of Companies",
    period: "Jan 2025 – Present",
    location: "Milton, Ontario",
    highlights: [
      "Designed and built DriveDock's full backend, digitizing driver onboarding across applicant, safety, compliance, and operations workflows.",
      "Contributed to multilingual applicant and internal review interfaces whose behaviour depended on backend lifecycle state, validation, identity, storage, and document-generation services.",
      "Developed multi-region employee-lifecycle and workflow features supporting Canada, the United States, and India, including invitations, validation, documents, approvals, access control, and auditability.",
      "Automated attendance tracking and reporting, saving more than 100 staff hours monthly.",
      "Owned features from stakeholder requirements and technical design through implementation, deployment, and production support.",
    ],
  },
  {
    role: "Full-Stack Web Developer",
    company: "B. Nestor Logistics Inc.",
    period: "Jan 2024 – Jan 2025",
    location: "Waterloo, Ontario",
    highlights: [
      "Built and maintained a logistics-automation platform that reduced manual workflows by 70%.",
      "Automated invoicing and financial workflows through QuickBooks, saving more than ten hours per week.",
      "Developed operational interfaces, backend services, RBAC, and PDF/spreadsheet reporting systems.",
      "Managed AWS EC2/S3 infrastructure and CI/CD, reducing deployment time by 30%.",
      "Worked directly with operations teams to deliver features used in daily business workflows.",
    ],
  },
  {
    role: "Full-Stack Web Developer",
    company: "Freelance",
    period: "Mar 2019 – Jan 2024",
    location: "Remote",
    highlights: [
      "Delivered more than 15 full-stack applications for startups and small businesses.",
      "Built responsive applications, APIs, authentication systems, commerce workflows, and third-party integrations.",
      "Independently delivered Neon Shop as a complete client eCommerce and configurable-product platform.",
      "Deployed and maintained applications using AWS, GCP, Vercel, and Netlify.",
      "Provided debugging, performance optimization, production maintenance, and client support.",
    ],
  },
];
