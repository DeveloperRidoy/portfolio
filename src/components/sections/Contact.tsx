import { siteConfig } from "@/data/site";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border border-border bg-surface p-8 sm:p-12">
          <SectionHeader
            label="Contact"
            title="Let's connect"
            description="Interested in backend engineering, workflow automation, enterprise software, or full-stack product development? I'd welcome the conversation."
          />

          {/* Recruiter resources */}
          <div className="mb-10 rounded-xl border border-accent/20 bg-accent/5 p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              Recruiter Resources
            </p>
            <p className="mt-2 text-sm text-muted">
              Quick access to resume and professional profiles.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={siteConfig.resumeUrl}
                className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-accent-hover"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                  />
                </svg>
                Download Resume
              </a>
              <a
                href={siteConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-accent/40 hover:bg-accent/5"
              >
                View LinkedIn
              </a>
              <a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-accent/40 hover:bg-accent/5"
              >
                View GitHub
              </a>
            </div>
            <p className="mt-4 font-mono text-[11px] text-muted">
              Resume: replace with latest resume PDF at{" "}
              <code className="rounded bg-surface-elevated px-1 py-0.5">
                public/files/resume.pdf
              </code>
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="group flex flex-col rounded-xl border border-border bg-surface-elevated p-5 transition-all hover:border-accent/30 hover:shadow-md"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                Email
              </span>
              <span className="mt-2 text-sm font-medium text-foreground transition-colors group-hover:text-accent">
                {siteConfig.email}
              </span>
            </a>

            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-xl border border-border bg-surface-elevated p-5 transition-all hover:border-accent/30 hover:shadow-md"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                LinkedIn
              </span>
              <span className="mt-2 text-sm font-medium text-foreground transition-colors group-hover:text-accent">
                View Profile
              </span>
            </a>

            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-xl border border-border bg-surface-elevated p-5 transition-all hover:border-accent/30 hover:shadow-md"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                GitHub
              </span>
              <span className="mt-2 text-sm font-medium text-foreground transition-colors group-hover:text-accent">
                View Repositories
              </span>
            </a>

            <a
              href={siteConfig.resumeUrl}
              className="group flex flex-col rounded-xl border border-border bg-surface-elevated p-5 transition-all hover:border-accent/30 hover:shadow-md"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                Resume
              </span>
              <span className="mt-2 text-sm font-medium text-foreground transition-colors group-hover:text-accent">
                Download PDF
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
