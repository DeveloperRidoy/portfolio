import { metrics } from "@/data/metrics";
import { MetricCard } from "@/components/ui/MetricCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ImpactMetrics() {
  return (
    <section className="border-y border-border bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="Impact"
          title="Measurable business outcomes"
          description="Production systems designed to reduce manual work, improve data accuracy, and deliver operational efficiency at scale."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {metrics.map((metric) => (
            <MetricCard key={metric.label} {...metric} />
          ))}
        </div>
      </div>
    </section>
  );
}
