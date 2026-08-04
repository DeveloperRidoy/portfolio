import { proofPoints } from "@/data/proof";

export function ProofStrip() {
  return (
    <section aria-label="Delivery highlights" className="pb-4">
      <div className="mx-auto max-w-[1280px] px-6">
        <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {proofPoints.map((point) => (
            <li key={point.label} className="bg-surface px-5 py-6">
              <p className="text-3xl font-semibold tracking-tight text-accent">
                {point.value}
              </p>
              <p className="mt-2 text-sm font-medium leading-snug text-foreground">
                {point.label}
              </p>
              <p className="mt-1.5 text-xs leading-snug text-muted">
                {point.context}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
