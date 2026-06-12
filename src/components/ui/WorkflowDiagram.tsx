const workflowSteps = [
  { label: "Driver Application", detail: "Applicant portal" },
  { label: "HR Review", detail: "Validation & screening" },
  { label: "Safety Review", detail: "Compliance checks" },
  { label: "Compliance Verification", detail: "Document review" },
  { label: "Approval", detail: "Cross-department sign-off" },
  { label: "Onboarded", detail: "Document generation" },
];

export function WorkflowDiagram() {
  return (
    <div className="relative w-full rounded-xl border border-border bg-surface p-6 sm:p-8">
      <div className="mb-6 flex items-center justify-between">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          Workflow Automation Lifecycle
        </p>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
          <span className="font-mono text-xs text-muted">Production</span>
        </div>
      </div>

      <div className="flex flex-col gap-0">
        {workflowSteps.map((step, index) => (
          <div key={step.label} className="relative">
            <div className="group flex items-center gap-4 rounded-lg border border-border/60 bg-surface-elevated px-4 py-3 transition-all duration-300 hover:border-accent/40 hover:bg-accent/5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-accent/10 font-mono text-xs font-medium text-accent">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-foreground">
                  {step.label}
                </p>
                <p className="font-mono text-xs text-muted">{step.detail}</p>
              </div>
              {index < workflowSteps.length - 1 && (
                <span className="hidden font-mono text-[10px] uppercase tracking-wider text-accent/60 sm:block">
                  Next
                </span>
              )}
            </div>
            {index < workflowSteps.length - 1 && (
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
