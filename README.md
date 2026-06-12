# Mubarak Hussain Ridoy — Portfolio

Professional software engineering portfolio built with Next.js, TypeScript, and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Content Updates

All portfolio content is organized in `src/data/` for easy editing:

| File                  | Contents                                  |
| --------------------- | ----------------------------------------- |
| `site.ts`             | Name, email, LinkedIn, GitHub, resume URL |
| `metrics.ts`          | Impact metric cards                       |
| `case-studies.ts`     | Featured case studies                     |
| `systems.ts`          | Systems I Build cards                     |
| `skills.ts`           | Skills categories and hero keywords       |
| `experience.ts`       | Work experience timeline                  |
| `earlier-projects.ts` | Archive projects                          |

## Assets to Replace

1. **LinkedIn URL** — Update `linkedinUrl` in `src/data/site.ts`
2. **GitHub URL** — Update `githubUrl` in `src/data/site.ts`
3. **Resume PDF** — Add PDF to `public/` and update `resumeUrl` in `src/data/site.ts`
4. **Case study screenshots** — Replace placeholder images by updating `CaseStudyCard.tsx` to use `<Image>` with real assets. Placeholder labels are in `imagePlaceholder` fields in `case-studies.ts`:
   - DriveDock dashboard screenshot
   - NPT Onboard workflow screenshot
   - GeoEvent map/dashboard screenshot
   - Logistics automation screenshot

## Build

```bash
npm run build
npm start
```
