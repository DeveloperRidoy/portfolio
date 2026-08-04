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

/** Compact three-layer indicator used alongside a product screenshot. */
export function LayerStrip({
  layers,
  accent = "cobalt",
  dark = false,
}: LayerStripProps) {
  return (
    <dl
      className={`grid gap-px overflow-hidden rounded-xl border sm:grid-cols-3 ${
        dark ? "border-stage-border bg-stage-border" : "border-border bg-border"
      }`}
    >
      {layers.map((layer) => (
        <div
          key={layer.label}
          className={`px-4 py-3.5 ${dark ? "bg-stage" : "bg-surface"}`}
        >
          <dt
            className={`flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] ${
              dark ? "text-on-stage-muted" : "text-muted"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                dark ? stageMarker[accent] : inlineMarker[accent]
              }`}
              aria-hidden="true"
            />
            {layer.label}
          </dt>
          <dd
            className={`mt-1.5 text-sm leading-snug ${
              dark ? "text-on-stage" : "text-foreground-soft"
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
}

/**
 * Editorial stand-in used when a project has no publishable screenshot yet.
 * It presents the same three-layer breakdown at display scale — it never
 * imitates the product's own interface.
 */
export function LayerPlate({
  layers,
  title,
  stack,
  accent = "cobalt",
  nested = false,
}: LayerPlateProps) {
  return (
    <div
      className={`on-stage relative overflow-hidden rounded-2xl p-7 sm:p-9 ${
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

      <ol className="mt-6 space-y-4">
        {layers.map((layer, index) => (
          <li key={layer.label} className="flex gap-4">
            <div className="flex flex-col items-center pt-1.5">
              <span
                className={`h-2 w-2 shrink-0 rounded-full ${stageMarker[accent]}`}
                aria-hidden="true"
              />
              {index < layers.length - 1 && (
                <span
                  className="mt-1 w-px flex-1 bg-stage-border"
                  aria-hidden="true"
                />
              )}
            </div>
            <div className="pb-1">
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-on-stage-muted">
                {layer.label}
              </p>
              <p className="mt-1 text-[15px] leading-snug text-on-stage">
                {layer.detail}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-7 flex flex-wrap gap-1.5 border-t border-stage-border pt-6">
        {stack.slice(0, 6).map((item) => (
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
