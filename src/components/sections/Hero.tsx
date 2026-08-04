import { siteConfig } from "@/data/site";
import { projects } from "@/data/projects";
import { coreTechnologies } from "@/data/toolkit";
import { Tag } from "@/components/ui/Tag";

function HeroPanel({
  projectId,
}: {
  projectId: "drivedock" | "neon-shop";
}) {
  const project = projects.find((item) => item.id === projectId);
  if (!project) return null;

  const accent = project.accent ?? "cobalt";

  return (
    <div
      className={`on-stage relative overflow-hidden rounded-2xl bg-stage p-6 ${
        accent === "neon"
          ? "ring-1 ring-inset ring-[color:var(--neon-magenta)]/35"
          : "ring-1 ring-inset ring-white/10"
      }`}
    >
      {accent === "neon" && (
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[color:var(--neon-magenta)]/25 blur-3xl"
          aria-hidden="true"
        />
      )}
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-on-stage-muted">
        {project.status.split(" · ")[0]}
      </p>
      <p className="mt-3 text-lg font-semibold text-on-stage">
        {project.title}
      </p>
      <p className="mt-1.5 text-sm leading-snug text-on-stage-muted">
        {project.subtitle}
      </p>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.slice(0, 4).map((item) => (
          <span
            key={item}
            className="rounded-full border border-stage-border px-2.5 py-1 font-mono text-[10px] text-on-stage-muted"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-14 sm:pb-24 sm:pt-20">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-accent-soft/70 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1280px] px-6">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          <div className="animate-rise">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
              Full-Stack Software Engineer · Kitchener, Ontario
            </p>

            <h1 className="mt-5 text-balance text-[2.15rem] font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.35rem]">
              I build full-stack products that automate complex operations and
              connect business systems.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground-soft">
              I design and ship complete applications—from polished React
              interfaces and workflow engines to APIs, third-party integrations,
              cloud infrastructure, and CI/CD.
            </p>

            <p className="mt-4 max-w-xl leading-relaxed text-muted">
              Currently building software used across hiring, onboarding,
              compliance, logistics, workforce management, invoicing, and
              reporting.
            </p>

            <p className="mt-7 border-l-2 border-accent pl-4 font-mono text-sm text-muted-strong">
              Workflow Automation · APIs &amp; Integrations · Cloud &amp; DevOps
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="inline-flex items-center rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
              >
                View selected work
              </a>
              <a
                href={siteConfig.resumeUrl}
                className="inline-flex items-center rounded-lg border border-border-strong bg-surface px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                Download resume
              </a>
            </div>

            <ul className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
              <li>
                <a
                  href={siteConfig.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
                >
                  Email
                </a>
              </li>
            </ul>

            <ul className="mt-8 flex flex-wrap gap-2">
              {coreTechnologies.map((tech) => (
                <li key={tech}>
                  <Tag>{tech}</Tag>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-rise delay-1 space-y-5 lg:pt-6">
            <HeroPanel projectId="drivedock" />
            <div className="sm:pl-8 lg:pl-12">
              <HeroPanel projectId="neon-shop" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
