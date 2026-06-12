import { caseStudies } from "@/data/case-studies";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="scroll-mt-16 bg-surface-muted/30 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="Case Studies"
          title="Production systems in operation"
          description="How manual business processes were automated, what workflows were designed, and what operational impact was achieved — technologies support the story, not the other way around."
        />
        <div className="space-y-16 sm:space-y-24 lg:space-y-28">
          {caseStudies.map((study, index) => (
            <div key={study.id} className="relative">
              {index > 0 && (
                <div
                  className="absolute -top-8 left-0 right-0 flex items-center gap-4 sm:-top-12 lg:-top-14"
                  aria-hidden="true"
                >
                  <div className="h-px flex-1 bg-border" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted/60">
                    Case Study {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="h-px flex-1 bg-border" />
                </div>
              )}
              <CaseStudyCard study={study} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
