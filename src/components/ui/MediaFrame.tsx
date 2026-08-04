import Image from "next/image";
import type { ProjectAccent, ProjectMedia } from "@/data/projects";

const frameAccent: Record<ProjectAccent, string> = {
  cobalt: "ring-1 ring-inset ring-white/10",
  teal: "ring-1 ring-inset ring-[#4fd6c0]/20",
  neon: "ring-1 ring-inset ring-[color:var(--neon-magenta)]/35",
};

interface MediaFrameProps {
  media: ProjectMedia;
  sizes: string;
  accent?: ProjectAccent;
  /** Set to "eager" only for genuine above-the-fold media. */
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "auto" | "low";
  padded?: boolean;
}

export function MediaFrame({
  media,
  sizes,
  accent = "cobalt",
  loading = "lazy",
  fetchPriority = "auto",
  padded = true,
}: MediaFrameProps) {
  const image = (
    <Image
      src={media.src}
      alt={media.alt}
      width={media.width}
      height={media.height}
      sizes={sizes}
      loading={loading}
      fetchPriority={fetchPriority}
      className="h-auto w-full rounded-lg"
      style={media.focal ? { objectPosition: media.focal } : undefined}
    />
  );

  const frame = (
    <div
      className={`overflow-hidden rounded-2xl bg-stage ${frameAccent[accent]} ${
        padded ? "p-2.5 sm:p-3" : ""
      }`}
    >
      {image}
    </div>
  );

  if (!media.caption) return frame;

  return (
    <figure>
      {frame}
      <figcaption className="mt-3 text-sm leading-snug text-muted">
        {media.caption}
      </figcaption>
    </figure>
  );
}
