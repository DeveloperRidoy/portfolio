import { siteConfig } from "@/data/site";
import { heroKeywords } from "@/data/skills";
import { KeywordPill } from "@/components/ui/KeywordPill";
import { SystemDiagram } from "@/components/ui/SystemDiagram";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
      <div
        className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-accent/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="animate-fade-in-up">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
              {siteConfig.title} · {siteConfig.location}
            </p>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
              Software Engineer building backend systems, workflow automation
              platforms, and production-grade business applications.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              I design and develop API-driven systems, cloud-integrated
              workflows, and scalable full-stack applications that reduce manual
              work and improve operational efficiency.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#case-studies"
                className="inline-flex items-center rounded-md bg-accent px-6 py-3 text-sm font-medium text-white transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/20"
              >
                View Case Studies
              </a>
              <a
                href={siteConfig.resumeUrl}
                className="inline-flex items-center rounded-md border border-border bg-surface px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-accent/40 hover:bg-accent/5"
              >
                Download Resume
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {heroKeywords.map((keyword) => (
                <KeywordPill key={keyword}>{keyword}</KeywordPill>
              ))}
            </div>
          </div>

          <div className="animate-fade-in-up animation-delay-200">
            <SystemDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}
