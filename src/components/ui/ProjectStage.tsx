import type { Project } from "@/data/projects";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { LayerPlate } from "@/components/ui/LayerStrip";

interface ProjectStageProps {
  project: Project;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "auto" | "low";
  /** Set when the stage sits inside an already-dark section. */
  nested?: boolean;
}

export function ProjectStage({
  project,
  loading = "lazy",
  fetchPriority = "auto",
  nested = false,
}: ProjectStageProps) {
  const [primary, secondary] = project.media;
  const accent = project.accent ?? "cobalt";

  if (!primary) {
    return (
      <LayerPlate
        title={project.title}
        layers={project.layers}
        stack={project.stack}
        accent={accent}
        nested={nested}
      />
    );
  }

  return (
    <div className="space-y-5">
      <MediaFrame
        media={primary}
        accent={accent}
        loading={loading}
        fetchPriority={fetchPriority}
        sizes="(max-width: 1023px) 100vw, 44vw"
      />
      {secondary && (
        <div className="sm:pl-10 lg:pl-14">
          <MediaFrame
            media={secondary}
            accent={accent}
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 80vw, 36vw"
          />
        </div>
      )}
    </div>
  );
}
