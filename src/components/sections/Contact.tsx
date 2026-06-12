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
            description="Interested in backend engineering, full-stack product development, workflow automation, or enterprise software roles? Let's connect."
          />

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
                {/* Replace with your LinkedIn profile URL in src/data/site.ts */}
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
                {/* Replace with your GitHub profile URL in src/data/site.ts */}
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
                {/* Replace with resume PDF link in src/data/site.ts */}
                Download PDF
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
