"use client";

import { useState } from "react";
import { earlierProjects } from "@/data/earlier-projects";

export function EarlierProjects() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="archive" className="scroll-mt-16 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-xl border border-border/60 bg-surface-muted/20 p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted">
                Archive
              </p>
              <h2 className="mt-2 text-lg font-semibold text-foreground">
                Earlier projects & experiments
              </h2>
              <p className="mt-1 max-w-xl text-sm text-muted">
                Foundational full-stack work prior to production enterprise
                systems — kept accessible but secondary to case studies.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className="inline-flex shrink-0 items-center gap-2 rounded-md border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent/40 hover:bg-accent/5"
              aria-expanded={expanded}
            >
              {expanded
                ? "Hide archive"
                : `View archive (${earlierProjects.length})`}
              <svg
                className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>

          {expanded && (
            <div className="mt-6 grid gap-2 border-t border-border/60 pt-6 sm:grid-cols-2 md:grid-cols-4">
              {earlierProjects.map((project) => (
                <div
                  key={project.name}
                  className="rounded-lg border border-border/50 bg-surface/60 px-3 py-2.5"
                >
                  <p className="text-sm text-foreground/80">{project.name}</p>
                  {project.description && (
                    <p className="mt-0.5 text-xs text-muted">
                      {project.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
