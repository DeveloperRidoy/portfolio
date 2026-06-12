interface ArchitectureDiagramProps {
  steps: string[];
  integrations?: string[];
  title?: string;
}

function FlowConnector({ isLast }: { isLast: boolean }) {
  if (isLast) return null;

  return (
    <div
      className="relative flex h-8 items-center justify-center"
      aria-hidden="true"
    >
      <div className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-accent/25" />
      <svg
        className="relative z-10 h-5 w-5 text-accent/70"
        viewBox="0 0 20 32"
        fill="none"
      >
        <path
          d="M10 0V22"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="2 3"
        />
        <path
          d="M6 20L10 26L14 20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function ArchitectureNode({
  label,
  index,
  isFirst,
  isLast,
}: {
  label: string;
  index: number;
  isFirst: boolean;
  isLast: boolean;
}) {
  return (
    <div className="relative flex items-center justify-center">
      {/* Horizontal connector arms */}
      {!isFirst && (
        <div
          className="absolute left-[calc(50%-7rem)] right-[calc(50%+0.75rem)] top-1/2 h-px -translate-y-1/2 bg-accent/20 sm:left-[calc(50%-8rem)]"
          aria-hidden="true"
        />
      )}
      {!isLast && (
        <div
          className="absolute left-[calc(50%+0.75rem)] right-[calc(50%-7rem)] top-1/2 h-px -translate-y-1/2 bg-accent/20 sm:right-[calc(50%-8rem)]"
          aria-hidden="true"
        />
      )}

      <div className="relative z-10 w-full max-w-[15rem] sm:max-w-[16rem]">
        {/* Connection port */}
        <div className="absolute -top-1 left-1/2 z-20 h-2 w-2 -translate-x-1/2 rounded-full border-2 border-accent/40 bg-surface" />
        {!isLast && (
          <div className="absolute -bottom-1 left-1/2 z-20 h-2 w-2 -translate-x-1/2 rounded-full border-2 border-accent/40 bg-surface" />
        )}

        <div className="overflow-hidden rounded-lg border border-accent/25 bg-surface shadow-sm ring-1 ring-black/[0.03]">
          <div className="flex items-center gap-2 border-b border-accent/10 bg-accent/[0.04] px-3 py-1.5">
            <span className="font-mono text-[10px] font-medium uppercase tracking-wider text-accent/80">
              Node {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <p className="px-3 py-2.5 text-center text-sm font-medium leading-snug text-foreground">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}

export function ArchitectureDiagram({
  steps,
  integrations,
  title = "Architecture Overview",
}: ArchitectureDiagramProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface-elevated">
      <div className="flex items-center justify-between border-b border-border bg-surface px-5 py-3.5 sm:px-6">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">
          {title}
        </p>
        <span className="rounded border border-border bg-surface-elevated px-2 py-0.5 font-mono text-[10px] text-muted">
          System flow
        </span>
      </div>

      <div
        className="relative px-5 py-8 sm:px-8 sm:py-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(100,116,139,0.12) 1px, transparent 0)
          `,
          backgroundSize: "18px 18px",
        }}
      >
        {/* Diagram canvas border */}
        <div className="relative rounded-xl border border-dashed border-accent/20 bg-surface/80 p-6 sm:p-8">
          {/* Central spine */}
          <div
            className="pointer-events-none absolute bottom-8 left-1/2 top-8 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-accent/30 to-transparent"
            aria-hidden="true"
          />

          <div className="relative mx-auto flex max-w-md flex-col items-center">
            {steps.map((step, index) => (
              <div
                key={`${step}-${index}`}
                className="flex w-full flex-col items-center"
              >
                <ArchitectureNode
                  label={step}
                  index={index}
                  isFirst={index === 0}
                  isLast={index === steps.length - 1}
                />
                <FlowConnector isLast={index === steps.length - 1} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {integrations && integrations.length > 0 && (
        <div className="border-t border-border bg-surface px-5 py-5 sm:px-6">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-muted">
            External integrations
          </p>
          <div className="flex flex-wrap gap-2">
            {integrations.map((integration) => (
              <span
                key={integration}
                className="inline-flex items-center gap-1.5 rounded-md border border-dashed border-border bg-surface-elevated px-2.5 py-1 font-mono text-[11px] text-muted"
              >
                <span className="h-1 w-1 rounded-full bg-accent/50" />
                {integration}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
