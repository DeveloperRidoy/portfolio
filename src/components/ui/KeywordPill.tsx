interface KeywordPillProps {
  children: React.ReactNode;
}

export function KeywordPill({ children }: KeywordPillProps) {
  return (
    <span className="inline-flex items-center rounded-md border border-border bg-surface px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-accent/30 hover:text-foreground">
      {children}
    </span>
  );
}
