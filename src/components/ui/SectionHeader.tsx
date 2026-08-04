interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  id?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  id,
}: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      {label && (
        <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
          {label}
        </p>
      )}
      <h2
        id={id}
        className="text-balance text-3xl font-semibold leading-[1.15] tracking-tight text-foreground sm:text-4xl"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg leading-relaxed text-muted">{description}</p>
      )}
    </div>
  );
}
