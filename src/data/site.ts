export const siteConfig = {
  name: "Mubarak Hussain Ridoy",
  shortName: "Ridoy",
  role: "Full-Stack Software Engineer",
  location: "Kitchener, Ontario",
  email: "ridoy51306@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/md-ridoy",
  githubUrl: "https://github.com/DeveloperRidoy",
  resumeUrl: "/files/resume.pdf",
  url: "https://ridoy1.vercel.app",
} as const;

export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: "#work", label: "Work" },
  { href: "#specialties", label: "Specialties" },
  { href: "#experience", label: "Experience" },
  { href: "#toolkit", label: "Toolkit" },
  { href: "#contact", label: "Contact" },
];

export const seo = {
  title: "Ridoy | Full-Stack Software Engineer",
  description:
    "Full-Stack Software Engineer specializing in workflow automation, APIs, third-party integrations, cloud services, and DevOps using TypeScript, React, Next.js, Node.js, MongoDB, and AWS.",
  keywords: [
    "Full-Stack Software Engineer",
    "Software Engineer",
    "Workflow Automation",
    "API Development",
    "Third-Party Integrations",
    "Cloud Services",
    "DevOps",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "AWS",
    "Kitchener Ontario",
  ],
};
