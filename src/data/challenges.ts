export interface EngineeringChallenge {
  title: string;
  description: string;
}

export const engineeringChallenges: EngineeringChallenge[] = [
  {
    title: "Workflow Orchestration",
    description:
      "Designed multi-stage workflows with validation, conditional progression, review queues, and approval states.",
  },
  {
    title: "Secure Onboarding Sessions",
    description:
      "Implemented invite-based onboarding, protected sessions, OTP verification, and guarded routes.",
  },
  {
    title: "Document Automation",
    description:
      "Generated PDFs from structured business data for onboarding, compliance, invoicing, and reporting workflows.",
  },
  {
    title: "Cloud File Handling",
    description:
      "Built secure upload/download workflows using AWS S3 and presigned URLs.",
  },
  {
    title: "Auditability",
    description:
      "Implemented audit logging systems to track onboarding lifecycle actions and administrative changes.",
  },
  {
    title: "Third-Party Integrations",
    description:
      "Integrated QuickBooks, Google Maps, OpenAI, Microsoft Entra, AWS services, email systems, and external APIs.",
  },
  {
    title: "Operational Dashboards",
    description:
      "Built dashboards for onboarding progress, logistics workflows, analytics, reporting, and approvals.",
  },
];
