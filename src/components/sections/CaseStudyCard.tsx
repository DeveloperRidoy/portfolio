import type { ReactNode } from "react";
import Image from "next/image";
import type { CaseStudy } from "@/data/case-studies";
import { ArchitectureDiagram } from "@/components/ui/ArchitectureDiagram";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

interface CaseStudyCardProps {
  study: CaseStudy;
  index: number;
}

const studyVariants = [
  "border-l-accent/40",
  "border-l-emerald-500/35",
  "border-l-violet-500/35",
  "border-l-amber-500/35",
];

const studyBackgrounds = [
  "bg-surface",
  "bg-surface",
  "bg-surface",
  "bg-surface",
];

function SectionLabel({
  children,
  emphasis = "default",
}: {
  children: ReactNode;
  emphasis?: "default" | "medium" | "high" | "low";
}) {
  const styles = {
    low: "text-muted/80",
    default: "text-accent",
    medium: "text-accent",
    high: "text-accent",
  }[emphasis];

  const sizes = {
    low: "text-[10px]",
    default: "text-xs",
    medium: "text-xs",
    high: "text-xs sm:text-sm",
  }[emphasis];

  return (
    <p
      className={`mb-3 font-mono uppercase tracking-widest ${styles} ${sizes}`}
    >
      {children}
    </p>
  );
}

export function CaseStudyCard({ study, index }: CaseStudyCardProps) {
  const variant = studyVariants[index % studyVariants.length];
  const bg = studyBackgrounds[index % studyBackgrounds.length];

  return (
    <article
      id={study.id}
      className={`scroll-mt-24 overflow-hidden rounded-2xl border border-border border-l-4 ${variant} ${bg} shadow-sm ring-1 ring-black/[0.02]`}
    >
      {/* Header — compact */}
      <div className="border-b border-border/80 px-6 py-7 sm:px-10 sm:py-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 font-mono text-sm font-semibold text-accent">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-muted">
            Engineering Case Study
          </span>
        </div>
        <h3 className="mt-5 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
          {study.title}
        </h3>
        <p className="mt-1.5 text-sm font-medium text-accent sm:text-base">
          {study.subtitle}
        </p>
        {study.showcaseLabel && (
          <p className="mt-1 font-mono text-xs text-muted">
            {study.showcaseLabel}
          </p>
        )}
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
          {study.description}
        </p>
      </div>

      {/* Screenshot — primary visual */}
      <div className="relative border-b border-border bg-gradient-to-b from-surface-muted/40 to-surface-muted/10 px-4 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        {study.image ? (
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute -inset-3 rounded-2xl bg-accent/5 blur-2xl sm:-inset-4" />
            <div className="relative overflow-hidden rounded-xl border border-border/80 bg-surface shadow-2xl shadow-black/10 ring-1 ring-black/[0.04]">
              <div className="flex items-center gap-2 border-b border-border/60 bg-surface-elevated/80 px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                <span className="ml-2 font-mono text-[10px] text-muted">
                  Production system
                </span>
              </div>
              <Image
                src={study.image}
                alt={study.imageAlt}
                width={1897}
                height={1912}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px"
                className="h-auto w-full scale-[1.02] sm:scale-100"
                priority={index === 0}
              />
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-5xl">
            <PlaceholderImage label={study.imageAlt} aspectRatio="wide" />
          </div>
        )}
      </div>

      {/* Business Problem & Solution — medium emphasis */}
      <div className="grid gap-0 border-b border-border sm:grid-cols-2">
        <div className="border-b border-border px-6 py-8 sm:border-b-0 sm:border-r sm:px-10 sm:py-10">
          <SectionLabel emphasis="medium">Business Problem</SectionLabel>
          <p className="max-w-prose text-sm leading-relaxed text-muted sm:text-[0.9375rem]">
            {study.problem}
          </p>
        </div>
        <div className="px-6 py-8 sm:px-10 sm:py-10">
          <SectionLabel emphasis="medium">Solution</SectionLabel>
          <p className="max-w-prose text-sm leading-relaxed text-muted sm:text-[0.9375rem]">
            {study.solution}
          </p>
        </div>
      </div>

      {/* Key Engineering Decisions — high emphasis */}
      <div className="border-b border-accent/15 bg-accent/[0.03] px-6 py-10 sm:px-10 sm:py-12">
        <SectionLabel emphasis="high">Key Engineering Decisions</SectionLabel>
        <p className="mb-6 max-w-2xl text-sm text-muted">
          Architectural choices that shaped how the system was designed and
          operated in production.
        </p>
        <ul className="grid gap-4 sm:grid-cols-2">
          {study.keyEngineeringDecisions.map((decision, i) => (
            <li
              key={decision}
              className="relative overflow-hidden rounded-xl border border-accent/20 bg-surface pl-5 pr-5 py-4 shadow-sm"
            >
              <div
                className="absolute inset-y-0 left-0 w-1 bg-accent/60"
                aria-hidden="true"
              />
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-accent/10 font-mono text-[10px] font-semibold text-accent">
                  D{i + 1}
                </span>
                <span className="text-sm font-medium leading-relaxed text-foreground">
                  {decision}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Architecture Overview — high emphasis, full width */}
      <div className="border-b border-border px-6 py-10 sm:px-10 sm:py-12">
        <ArchitectureDiagram
          steps={study.architecture}
          integrations={study.architectureIntegrations}
        />
      </div>

      {/* Business Impact — highest emphasis */}
      <div className="border-b border-emerald-500/15 bg-emerald-500/[0.04] px-6 py-10 sm:px-10 sm:py-12">
        <SectionLabel emphasis="high">Business Impact</SectionLabel>
        <p className="mb-6 max-w-2xl text-sm text-muted">
          Operational outcomes achieved after deploying the system in
          production.
        </p>
        <ul className="grid gap-4 lg:grid-cols-2">
          {study.businessImpact.map((item, i) => (
            <li
              key={item}
              className="flex gap-4 rounded-xl border border-emerald-500/20 bg-surface p-5 shadow-sm"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 font-mono text-xs font-semibold text-emerald-600">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm leading-relaxed text-foreground sm:text-[0.9375rem]">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Overview — lowest emphasis */}
      <div className="border-b border-border/60 bg-surface-muted/15 px-6 py-7 sm:px-10 sm:py-8">
        <SectionLabel emphasis="low">Overview</SectionLabel>
        <p className="max-w-prose text-sm leading-relaxed text-muted/90">
          {study.overview}
        </p>

        {study.engineeringFocus && (
          <div className="mt-6 rounded-lg border border-border/70 bg-surface/60 p-5">
            <p className="font-mono text-[10px] uppercase tracking-widest text-accent/80">
              {study.engineeringFocus.title}
            </p>
            <p className="mt-2 text-sm text-muted">
              {study.engineeringFocus.description}
            </p>
            <ul className="mt-3 space-y-1.5">
              {study.engineeringFocus.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-muted"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Workflow highlights — secondary */}
      <div className="border-b border-border/60 px-6 py-8 sm:px-10 sm:py-9">
        <SectionLabel>Workflow & System Highlights</SectionLabel>
        <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
          {study.technicalHighlights.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-muted"
            >
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Tech stack — minimal */}
      <div className="bg-surface-muted/10 px-6 py-4 sm:px-10">
        <div className="flex flex-wrap items-center gap-x-1 gap-y-1">
          <span className="mr-2 font-mono text-[10px] uppercase tracking-widest text-muted/70">
            Built with
          </span>
          {study.techStack.map((tech, techIndex) => (
            <span key={tech} className="font-mono text-[11px] text-muted/75">
              {techIndex > 0 && (
                <span className="mx-1.5 text-muted/40" aria-hidden="true">
                  ·
                </span>
              )}
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
