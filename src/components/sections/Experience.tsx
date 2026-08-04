import { experience } from "@/data/experience";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MediaFrame } from "@/components/ui/MediaFrame";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-20 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1280px] px-6">
        <SectionHeader
          id="experience-heading"
          label="Experience"
          title="Six years shipping software people use to run a business"
        />

        <ol className="mt-14 space-y-14">
          {experience.map((item) => (
            <li
              key={`${item.company}-${item.period}`}
              className="grid gap-x-10 gap-y-5 border-t border-border pt-8 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)]"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-accent">
                  {item.period}
                </p>
                <p className="mt-2 text-sm text-muted">{item.location}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold tracking-tight text-foreground">
                  {item.role}
                </h3>
                <p className="mt-1 text-base text-muted-strong">
                  {item.company}
                </p>

                <ul className="mt-5 space-y-2.5 leading-relaxed text-foreground-soft">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span
                        className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-border-strong"
                        aria-hidden="true"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {item.media && (
                  <div className="mt-7 max-w-2xl">
                    <MediaFrame
                      media={item.media}
                      sizes="(max-width: 1023px) 100vw, 42rem"
                    />
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
