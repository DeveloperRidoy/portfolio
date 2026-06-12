import { experience } from "@/data/experience";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="Career"
          title="Experience"
          description="Building production systems, internal platforms, and automation tools across enterprise and contract engineering roles."
        />

        <div className="relative pl-2 sm:pl-4">
          <div
            className="absolute left-[15px] top-3 bottom-3 w-px bg-gradient-to-b from-accent/40 via-border to-border sm:left-[19px]"
            aria-hidden="true"
          />

          <div className="space-y-10 sm:space-y-12">
            {experience.map((item, index) => (
              <div key={item.company} className="relative flex gap-5 sm:gap-8">
                <div className="relative z-10 mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-surface shadow-sm sm:h-10 sm:w-10">
                  <span className="font-mono text-[10px] font-semibold text-accent sm:text-xs">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="min-w-0 flex-1 rounded-xl border border-border bg-surface p-6 shadow-sm sm:p-8">
                  <div className="flex flex-col gap-3 border-b border-border/70 pb-5 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                        {item.role}
                      </h3>
                      <p className="mt-0.5 text-sm font-medium text-accent">
                        {item.company}
                      </p>
                    </div>
                    <span className="inline-flex w-fit shrink-0 rounded-md border border-border bg-surface-elevated px-3 py-1 font-mono text-xs text-muted">
                      {item.period}
                    </span>
                  </div>

                  <ul className="mt-5 space-y-3.5">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-3 text-sm leading-relaxed text-muted sm:text-[0.9375rem]"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span className="max-w-prose">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {index === 0 && (
                    <div className="mt-6 flex flex-wrap gap-2 border-t border-border/60 pt-5">
                      {[
                        "Workflow Automation",
                        "Onboarding Platforms",
                        "Internal Tools",
                      ].map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-accent/10 px-2.5 py-1 font-mono text-[11px] text-accent"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
