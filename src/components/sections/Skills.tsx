import { skillCategories } from "@/data/skills";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-16 border-y border-border bg-surface py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="Technical Stack"
          title="Skills & technologies"
          description="Grouped by engineering domain — backend services, frontend development, data layer, cloud infrastructure, and system architecture."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="rounded-xl border border-border bg-surface-elevated p-6"
            >
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
                {category.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-border bg-surface px-3 py-1.5 text-sm text-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
