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

## Adding project screenshots

Projects render without media: a project with an empty `media` array shows an
editorial system-breakdown plate instead. Adding a screenshot requires no
component changes.

1. Save the sanitized PNG under `public/images/projects/`.
2. Add an entry to that project's `media` array in `src/data/projects.ts`:

```ts
media: [
  {
    src: "/images/projects/drivedock-safety-processing.png",
    alt: "DriveDock safety processing screen showing a driver's onboarding lifecycle",
    width: 1440,
    height: 900,
    type: "screenshot",
    caption: "Safety review across the ten-stage onboarding lifecycle",
  },
],
```

`width` and `height` must be the file's real intrinsic pixel dimensions — they
reserve layout space and prevent layout shift. The first entry becomes the
primary frame; a second entry renders as an offset secondary frame.

Screenshots must be sanitized before they are committed: no real names, emails,
phone numbers, addresses, employee or applicant identifiers, government
identifiers, documents, order or customer records, tokens, avatars, browser
chrome, or confidential company figures.

Supporting media for an Experience entry uses the same `ProjectMedia` shape via
the optional `media` field in `src/data/experience.ts`.

## Validation

```bash
npm run lint
npx tsc --noEmit
npm run build
```
