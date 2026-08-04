# Mubarak Hussain Ridoy — Portfolio

Portfolio for a Full-Stack Software Engineer specializing in workflow automation, APIs, third-party integrations, cloud services, and DevOps.

Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS 4. Every section is a server component except the sticky-navigation menu and the earlier-projects disclosure.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Content

All content lives in `src/data/`, so copy changes never require touching components.

| File                  | Contents                                                       |
| --------------------- | -------------------------------------------------------------- |
| `site.ts`             | Name, role, location, contact links, resume URL, nav, SEO text |
| `proof.ts`            | Proof-strip figures and their context                          |
| `projects.ts`         | Featured project model: narrative, contributions, stack, media  |
| `specializations.ts`  | Capability groups and the end-to-end delivery flow             |
| `experience.ts`       | Work history, with optional supporting media per role          |
| `toolkit.ts`          | Core technologies and the toolkit grouped by domain            |
| `earlier-projects.ts` | Archive entries                                                |
| `education.ts`        | Education block                                                |

## Project media upload guide

Every featured-project screenshot slot is already wired in `src/data/projects.ts` as a `status: "placeholder"` entry. Place the final PNGs in the folder below, then flip each matching entry to `status: "ready"` with a `src` path. Layout components do not need to change.

### Destination

- Folder: `public/images/projects/`
- Create the folder if it is missing (the repo includes it with a `.gitkeep`).
- Format: PNG
- Ideal size for every slot: **1440 × 900** (16:10)
- Object-fit in the site: **contain** (`object-contain` + fluid width) — the full screenshot is shown; nothing is cropped by CSS
- Crop before upload only to remove browser chrome and empty margins; keep the full application viewport and do not crop meaningful UI

### Asset manifest

| Project     | Role      | Filename                             | Path                                                       | Size      | Ratio | Screen to capture                                                         | Focal | Alt text                                                                                              | Caption |
| ----------- | --------- | ------------------------------------ | ---------------------------------------------------------- | --------- | ----- | ------------------------------------------------------------------------- | ----- | ----------------------------------------------------------------------------------------------------- | ------- |
| DriveDock   | Primary   | `drivedock-safety-processing.png`    | `public/images/projects/drivedock-safety-processing.png`   | 1440×900  | 16:10 | Sanitized Safety / review operations dashboard                            | top   | DriveDock safety processing dashboard showing the driver onboarding lifecycle and review panels       | None    |
| DriveDock   | Secondary | `drivedock-applicant-workflow.png`   | `public/images/projects/drivedock-applicant-workflow.png`  | 1440×900  | 16:10 | Multilingual applicant workflow with the language selector visible        | top   | DriveDock multilingual applicant workflow with the language selector visible                          | None    |
| NPT Onboard | Primary   | `npt-hr-dashboard.png`               | `public/images/projects/npt-hr-dashboard.png`              | 1440×900  | 16:10 | Sanitized HR onboarding-lifecycle dashboard                               | top   | NPT Onboard HR dashboard showing employee onboarding lifecycle statuses                               | None    |
| NPT Onboard | Secondary | `npt-onboarding-form.png`            | `public/images/projects/npt-onboarding-form.png`           | 1440×900  | 16:10 | Region-aware employee onboarding form                                      | top   | NPT Onboard region-aware employee onboarding form                                                     | None    |
| Neon Shop   | Primary   | `neonshop-builder.png`               | `public/images/projects/neonshop-builder.png`              | 1440×900  | 16:10 | Custom neon builder with live preview and configuration controls          | center| Neon Shop custom neon builder with live preview and configuration controls                            | None    |
| GeoEvent    | Primary   | `geoevent-map-discovery.png`         | `public/images/projects/geoevent-map-discovery.png`        | 1440×900  | 16:10 | Map-based event-discovery interface                                       | center| GeoEvent map-based event discovery interface with clustered markers                                   | None    |
| GeoEvent    | Secondary | `geoevent-organizer-analytics.png`   | `public/images/projects/geoevent-organizer-analytics.png`  | 1440×900  | 16:10 | Organizer analytics / dashboard                                           | top   | GeoEvent organizer analytics dashboard showing event performance metrics                              | None    |

Neon Shop has one screenshot only. Its supporting visual is the system-breakdown plate already in the layout — do not add a second Neon Shop image.

### Capture standards

- Desktop capture at 1440×900 (or export/crop to exactly 1440×900)
- Browser zoom 100%; application viewport only
- No browser tabs, bookmarks, address bar, OS chrome, cursor over content, loading/hover/debug states
- No user-added frames, shadows, labels, rounded-corner masks, or collages

### Privacy

Every screenshot must:

- Use fictional demonstration identities and records
- Exclude real names, emails, financial information, and client-sensitive data
- Exclude browser tabs, bookmarks, address bars, personal accounts, and internal URLs
- Avoid blurring real sensitive data — replace the underlying data with fictional data before capture

### Export / compression

- PNG, sRGB
- Target roughly 200–500 KB per file when possible (lossless PNG compression is fine; do not over-crush UI text)
- Do not upscale soft or low-resolution captures

### Activating an uploaded image

In `src/data/projects.ts`, change that slot from:

```ts
{
  status: "placeholder",
  role: "primary",
  // ...filename, alt, width, height, etc.
}
```

to:

```ts
{
  status: "ready",
  src: "/images/projects/drivedock-safety-processing.png",
  role: "primary",
  // ...same filename, alt, width, height, etc.
}
```

Use the real file’s intrinsic `width` and `height` if they differ from 1440×900, but prefer exporting at 1440×900 so no data change is needed beyond `status` and `src`.

### After placing files

Send this instruction:

> Project screenshots are in `public/images/projects/`. Flip each matching media entry in `src/data/projects.ts` from `placeholder` to `ready` and set `src` to `/images/projects/<filename>`.

## Validation

```bash
npm run lint
npx tsc --noEmit
npm run build
```
