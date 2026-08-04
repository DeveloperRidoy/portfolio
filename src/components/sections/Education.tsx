import { education } from "@/data/education";

export function Education() {
  return (
    <section id="education" aria-labelledby="education-heading" className="scroll-mt-20 py-6">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="border-t border-border pt-8">
          <h2
            id="education-heading"
            className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted"
          >
            Education
          </h2>
          <div className="mt-4 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <p className="text-lg font-semibold tracking-tight text-foreground">
                {education.institution}
              </p>
              <p className="mt-1 text-muted-strong">{education.credential}</p>
            </div>
            <div className="sm:text-right">
              <p className="text-sm text-muted">
                {education.location} · {education.year}
              </p>
              <p className="mt-1 text-sm font-medium text-support">
                {education.distinction}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
