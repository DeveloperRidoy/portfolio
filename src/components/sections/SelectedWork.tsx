import { projects } from "@/data/projects";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";

const layouts = ["media-right", "media-left", "feature", "media-right"] as const;

export function SelectedWork() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="scroll-mt-20 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1280px] px-6">
        <SectionHeader
          id="work-heading"
          label="Selected work"
          title="Complete products built across interface, workflow, integrations, and cloud"
          description="A selection of production platforms and launched products spanning user interfaces, workflow orchestration, APIs, data modeling, third-party integrations, and cloud delivery."
        />

        <div className="mt-16 space-y-20 sm:mt-20 sm:space-y-28">
          {projects.map((project, index) => (
            <ProjectShowcase
              key={project.id}
              project={project}
              layout={layouts[index] ?? "media-right"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
