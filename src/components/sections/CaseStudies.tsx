import { caseStudies } from "@/data/case-studies";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="scroll-mt-16 bg-surface-muted/30 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="Case Studies"
          title="Production systems & platforms"
          description="End-to-end engineering work across workflow automation, enterprise onboarding, logistics, and full-stack platform development."
        />
        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.id} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
