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
      "Interfaces people use all day: long forms, review queues, dashboards, and configurable products that have to stay clear under real data.",
    practices: [
      "Responsive interfaces and design systems",
      "Complex multi-step forms and validation",
      "Dashboards and operational review screens",
      "Configurable-product experiences",
      "Reusable components and accessible UX",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "React Hook Form",
      "Zod",
      "Tailwind CSS",
      "Redux",
      "Angular",
      "Svelte",
    ],
  },
  {
    id: "workflow-automation",
    title: "Workflow automation",
    description:
      "The logic that moves a record from request to approved: who can act, what unlocks next, what gets generated, and what the audit trail says afterwards.",
    practices: [
      "Conditional progression and lifecycle states",
      "Approvals and review queues",
      "Audit trails and change history",
      "Notifications and email automation",
      "Document generation and asynchronous processing",
      "Operational dashboards and reporting",
    ],
  },
  {
    id: "apis-integrations",
    title: "APIs and integrations",
    description:
      "Connecting a product to the systems a business already runs on — identity, payments, finance, maps, media, and external data — without the seams showing.",
    practices: [
      "REST API design and route handlers",
      "Authentication and authorization",
      "Webhooks and verified callbacks",
      "Identity providers and single sign-on",
      "Third-party data and content ingestion",
    ],
    technologies: [
      "Microsoft Entra ID",
      "NextAuth",
      "Microsoft Graph",
      "QuickBooks",
      "Stripe",
      "PayPal",
      "Afterpay / Clearpay",
      "Google Maps",
      "Ticketmaster",
      "OpenAI",
      "Cloudinary",
      "Email services",
    ],
  },
  {
    id: "cloud-devops",
    title: "Cloud and DevOps",
    description:
      "Getting the work shipped and keeping it running: storage, serverless processing, containers, pipelines, and production support after launch.",
    practices: [
      "Serverless processing and background jobs",
      "Object storage and presigned access",
      "Containerized environments",
      "CI/CD pipelines and automated delivery",
      "Production maintenance and monitoring",
    ],
    technologies: [
      "AWS S3",
      "AWS Lambda",
      "AWS EC2",
      "AWS IAM",
      "AWS EKS",
      "AWS CDK",
      "AWS VPC",
      "Docker",
      "GitHub Actions",
      "Vercel",
      "Netlify",
    ],
  },
];

export const endToEndFlow = [
  "Interface",
  "Workflow & APIs",
  "Data & Integrations",
  "Cloud & Delivery",
];
