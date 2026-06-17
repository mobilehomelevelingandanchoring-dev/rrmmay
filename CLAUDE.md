# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SEO-optimized local service business website for R.R.M Exterior Cleaning Specialist (Northwest England). Built with Next.js 15 App Router, TypeScript, Tailwind CSS, and shadcn/ui (Radix UI). Deployed on Vercel.

Production URL: `https://rrmexternalcleaningspecialist.co.uk`

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run start` — Serve production build
- `npm run lint` — ESLint
- `npm run test` — Jest tests
- `npm run test:watch` — Jest watch mode
- `npx jest path/to/test.test.ts` — Run a single test file

Node >=18.x required. ESLint and TypeScript errors are ignored during `npm run build` (configured in `next.config.ts`), so always run `npm run lint` separately to catch issues.

## Architecture

### Routing (App Router)

All routes live in `app/`. Key dynamic routes:

- `/services/[...slug]` — Catch-all for `/services/:serviceSlug` and `/services/:serviceSlug/:locationSlug`
- `/locations/[locationSlug]`, `/areas/[areaSlug]`, `/problems/[problemSlug]`, `/surfaces/[surfaceSlug]` — Entity pages

### Data Layer (No Database)

Content is stored as static TypeScript entity objects in `src/data/`:

- `services.ts` — 9 services (pressure-washing, gutter-cleaning, exterior-cleaning, etc.) with SEO metadata, FAQs, LSI keywords
- `locations.ts` — 11 service locations with coordinates, postcodes, available services
- `problems.ts` — Problem entities (moss, algae, oil-stains, etc.) linked to solution services
- `surfaces.ts` — Surface types (concrete, tarmac, render, etc.) with cleaning approaches

Entities are imported directly: `import { services } from '@/data/services'` and looked up by slug.

### Location-Specific Page Components

`app/services/[...slug]/ServiceDynamicClient.tsx` maps service+location slug combinations to dedicated components in `src/pageComponents/`. For example, `gutter-cleaning` + `skelmersdale` routes to `src/pageComponents/gutter/GutterSkelmersdale.tsx`. When no dedicated component exists, a generic `ServicePageContent` renders from entity data.

Page components use **named exports** (e.g., `export const GutterSkelmersdale = () => ...`), not default exports. The `ServiceDynamicClient` uses `next/dynamic` with `.then(m => ({ default: m.ComponentName }))` to adapt them for code splitting.

### Component Organization

- `src/components/ui/` — shadcn/ui components (do not edit manually; use `npx shadcn-ui@latest add <component>`)
- `src/components/home/` — Homepage sections (Hero, ServicesOverview, AreasSection, WhyChooseUs, FAQPreview, CTASection)
- `src/components/layout/` — Header, Footer
- `src/pageComponents/` — Page-specific content components, organized by service type subdirectories

### SEO Architecture

Every page includes JSON-LD structured data (LocalBusiness, Service, BreadcrumbList, FAQPage, VideoObject schemas). The root layout (`app/layout.tsx`) injects the base LocalBusiness schema; individual pages add page-specific schemas server-side.

`middleware.ts` handles www-to-non-www 301 redirects. `next.config.ts` defines legacy .html redirect rules and security headers.

### Path Aliases

`@/*` maps to `src/*` (configured in `tsconfig.json` and `components.json`).

### Styling

Tailwind CSS with HSL CSS custom properties for theming. Fonts: Inter (body) and Plus Jakarta Sans (headings, via `font-display` class). Dark mode supported via CSS class strategy.

## Adding a New Location-Specific Service Page

1. Create a component in `src/pageComponents/<service>/` (e.g., `GutterNewtown.tsx`)
2. Import and register it in `ServiceDynamicClient.tsx` under the correct service+location slug in the `locationPages` map
3. Add location-specific metadata to the `locationMeta` object in `app/services/[...slug]/page.tsx`
4. If this is a brand-new location, also add it to `locationDisplayNames` in `app/services/[...slug]/page.tsx` and to `src/data/locations.ts`. If this is a new service, also add it to `serviceDisplayNames` in the same file.
5. Update `app/sitemap.ts` if the route isn't already generated (sitemap auto-generates service×location combinations from data)
