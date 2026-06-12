export interface Metric {
  value: string;
  label: string;
  context: string;
}

export const metrics: Metric[] = [
  {
    value: "95%",
    label: "Onboarding data accuracy",
    context: "Improvement through automated validation workflows",
  },
  {
    value: "100+",
    label: "Staff hours saved monthly",
    context: "Attendance tracking and workflow automation",
  },
  {
    value: "70%",
    label: "Reduction in manual logistics",
    context: "Automated invoicing and compliance workflows",
  },
  {
    value: "40%",
    label: "Reporting efficiency gain",
    context: "Dashboard and document generation systems",
  },
  {
    value: "10+ hrs",
    label: "Saved per week",
    context: "QuickBooks integration and billing automation",
  },
  {
    value: "15+",
    label: "Full-stack applications",
    context: "Delivered across enterprise and contract work",
  },
];
