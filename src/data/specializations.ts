export interface Specialization {
  id: string;
  title: string;
  description: string;
  practices: string[];
  technologies?: string[];
}

export const specializations: Specialization[] = [
  {
    id: "product-interfaces",
    title: "Product interfaces",
    description:
      "Interfaces people use all day: long forms, review queues, dashboards, and configurable products that must remain clear under real-world complexity.",
    practices: [
      "Multi-step forms with complex validation",
      "Dashboards and operational review screens",
      "Responsive design systems with reusable, accessible components",
    ],
  },
  {
    id: "workflow-automation",
    title: "Workflow automation",
    description:
      "The logic that moves work from request to approval: who can act, what unlocks next, what gets generated, and how each change is recorded.",
    practices: [
      "Lifecycle states, conditional progression, and approval queues",
      "Audit trails, change history, and operational reporting",
      "Document generation, email automation, and background processing",
    ],
  },
  {
    id: "apis-integrations",
    title: "APIs and integrations",
    description:
      "Connecting a product to the systems a business already runs on: identity, payments, finance, maps, media, and external data.",
    practices: [
      "REST API design and route handlers",
      "Authentication, authorization, and single sign-on with external identity providers",
      "Verified webhooks and third-party data ingestion",
    ],
  },
  {
    id: "cloud-devops",
    title: "Cloud and DevOps",
    description:
      "Getting the work shipped and keeping it running: storage, serverless processing, containers, pipelines, and production support after launch.",
    practices: [
      "Serverless processing, background jobs, and presigned object storage",
      "Containerized environments and CI/CD delivery pipelines",
      "Production maintenance and monitoring",
    ],
  },
];

export const endToEndFlow = [
  "Interface",
  "Workflow & APIs",
  "Data & Integrations",
  "Cloud & Delivery",
];
