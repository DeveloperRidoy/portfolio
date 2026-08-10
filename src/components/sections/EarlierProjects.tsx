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
                Project archive
              </h2>
              <p className="mt-1 max-w-xl text-sm text-muted">
                Additional products, developer tools, and earlier full-stack
                builds.
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
            <ul className="mt-6 grid grid-cols-1 gap-4 border-t border-border/60 pt-6 sm:grid-cols-2">
              {earlierProjects.map((project) => (
                <li key={project.title} className="min-h-0">
                  <article className="flex h-full flex-col rounded-lg border border-border/50 bg-surface/60 p-4 transition-colors hover:border-border hover:bg-surface/80">
                    <h3 className="text-sm font-medium text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>
                    <p className="mt-3 font-mono text-[11px] leading-relaxed text-muted/80">
                      {project.technologies.join(" · ")}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 border-t border-border/40 pt-3">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} live demo`}
                        className="inline-flex min-h-9 items-center text-sm text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline"
                      >
                        Live demo <span aria-hidden="true">↗</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                        className="inline-flex min-h-9 items-center text-sm text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline"
                      >
                        GitHub <span aria-hidden="true">↗</span>
                      </a>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
