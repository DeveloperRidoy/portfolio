import Image from "next/image";
import type { CaseStudy } from "@/data/case-studies";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

interface CaseStudyCardProps {
  study: CaseStudy;
  index: number;
}

export function CaseStudyCard({ study, index }: CaseStudyCardProps) {
  const isReversed = index % 2 === 1;

  return (
    <article
      id={study.id}
      className="scroll-mt-24 rounded-2xl border border-border bg-surface p-6 sm:p-8 lg:p-10"
    >
      <div
        className={`grid items-start gap-8 lg:grid-cols-2 lg:gap-12 ${
          isReversed ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-accent/10 font-mono text-xs font-medium text-accent">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-muted">
              Case Study
            </span>
          </div>
          <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {study.title}
          </h3>
          <p className="mt-1 text-sm font-medium text-accent">
            {study.subtitle}
          </p>
          <p className="mt-4 leading-relaxed text-muted">{study.description}</p>
        </div>

        {study.image ? (
          <div className="overflow-hidden rounded-lg border border-border">
            <Image
              src={study.image}
              alt={study.imageAlt}
              width={1897}
              height={1912}
              sizes="(max-width: 1024px) 100vw, 560px"
              className="h-auto w-full"
            />
          </div>
        ) : (
          <PlaceholderImage label={study.imageAlt} aspectRatio="portrait" />
        )}
      </div>

      <div className="mt-10 grid gap-8 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h4 className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
            Problem
          </h4>
          <p className="text-sm leading-relaxed text-muted">{study.problem}</p>
        </div>
        <div>
          <h4 className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
            Solution
          </h4>
          <p className="text-sm leading-relaxed text-muted">{study.solution}</p>
        </div>
        <div>
          <h4 className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
            Technical Highlights
          </h4>
          <ul className="space-y-1.5">
            {study.technicalHighlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-muted"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
            Business Impact
          </h4>
          <ul className="space-y-1.5">
            {study.businessImpact.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-muted"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-2 border-t border-border pt-8">
        <span className="mr-2 self-center font-mono text-xs uppercase tracking-widest text-muted">
          Tech Stack
        </span>
        {study.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-border bg-surface-elevated px-2.5 py-1 font-mono text-xs text-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
