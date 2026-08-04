export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 font-mono text-[11px] leading-none tracking-tight text-muted-strong">
      {children}
    </span>
  );
}
