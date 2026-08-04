import { siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-2 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-medium text-foreground">{siteConfig.name}</p>
        <p className="text-sm text-muted">
          Full-Stack Software Engineer · Workflow Automation, APIs, Integrations
          &amp; Cloud Delivery
        </p>
        <p className="font-mono text-xs text-muted">© {year}</p>
      </div>
    </footer>
  );
}
