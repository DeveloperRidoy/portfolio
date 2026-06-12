import { earlierProjects } from "@/data/earlier-projects";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function EarlierProjects() {
  return (
    <section className="border-t border-border bg-surface-muted/20 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="Archive"
          title="Earlier Projects & Experiments"
          description="Earlier full-stack projects and learning experiments — foundational work prior to production enterprise systems."
        />
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          {earlierProjects.map((project) => (
            <div
              key={project.name}
              className="rounded-lg border border-border/60 bg-surface/50 px-4 py-3 transition-colors hover:border-border hover:bg-surface"
            >
              <p className="text-sm font-medium text-foreground">
                {project.name}
              </p>
              {project.description && (
                <p className="mt-0.5 text-xs text-muted">
                  {project.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
