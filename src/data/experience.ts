export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Software Engineer",
    company: "SSP Group of Companies",
    period: "Jan 2025 – Present",
    highlights: [
      "Designed and developed workflow automation platforms used across HR, safety, compliance, and operations teams.",
      "Built onboarding, attendance tracking, reporting, and workforce management systems supporting daily business operations.",
      "Developed cloud-integrated services and internal tools that reduced manual effort and improved operational visibility.",
    ],
  },
  {
    role: "Software Developer",
    company: "B. Nestor Logistics Inc.",
    period: "Jan 2024 – Jan 2025",
    highlights: [
      "Designed logistics and financial automation systems including dispatch workflows, load management, and invoicing pipelines.",
      "Integrated QuickBooks for automated billing, reducing manual invoice preparation and financial data re-entry.",
      "Built compliance reporting and document automation tools that replaced spreadsheet-based operational workflows.",
    ],
  },
  {
    role: "Software Engineer / Full-stack Developer",
    company: "Freelance & Contract",
    period: "Mar 2019 – Jan 2024",
    highlights: [
      "Delivered API-driven applications and business automation tools for startups and SMB clients.",
      "Built cloud-integrated software with third-party API connections and deployment pipelines.",
      "Developed custom software solutions spanning e-commerce, real-time applications, and internal business tools.",
    ],
  },
];
