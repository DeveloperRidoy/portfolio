import type { Metric } from "@/data/metrics";

export function MetricCard({ value, label, context }: Metric) {
  return (
    <div className="group rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
      <p className="font-mono text-3xl font-semibold tracking-tight text-accent sm:text-4xl">
        {value}
      </p>
      <p className="mt-2 text-sm font-medium text-foreground">{label}</p>
      <p className="mt-2 text-xs leading-relaxed text-muted">{context}</p>
    </div>
  );
}
