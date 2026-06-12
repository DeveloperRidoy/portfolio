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

        <div className="relative">
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px bg-border sm:left-[11px]"
            aria-hidden="true"
          />
          <div className="space-y-8">
            {experience.map((item, index) => (
              <div key={item.company} className="relative flex gap-6 sm:gap-8">
                <div className="relative z-10 mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-background sm:h-6 sm:w-6">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent sm:h-2 sm:w-2" />
                </div>
                <div className="min-w-0 flex-1 rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:border-accent/30">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {item.role}
                      </h3>
                      <p className="text-sm font-medium text-accent">
                        {item.company}
                      </p>
                    </div>
                    <p className="shrink-0 font-mono text-xs text-muted">
                      {item.period}
                    </p>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                  {index === 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {[
                        "Workflow Automation",
                        "Onboarding Platforms",
                        "Internal Tools",
                      ].map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-accent/10 px-2 py-0.5 font-mono text-xs text-accent"
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
