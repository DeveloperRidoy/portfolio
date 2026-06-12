export interface SystemCard {
  title: string;
  description: string;
  icon: "api" | "workflow" | "cloud" | "enterprise";
}

export const systems: SystemCard[] = [
  {
    title: "Backend APIs & Integrations",
    description:
      "Designing REST APIs, authentication, authorization, database models, and third-party integrations for production systems.",
    icon: "api",
  },
  {
    title: "Workflow Automation",
    description:
      "Building systems that replace manual business processes with structured, validated, trackable workflows.",
    icon: "workflow",
  },
  {
    title: "Cloud-Based Processing",
    description:
      "Using AWS services for storage, async jobs, document handling, and scalable backend automation.",
    icon: "cloud",
  },
  {
    title: "Internal Enterprise Platforms",
    description:
      "Developing tools used by HR, compliance, logistics, operations, and management teams.",
    icon: "enterprise",
  },
];
