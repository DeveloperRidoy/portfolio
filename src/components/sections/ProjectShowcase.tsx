import type { Project } from "@/data/projects";
import { ProjectStage } from "@/components/ui/ProjectStage";
import { LayerStrip } from "@/components/ui/LayerStrip";

interface ToneProps {
  project: Project;
  dark: boolean;
}

function label(dark: boolean) {
  return `font-mono text-[11px] uppercase tracking-[0.16em] ${
    dark ? "text-on-stage-muted" : "text-muted"
  }`;
}

function Intro({ project, dark }: ToneProps) {
  return (
    <div>
      <p
        className={`font-mono text-[11px] uppercase tracking-[0.16em] ${
          dark ? "text-[color:var(--neon-cyan)]" : "text-accent"
        }`}
      >
        {project.status}
      </p>

      <h3
        className={`mt-4 text-3xl font-semibold tracking-tight sm:text-4xl ${
          dark ? "text-on-stage" : "text-foreground"
        }`}
      >
        {project.title}
      </h3>
      <p
        className={`mt-2 text-lg leading-snug ${
          dark ? "text-on-stage-muted" : "text-muted-strong"
        }`}
      >
        {project.subtitle}
      </p>

      <p
        className={`mt-6 leading-relaxed ${
          dark ? "text-on-stage-muted" : "text-foreground-soft"
        }`}
      >
        {project.summary}
      </p>

      <div className="mt-7 grid gap-6 sm:grid-cols-2">
        <div>
          <h4 className={label(dark)}>The problem</h4>
          <p
            className={`mt-2 text-sm leading-relaxed ${
              dark ? "text-on-stage-muted" : "text-muted"
            }`}
          >
            {project.challenge}
          </p>
        </div>
        <div>
          <h4 className={label(dark)}>My ownership</h4>
          <p
            className={`mt-2 text-sm leading-relaxed ${
              dark ? "text-on-stage-muted" : "text-muted"
            }`}
          >
            {project.ownership}
          </p>
        </div>
      </div>
    </div>
  );
}

function Details({ project, dark }: ToneProps) {
  const hasMedia = project.media.length > 0;

  return (
    <div
      className={`mt-10 border-t pt-9 ${
        dark ? "border-stage-border" : "border-border"
      }`}
    >
      {hasMedia && (
        <div className="mb-9">
          <LayerStrip
            layers={project.layers}
            accent={project.accent}
            dark={dark}
          />
        </div>
      )}

      <div className="grid gap-x-10 gap-y-8 lg:grid-cols-3">
        {project.contributions.map((group) => (
          <div key={group.title}>
            <h4 className={label(dark)}>{group.title}</h4>
            <ul
              className={`mt-3 space-y-2 text-sm leading-snug ${
                dark ? "text-on-stage-muted" : "text-muted"
              }`}
            >
              {group.items.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span
                    className={`mt-[0.45rem] h-1 w-1 shrink-0 rounded-full ${
                      dark ? "bg-[color:var(--neon-cyan)]" : "bg-border-strong"
                    }`}
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
        <div
          className={`rounded-xl border p-5 ${
            dark
              ? "border-stage-border bg-white/[0.04]"
              : "border-accent/20 bg-accent-soft/60"
          }`}
        >
          <h4
            className={`font-mono text-[11px] uppercase tracking-[0.16em] ${
              dark ? "text-on-stage-muted" : "text-accent"
            }`}
          >
            Result
          </h4>
          <ul
            className={`mt-3 space-y-2 text-sm leading-snug ${
              dark ? "text-on-stage" : "text-foreground-soft"
            }`}
          >
            {project.outcomes.map((outcome) => (
              <li key={outcome} className="flex gap-2.5">
                <span
                  className={`mt-[0.45rem] h-1 w-1 shrink-0 rounded-full ${
                    dark ? "bg-[color:var(--neon-magenta)]" : "bg-accent"
                  }`}
                  aria-hidden="true"
                />
                {outcome}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className={label(dark)}>Stack</h4>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {project.stack.map((item) => (
              <li
                key={item}
                className={`rounded-full border px-2.5 py-1 font-mono text-[11px] leading-none ${
                  dark
                    ? "border-stage-border text-on-stage-muted"
                    : "border-border bg-surface text-muted-strong"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>

          {project.links && project.links.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-3">
              {project.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                      dark
                        ? "border-stage-border text-on-stage hover:border-[color:var(--neon-magenta)]"
                        : "border-border-strong bg-surface text-foreground hover:border-accent hover:text-accent"
                    }`}
                  >
                    {link.label}
                    <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

interface ProjectShowcaseProps {
  project: Project;
  layout: "media-right" | "media-left" | "feature";
}

export function ProjectShowcase({ project, layout }: ProjectShowcaseProps) {
  const dark = layout === "feature";
  const mediaFirst = layout === "media-left";

  const body = (
    <>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-14">
        <div className={mediaFirst ? "lg:order-2" : undefined}>
          <Intro project={project} dark={dark} />
        </div>
        <div className={`lg:pt-10 ${mediaFirst ? "lg:order-1" : ""}`}>
          <ProjectStage project={project} nested={dark} />
        </div>
      </div>
      <Details project={project} dark={dark} />
    </>
  );

  if (dark) {
    return (
      <article
        id={project.id}
        className="on-stage relative scroll-mt-24 overflow-hidden rounded-3xl bg-stage px-6 py-10 sm:px-10 sm:py-14"
      >
        <div
          className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[color:var(--neon-magenta)]/20 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-32 right-0 h-72 w-72 rounded-full bg-[color:var(--neon-cyan)]/15 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative">{body}</div>
      </article>
    );
  }

  return (
    <article id={project.id} className="scroll-mt-24">
      {body}
    </article>
  );
}
