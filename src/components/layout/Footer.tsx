import { siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="font-mono text-xs text-muted">
          © {year} {siteConfig.name}
        </p>
        <p className="text-xs text-muted">
          Software Engineer · Workflow Automation & Enterprise Systems
        </p>
      </div>
    </footer>
  );
}
