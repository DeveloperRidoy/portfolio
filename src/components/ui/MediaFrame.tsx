import { InspectableImage } from "@/components/ui/InspectableImage";
import type { ProjectAccent, ProjectMedia } from "@/data/projects";
import { isMediaReady } from "@/data/projects";

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

function PlaceholderBox({
  media,
  accent,
  padded,
}: {
  media: ProjectMedia;
  accent: ProjectAccent;
  padded: boolean;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl bg-stage ${frameAccent[accent]} ${
        padded ? "p-2.5 sm:p-3" : ""
      }`}
    >
      <div
        className="relative flex w-full flex-col justify-between overflow-hidden rounded-lg border border-dashed border-stage-border bg-stage-soft"
        style={{ aspectRatio: `${media.width} / ${media.height}` }}
        role="img"
        aria-label={`Placeholder for ${media.alt}`}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(168,179,200,0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168,179,200,0.12) 1px, transparent 1px)
            `,
            backgroundSize: "28px 28px",
          }}
          aria-hidden="true"
        />

        <div className="relative flex items-start justify-between gap-3 p-4 sm:p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-on-stage-muted">
            {media.projectLabel}
          </p>
          <p className="shrink-0 rounded-full border border-stage-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-on-stage-muted">
            {media.role}
          </p>
        </div>

        <div className="relative px-4 pb-2 sm:px-5">
          <p className="max-w-[22rem] text-base font-medium leading-snug text-on-stage sm:text-lg">
            {media.screen}
          </p>
        </div>

        <div className="relative mt-auto space-y-1 border-t border-stage-border/80 px-4 py-3.5 sm:px-5">
          <p className="font-mono text-[11px] leading-snug text-on-stage-muted">
            {media.filename}
          </p>
          <p className="font-mono text-[11px] text-on-stage-muted/80">
            {`${media.width} x ${media.height} | 16:10`}
          </p>
        </div>
      </div>
    </div>
  );
}

export function MediaFrame({
  media,
  sizes,
  accent = "cobalt",
  loading = "lazy",
  fetchPriority = "auto",
  padded = true,
}: MediaFrameProps) {
  if (!isMediaReady(media)) {
    const placeholder = (
      <PlaceholderBox media={media} accent={accent} padded={padded} />
    );
    if (!media.caption) return placeholder;
    return (
      <figure>
        {placeholder}
        <figcaption className="mt-3 text-sm leading-snug text-muted">
          {media.caption}
        </figcaption>
      </figure>
    );
  }

  const image = (
    <InspectableImage
      src={media.src}
      alt={media.alt}
      width={media.width}
      height={media.height}
      sizes={sizes}
      loading={loading}
      fetchPriority={fetchPriority}
      focal={media.focal}
      caption={media.caption ?? media.screen}
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
