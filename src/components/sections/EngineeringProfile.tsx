import { SectionHeader } from "@/components/ui/SectionHeader";

export function EngineeringProfile() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionHeader label="Profile" title="Engineering focus" />
          </div>
          <div className="space-y-6 text-base leading-relaxed text-muted lg:col-span-3">
            <p>
              I am a Software Engineer based in Ontario, Canada, with experience
              building production systems, internal platforms, workflow
              automation tools, and API-driven applications. My work focuses on
              backend development, system integrations, cloud services, and
              business process automation.
            </p>
            <p>
              I have built systems used across hiring, compliance, logistics,
              HR, reporting, and workforce management workflows. I enjoy
              designing maintainable backend services, integrating third-party
              systems, automating manual processes, and delivering software that
              creates measurable business value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
