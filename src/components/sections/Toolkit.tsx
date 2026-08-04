import { coreTechnologies, toolkit } from "@/data/toolkit";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Toolkit() {
  return (
    <section
      id="toolkit"
      aria-labelledby="toolkit-heading"
      className="scroll-mt-20 border-y border-border bg-surface-muted/60 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1280px] px-6">
        <SectionHeader
          id="toolkit-heading"
          label="Technical toolkit"
          title="Technologies I use to ship complete products"
        />

        <ul className="mt-10 flex flex-wrap gap-2.5">
          {coreTechnologies.map((tech) => (
            <li
              key={tech}
              className="rounded-xl border border-accent/25 bg-accent px-4 py-2.5 text-sm font-medium text-white"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {toolkit.map((group) => (
            <div key={group.domain} className="border-t border-border-strong pt-5">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                {group.domain}
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-foreground-soft">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
