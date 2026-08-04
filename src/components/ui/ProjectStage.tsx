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
  const primary =
    project.media.find((item) => item.role === "primary") ?? project.media[0];
  const secondary = project.media.find((item) => item.role === "secondary");
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

  const useLayerSupport = accent === "neon" && !secondary;

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
        <div className="w-full sm:w-[90%] sm:pl-6 lg:w-[88%] lg:pl-10">
          <MediaFrame
            media={secondary}
            accent={accent}
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 90vw, 38vw"
          />
        </div>
      )}

      {useLayerSupport && (
        <div className="w-full sm:w-[90%] sm:pl-6 lg:w-[88%] lg:pl-10">
          <LayerPlate
            title={project.title}
            layers={project.layers}
            stack={project.stack}
            accent={accent}
            nested={nested}
            compact
          />
        </div>
      )}
    </div>
  );
}
