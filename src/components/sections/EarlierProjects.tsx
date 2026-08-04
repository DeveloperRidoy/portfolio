"use client";

import { useId, useState } from "react";
import { earlierProjects } from "@/data/earlier-projects";

export function EarlierProjects() {
  const [expanded, setExpanded] = useState(false);
  const panelId = useId();

  return (
    <section id="archive" className="scroll-mt-20 py-14">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                Earlier projects
              </h2>
              <p className="mt-1 max-w-xl text-sm text-muted">
                Foundational full-stack builds and experiments from before the
                work above.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setExpanded((open) => !open)}
              aria-expanded={expanded}
              aria-controls={panelId}
              className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-border-strong bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              {expanded
                ? "Hide archive"
                : `View archive (${earlierProjects.length})`}
              <svg
                className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.75}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
              </svg>
            </button>
          </div>

          <div id={panelId} hidden={!expanded}>
            <ul className="mt-6 grid gap-3 border-t border-border pt-6 sm:grid-cols-2 lg:grid-cols-4">
              {earlierProjects.map((project) => (
                <li
                  key={project.name}
                  className="rounded-xl border border-border bg-surface-muted/50 px-4 py-3"
                >
                  <p className="text-sm font-medium text-foreground">
                    {project.name}
                  </p>
                  <p className="mt-0.5 text-xs text-muted">
                    {project.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
