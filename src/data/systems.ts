export interface SystemCard {
  title: string;
  description: string;
  icon: "workflow" | "backend" | "cloud" | "enterprise";
}

export const whatIBuild: SystemCard[] = [
  {
    title: "Workflow Automation",
    description:
      "Digitizing complex business processes — approvals, validations, review queues, and multi-stage operational workflows that replace manual handoffs.",
    icon: "workflow",
  },
  {
    title: "Backend Systems",
    description:
      "Designing the services, data models, and integrations that power business logic — authentication, APIs, and third-party system connections.",
    icon: "backend",
  },
  {
    title: "Cloud Services",
    description:
      "Using AWS for document storage, asynchronous processing, automated generation, and scalable backend operations.",
    icon: "cloud",
  },
  {
    title: "Enterprise Platforms",
    description:
      "Building internal software used daily across HR, compliance, logistics, workforce management, and operations teams.",
    icon: "enterprise",
  },
];

/** @deprecated Use whatIBuild */
export const systems = whatIBuild;
