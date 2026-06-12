import { engineeringChallenges } from "@/data/challenges";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function EngineeringChallenges() {
  return (
    <section
      id="challenges"
      className="scroll-mt-16 border-y border-border bg-surface-muted/30 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="Engineering"
          title="Technical challenges solved"
          description="Operational problems addressed across production systems — workflow orchestration, secure sessions, document automation, integrations, and reporting dashboards."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {engineeringChallenges.map((challenge, index) => (
            <div
              key={challenge.title}
              className="relative rounded-xl border border-border bg-surface p-6 transition-all hover:border-accent/30 hover:shadow-md"
            >
              <span className="mb-4 inline-flex h-7 w-7 items-center justify-center rounded-md bg-accent/10 font-mono text-xs font-medium text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-base font-semibold text-foreground">
                {challenge.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
