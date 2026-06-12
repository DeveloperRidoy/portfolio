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

        <div className="overflow-hidden rounded-xl border border-border">
          {skillCategories.map((category, index) => (
            <div
              key={category.category}
              className={`flex flex-col gap-3 px-5 py-5 sm:flex-row sm:items-start sm:gap-8 sm:px-6 sm:py-5 ${
                index !== skillCategories.length - 1
                  ? "border-b border-border"
                  : ""
              } ${index % 2 === 0 ? "bg-surface" : "bg-surface-elevated/50"}`}
            >
              <div className="min-w-[8.5rem] shrink-0">
                <h3 className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
                  {category.category}
                </h3>
              </div>
              <ul className="flex min-w-0 flex-1 flex-wrap gap-x-1 gap-y-1">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skill} className="inline text-sm text-foreground/90">
                    {skillIndex > 0 && (
                      <span className="mx-2 text-muted/40" aria-hidden="true">
                        ·
                      </span>
                    )}
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
