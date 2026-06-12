const layers = [
  { id: "frontend", label: "Frontend", sublabel: "React / Next.js" },
  { id: "api", label: "API Layer", sublabel: "REST / Auth" },
  { id: "workflow", label: "Workflow Engine", sublabel: "Automation" },
  { id: "database", label: "Database", sublabel: "PostgreSQL / MongoDB" },
  { id: "aws", label: "AWS Services", sublabel: "S3 / Lambda / EC2" },
  { id: "reporting", label: "Reporting", sublabel: "Automation" },
];

export function SystemDiagram() {
  return (
    <div className="relative w-full rounded-xl border border-border bg-surface p-6 sm:p-8">
      <div className="mb-6 flex items-center justify-between">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          System Architecture
        </p>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
          <span className="font-mono text-xs text-muted">Production</span>
        </div>
      </div>

      <div className="flex flex-col gap-0">
        {layers.map((layer, index) => (
          <div key={layer.id} className="relative">
            <div className="group flex items-center gap-4 rounded-lg border border-border/60 bg-surface-elevated px-4 py-3 transition-all duration-300 hover:border-accent/40 hover:bg-accent/5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-accent/10 font-mono text-xs font-medium text-accent">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-foreground">
                  {layer.label}
                </p>
                <p className="font-mono text-xs text-muted">{layer.sublabel}</p>
              </div>
              <svg
                className="h-4 w-4 shrink-0 text-muted/50 transition-transform group-hover:translate-x-0.5 group-hover:text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </div>
            {index < layers.length - 1 && (
              <div className="flex justify-center py-1">
                <svg
                  className="h-4 w-4 text-accent/40"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M12 4v16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                    className="animate-pulse-slow"
                  />
                  <path
                    d="M8 16l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
