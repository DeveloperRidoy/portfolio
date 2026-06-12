interface PlaceholderImageProps {
  label: string;
  aspectRatio?: "video" | "square" | "portrait" | "wide";
  className?: string;
}

export function PlaceholderImage({
  label,
  aspectRatio = "video",
  className = "",
}: PlaceholderImageProps) {
  const aspectClass = {
    video: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-[1897/1912]",
    wide: "aspect-[21/9]",
  }[aspectRatio];

  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-border bg-surface-elevated ${aspectClass} ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-surface-muted/50 via-transparent to-accent/5" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(100,116,139,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100,116,139,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-surface">
          <svg
            className="h-6 w-6 text-muted"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
            />
          </svg>
        </div>
        <p className="max-w-xs text-center font-mono text-xs leading-relaxed text-muted">
          {label}
        </p>
      </div>
    </div>
  );
}
