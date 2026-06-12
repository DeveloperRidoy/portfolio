export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

export const experience: ExperienceItem[] = [
  {
    role: "Software Engineer",
    company: "SSP Group of Companies",
    period: "Jan 2025 – Present",
    description:
      "Built production workflow automation systems, onboarding platforms, attendance tracking automation, reporting tools, and cross-department internal applications.",
  },
  {
    role: "Full-stack Web Developer",
    company: "B. Nestor Logistics Inc.",
    period: "Jan 2024 – Jan 2025",
    description:
      "Built logistics automation platform, QuickBooks invoicing integration, compliance document generation, RBAC, AWS deployment, and CI/CD workflows.",
  },
  {
    role: "Software Engineer / Full-stack Developer",
    company: "Freelance & Contract",
    period: "Mar 2019 – Jan 2024",
    description:
      "Delivered 15+ web applications, APIs, cloud deployments, and integrations for startups and SMBs.",
  },
];
