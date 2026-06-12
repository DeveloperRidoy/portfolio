import { businessOperations } from "@/data/business-operations";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function BusinessOperations() {
  return (
    <section
      id="business-operations"
      className="scroll-mt-16 border-y border-border bg-surface py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="Operational Scope"
          title="Systems used across business operations"
          description="Production software supporting real operational workflows — from hiring and compliance through finance and reporting — not standalone portfolio projects."
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          {/* Visual flow */}
          <div className="rounded-xl border border-border bg-surface-elevated p-6 sm:p-8">
            <p className="mb-6 font-mono text-xs uppercase tracking-widest text-muted">
              Business Workflow Coverage
            </p>
            <div className="flex flex-col">
              {businessOperations.map((op, index) => (
                <div key={op.label}>
                  <div className="rounded-lg border border-border/70 bg-surface px-5 py-4 text-center shadow-sm">
                    <p className="text-base font-semibold text-foreground">
                      {op.label}
                    </p>
                  </div>
                  {index < businessOperations.length - 1 && (
                    <div className="flex justify-center py-2">
                      <svg
                        className="h-5 w-5 text-accent/50"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M12 4v16"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeDasharray="3 3"
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

          {/* Descriptions */}
          <div className="space-y-4">
            {businessOperations.map((op, index) => (
              <div
                key={op.label}
                className="flex gap-4 rounded-lg border border-border bg-surface p-5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-accent/10 font-mono text-xs font-medium text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">{op.label}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {op.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
