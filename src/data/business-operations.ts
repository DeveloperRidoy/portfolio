export interface BusinessOperation {
  label: string;
  description: string;
}

export const businessOperations: BusinessOperation[] = [
  {
    label: "Hiring",
    description:
      "Driver and employee onboarding workflows with multi-department review and compliance processing.",
  },
  {
    label: "Compliance",
    description:
      "Document collection, validation, audit trails, and approval workflows for regulated operations.",
  },
  {
    label: "Operations",
    description:
      "Dispatch, load management, workforce tracking, and day-to-day operational workflows.",
  },
  {
    label: "Finance",
    description:
      "Invoicing automation, QuickBooks integration, billing cycles, and financial record generation.",
  },
  {
    label: "Reporting",
    description:
      "Operational dashboards, PDF exports, analytics, and management reporting across departments.",
  },
];
