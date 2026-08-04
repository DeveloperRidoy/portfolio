import type { ProjectAccent, ProjectLayer } from "@/data/projects";

const stageMarker: Record<ProjectAccent, string> = {
  cobalt: "bg-[#6f8dff]",
  teal: "bg-[#4fd6c0]",
  neon: "bg-[color:var(--neon-magenta)]",
};

const inlineMarker: Record<ProjectAccent, string> = {
  cobalt: "bg-accent",
  teal: "bg-support",
  neon: "bg-[color:var(--neon-magenta)]",
};

interface LayerStripProps {
  layers: ProjectLayer[];
  accent?: ProjectAccent;
  dark?: boolean;
}

/** Compact three-layer indicator — subordinate to product screenshots. */
export function LayerStrip({
  layers,
  accent = "cobalt",
  dark = false,
}: LayerStripProps) {
  return (
    <dl
      className={`grid gap-px overflow-hidden rounded-lg border sm:grid-cols-3 ${
        dark ? "border-stage-border bg-stage-border" : "border-border bg-border"
      }`}
    >
      {layers.map((layer) => (
        <div
          key={layer.label}
          className={`px-3 py-2.5 ${dark ? "bg-stage" : "bg-surface"}`}
        >
          <dt
            className={`flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] ${
              dark ? "text-on-stage-muted" : "text-muted"
            }`}
          >
            <span
              className={`h-1 w-1 shrink-0 rounded-full ${
                dark ? stageMarker[accent] : inlineMarker[accent]
              }`}
              aria-hidden="true"
            />
            {layer.label}
          </dt>
          <dd
            className={`mt-1 text-xs leading-snug ${
              dark ? "text-on-stage-muted" : "text-muted"
            }`}
          >
            {layer.detail}
          </dd>
        </div>
      ))}
    </dl>
  );
}

interface LayerPlateProps {
  layers: ProjectLayer[];
  accent?: ProjectAccent;
  title: string;
  stack: string[];
  /** Use when the plate sits inside an already-dark section. */
  nested?: boolean;
  /** Smaller plate used as Neon Shop's supporting technical visual. */
  compact?: boolean;
}

/**
 * Editorial system-breakdown plate. Used as Neon Shop's supporting visual
 * beside the builder screenshot, and as a full fallback when a project has
 * no media slots. Never imitates a product interface.
 */
export function LayerPlate({
  layers,
  title,
  stack,
  accent = "cobalt",
  nested = false,
  compact = false,
}: LayerPlateProps) {
  return (
    <div
      className={`on-stage relative overflow-hidden rounded-2xl ${
        compact ? "p-5 sm:p-6" : "p-7 sm:p-9"
      } ${
        nested
          ? "border border-stage-border bg-white/[0.04]"
          : "bg-stage ring-1 ring-inset ring-white/10"
      }`}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
        aria-hidden="true"
      />
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-on-stage-muted">
        {title} · system breakdown
      </p>

      <ol className={compact ? "mt-4 space-y-3" : "mt-6 space-y-4"}>
        {layers.map((layer, index) => (
          <li key={layer.label} className="flex gap-3">
            <div className="flex flex-col items-center pt-1.5">
              <span
                className={`h-1.5 w-1.5 shrink-0 rounded-full ${stageMarker[accent]}`}
                aria-hidden="true"
              />
              {index < layers.length - 1 && (
                <span
                  className="mt-1 w-px flex-1 bg-stage-border"
                  aria-hidden="true"
                />
              )}
            </div>
            <div className="pb-0.5">
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-on-stage-muted">
                {layer.label}
              </p>
              <p
                className={`mt-0.5 leading-snug text-on-stage ${
                  compact ? "text-sm" : "text-[15px]"
                }`}
              >
                {layer.detail}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <div
        className={`flex flex-wrap gap-1.5 border-t border-stage-border ${
          compact ? "mt-5 pt-4" : "mt-7 pt-6"
        }`}
      >
        {stack.slice(0, compact ? 5 : 6).map((item) => (
          <span
            key={item}
            className="rounded-full border border-stage-border px-2.5 py-1 font-mono text-[10px] text-on-stage-muted"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
