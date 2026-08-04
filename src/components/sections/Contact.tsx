import { siteConfig } from "@/data/site";

const links = [
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}`, external: false },
  { label: "LinkedIn", value: "md-ridoy", href: siteConfig.linkedinUrl, external: true },
  { label: "GitHub", value: "DeveloperRidoy", href: siteConfig.githubUrl, external: true },
  { label: "Resume", value: "Download PDF", href: siteConfig.resumeUrl, external: false },
];

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-20 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="rounded-3xl border border-border bg-surface px-6 py-12 sm:px-12 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:gap-16">
            <div>
              <h2
                id="contact-heading"
                className="text-balance text-3xl font-semibold leading-[1.15] tracking-tight text-foreground sm:text-4xl"
              >
                Looking for a full-stack engineer who can own complex product
                workflows?
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
                I&rsquo;m open to full-time Software Engineer and Full-Stack
                Engineer opportunities where I can build across product
                interfaces, APIs, integrations, data, cloud services, and
                delivery.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
                >
                  Get in touch
                </a>
                <a
                  href={siteConfig.resumeUrl}
                  className="inline-flex items-center rounded-lg border border-border-strong bg-surface px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  Download resume
                </a>
              </div>
            </div>

            <ul className="grid gap-px self-start overflow-hidden rounded-2xl border border-border bg-border">
              {links.map((link) => (
                <li key={link.label} className="bg-surface">
                  <a
                    href={link.href}
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex items-baseline justify-between gap-4 px-5 py-4 transition-colors hover:bg-surface-muted"
                  >
                    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                      {link.label}
                    </span>
                    <span className="text-sm font-medium text-foreground transition-colors group-hover:text-accent">
                      {link.value}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
