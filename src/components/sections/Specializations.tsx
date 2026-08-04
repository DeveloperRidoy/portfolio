import { endToEndFlow, specializations } from "@/data/specializations";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Specializations() {
  return (
    <section
      id="specialties"
      aria-labelledby="specialties-heading"
      className="scroll-mt-20 border-y border-border bg-surface-muted/60 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1280px] px-6">
        <SectionHeader
          id="specialties-heading"
          label="Specializations"
          title="Full-stack breadth, specialized where systems get complex"
          description="I work across the application lifecycle, with deeper experience in operational workflows, backend services, integrations, and cloud delivery."
        />

        <ol
          className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted"
          aria-label="End-to-end delivery flow"
        >
          {endToEndFlow.map((step, index) => (
            <li key={step} className="flex items-center gap-2">
              <span className="rounded-full border border-border-strong bg-surface px-3 py-1.5 text-foreground-soft">
                {step}
              </span>
              {index < endToEndFlow.length - 1 && (
                <span aria-hidden="true" className="text-border-strong">
                  →
                </span>
              )}
            </li>
          ))}
        </ol>

        <div className="mt-12 grid gap-x-10 gap-y-12 lg:grid-cols-2">
          {specializations.map((group, index) => (
            <div
              key={group.id}
              className="border-t border-border-strong pt-6"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-semibold tracking-tight text-foreground">
                  {group.title}
                </h3>
              </div>

              <p className="mt-3 leading-relaxed text-muted">
                {group.description}
              </p>

              <ul className="mt-5 space-y-2 text-sm leading-snug text-foreground-soft">
                {group.practices.map((practice) => (
                  <li key={practice} className="flex gap-2.5">
                    <span
                      className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-support"
                      aria-hidden="true"
                    />
                    {practice}
                  </li>
                ))}
              </ul>

              {group.technologies && (
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {group.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-border bg-surface px-2.5 py-1 font-mono text-[11px] leading-none text-muted-strong"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
