export const coreTechnologies = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "AWS",
];

export interface ToolkitGroup {
  domain: string;
  items: string[];
}

export const toolkit: ToolkitGroup[] = [
  {
    domain: "Languages",
    items: ["TypeScript", "JavaScript", "C#", "Python", "SQL", "HTML", "CSS"],
  },
  {
    domain: "Frontend",
    items: [
      "React",
      "Next.js",
      "Redux",
      "Angular",
      "Svelte",
      "Tailwind CSS",
      "React Hook Form",
      "Zod",
      "Chart.js",
    ],
  },
  {
    domain: "Backend",
    items: [
      "Node.js",
      "Next.js Route Handlers",
      "Express",
      "ASP.NET Core",
      "REST APIs",
      "Authentication",
      "RBAC",
      "Webhooks",
      "Background jobs",
    ],
  },
  {
    domain: "Data",
    items: ["MongoDB", "Mongoose", "PostgreSQL", "DynamoDB", "Redis"],
  },
  {
    domain: "Cloud & DevOps",
    items: [
      "AWS S3",
      "AWS Lambda",
      "AWS EC2",
      "AWS IAM",
      "AWS EKS",
      "AWS CDK",
      "AWS VPC",
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "Vercel",
      "Netlify",
    ],
  },
  {
    domain: "Integrations",
    items: [
      "Microsoft Entra ID",
      "NextAuth",
      "Microsoft Graph",
      "Stripe",
      "PayPal",
      "QuickBooks",
      "Google Maps",
      "Ticketmaster",
      "OpenAI",
      "Cloudinary",
      "Nodemailer",
    ],
  },
  {
    domain: "Documents & reporting",
    items: ["pdf-lib", "PDFMake", "Puppeteer", "PDF.js", "ExcelJS", "CSV / XLSX exports"],
  },
  {
    domain: "Quality & tooling",
    items: ["Jest", "Supertest", "ESLint", "Git", "i18next", "Postman"],
  },
];
