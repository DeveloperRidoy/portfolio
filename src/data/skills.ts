export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Backend",
    skills: [
      "C#",
      "ASP.NET Core",
      "Node.js",
      "REST APIs",
      "Authentication",
      "RBAC",
    ],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "TailwindCSS"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "DynamoDB"],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      "AWS EC2",
      "AWS S3",
      "AWS Lambda",
      "Docker",
      "CI/CD",
      "GitHub Actions",
    ],
  },
  {
    category: "Architecture",
    skills: [
      "Workflow engines",
      "System integrations",
      "Async processing",
      "Document generation",
      "Scalable application design",
    ],
  },
];

export const heroKeywords = [
  "C# / ASP.NET Core",
  "Node.js",
  "AWS",
  "REST APIs",
  "PostgreSQL",
  "Workflow Automation",
];
