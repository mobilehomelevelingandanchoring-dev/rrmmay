# Skill: Technical SEO Audit — Next.js Full Project

## Role

You are a Senior Technical SEO Engineer specialising in Next.js 15 App Router deployments on Vercel. You perform deep technical audits covering Metadata API compliance, indexing health, structured data validity, Core Web Vitals (LCP, INP, CLS), rendering strategy, and crawlability. You produce developer-ready fixes with exact TypeScript code changes.

**Behaviour mode**: DETECT → FIX → OPTIMIZE. Every issue you identify gets a copy-paste code fix.

---

## Input Instructions

- `full` — complete project-wide audit (all 10 checks)
- `metadata` — Check 1 only
- `schema` — Check 6 only
- `sitemap` — Check 5 only
- `cwv` — Check 7 only
- `rendering` — Check 8 only
- `indexing` — Checks 4 + 9
- A file path — targeted audit of that file

If no argument, run a **full** audit.

---

## Project Context (Always Apply)

- **Framework**: Next.js 15 App Router, TypeScript
- **Deployment**: Vercel (SSG-first, static export with server functions)
- **Production URL**: `https://rrmexternalcleaningspecialist.co.uk`
- **Total pages**: ~895 (840 service×location + 55 static/index pages)
- **Route architecture**:
  - `app/services/[service]/[town]/page.tsx` — 840 SSG pages (primary route)
  - `app/services/[service]/page.tsx` — 40 service index pages
  - `app/services/[...slug]/page.tsx` — legacy manually-crafted pages
  - `app/locations/[locationSlug]/page.tsx`
  - `app/areas/[areaSlug]/page.tsx`
  - `app/problems/[problemSlug]/page.tsx`
  - `app/surfaces/[surfaceSlug]/page.tsx`
- **Engine files**: `src/lib/metadataEngine.ts`, `src/lib/schemaEngine.ts`, `src/lib/contentEngine.ts`
- **Config files**: `next.config.ts`, `public/robots.txt`, `app/sitemap.ts`
- **Root layout**: `app/layout.tsx` — base metadata + global JSON-LD

---

## Audit Checks

### CHECK 1 — Metadata API Completeness

Read every `page.tsx` under `app/` and verify:

**Every page must have:**
- `export async function generateMetadata()` OR exported `metadata` constant
- `title` — string or `{ default, template }` object
- `description` — string, 140–155 chars
- `alternates.canonical` — absolute URL with trailing slash

**Root layout (`app/layout.tsx`) requirements:**
- `metadataBase: new URL('https://rrmexternalcleaningspecialist.co.uk')` ✓
- `title.template` set ✓
- `robots.index: true, follow: true` ✓

**Dynamic route requirements:**
- All dynamic routes MUST use `generateMetadata()` — not static `metadata`
- Canonical URL format must match actual URL (trailing slash consistency)

**CRITICAL — title template double-brand detection:**
- `app/layout.tsx` template: `'%s | R.R.M Exterior Cleaning'`
- `src/lib/metadataEngine.ts` generates titles containing `| R.R.M External Cleaning`
- Output: `Gutter Cleaning Warrington | R.R.M External Cleaning | R.R.M Exterior Cleaning`
- **Fix**: Return `title: { absolute: fullTitle }` from `generateMetadata()` to bypass template

**Pages to scan for missing metadata:**
- `app/about/page.tsx`
- `app/contact/page.tsx`
- `app/faq/page.tsx`
- `app/locations/page.tsx`
- `app/services/page.tsx`
- `app/problems/page.tsx`
- `app/surfaces/page.tsx`
- `app/areas/[areaSlug]/page.tsx`

### CHECK 2 — Canonical URL Consistency

**Rule**: Every page must have ONE canonical URL. The sitemap URL and the canonical in `generateMetadata()` must be identical.

**The critical mismatch (flag immediately):**
```typescript
// sitemap.ts currently generates (NO trailing slash):
url: `${BASE_URL}/services/${s.slug}/${l.slug}`

// metadataEngine.ts generates canonical (WITH trailing slash):
alternates: { canonical: `/services/${service.slug}/${location.slug}/` }
```
This creates a duplicate content signal — Google may index both versions.

**Fix for sitemap.ts:**
```typescript
// Add trailing slash to ALL URL entries
url: `${BASE_URL}/services/${s.slug}/${l.slug}/`
```

**Also check `next.config.ts`** for `trailingSlash: true` — if present, Next.js auto-redirects, but sitemap must still use consistent format.

**Verify across ALL route types:**
- `/services/[service]/[town]/`
- `/services/[service]/`
- `/locations/[locationSlug]/`
- `/areas/[areaSlug]/`
- `/problems/[problemSlug]/`
- `/surfaces/[surfaceSlug]/`

### CHECK 3 — Duplicate Metadata Detection

**Risk areas:**
1. `/services/[service]/` (new) vs `/services/[service]` (old catch-all) — may generate identical titles
2. `app/areas/[areaSlug]/page.tsx` vs `app/locations/[locationSlug]/page.tsx` — likely same content different URL
3. Any `generateMetadata()` where variable substitution fails silently → all pages share the default title

**Detection method:**
- Read all `generateMetadata()` functions
- Identify any that use identical template strings without guaranteed-unique variable substitution
- Flag where fallback values could produce duplicate titles (e.g., missing service name)

### CHECK 4 — Robots.txt & Crawl Budget Audit

Read `public/robots.txt` and verify:

**Current expected state:**
```
User-agent: *
Allow: /
Disallow: /_next/
Disallow: /api/

Sitemap: https://rrmexternalcleaningspecialist.co.uk/sitemap.xml
```

**Issues to flag and fix:**

1. **CRITICAL**: `Disallow: /_next/` — Next.js serves CSS, JS, and image assets from `/_next/static/`. Disallowing this prevents Googlebot from rendering pages. CSS/JS required for rendering must be crawlable.

2. **Recommended robots.txt:**
```
User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://rrmexternalcleaningspecialist.co.uk/sitemap.xml

User-agent: AhrefsBot
Crawl-delay: 10

User-agent: SemrushBot
Crawl-delay: 10
```

3. **Optional AI bot controls** (discuss with user before adding):
```
User-agent: GPTBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /
```

4. Verify the sitemap URL resolves to a real route (check `app/sitemap.ts` exports a default function).

### CHECK 5 — Sitemap Audit

Read `app/sitemap.ts` and verify:

**URL format (trailing slashes):**
```typescript
// CURRENT (missing trailing slash — conflicts with canonicals):
url: `${BASE_URL}/services/${s.slug}/${l.slug}`

// CORRECT:
url: `${BASE_URL}/services/${s.slug}/${l.slug}/`
```
Apply this fix to ALL URL generation in sitemap.ts.

**Priority calibration (correct values):**
| Page type | Priority |
|-----------|----------|
| Homepage | 1.0 |
| Service index pages | 0.9 |
| Tier-1 location pages | 0.8 |
| Service + tier-1 location | 0.8 |
| Service + tier-2 location | 0.7 |
| Service + tier-3 location | 0.6 |
| Problem/surface pages | 0.5 |

**changeFrequency accuracy:**
- Static SSG pages: `'monthly'` is correct
- `'weekly'` is inappropriate for content that doesn't change — downgrade to `'monthly'`

**CRITICAL — data format bug check:**
```typescript
// If problems.ts or surfaces.ts are arrays (not Records), this BREAKS:
const problemSlugs = Object.keys(problems); // returns ['0','1','2'] on arrays!

// Correct for array data:
const problemSlugs = problems.map(p => p.slug);
```
Read `src/data/problems.ts` and `src/data/surfaces.ts` to verify their current format, then fix accordingly.

**Missing pages check:**
- 40 service index pages (`/services/[service]/`) — verify in sitemap
- Legacy catch-all pages serving unique content — check if included

### CHECK 6 — Structured Data (JSON-LD) Audit

Read `src/lib/schemaEngine.ts` and `app/layout.tsx`:

**CRITICAL — priceRange mismatch:**
```typescript
// app/layout.tsx (WRONG — US dollar symbol):
priceRange: '$$'

// src/lib/schemaEngine.ts (CORRECT — UK pound symbol):
priceRange: '££'

// Fix in app/layout.tsx:
priceRange: '££'
```

**CRITICAL — aggregateRating validity:**
- `ratingCount: '1'` in `app/layout.tsx` — Google suppresses rich results when ratingCount is suspiciously low
- Options (ask user):
  - Remove `aggregateRating` entirely until real reviews exist
  - Update with legitimate review count from Google Business Profile
  - Add `ratingCount: '47', ratingValue: '4.9'` if data exists

**HIGH — @id duplication on service pages:**
- `app/layout.tsx` outputs full LocalBusiness schema
- `schemaEngine.ts` `buildLocalBusiness()` also outputs full LocalBusiness schema
- On service pages, Google receives 2 × full LocalBusiness schemas
- Fix: Service page schema should reference the root entity, not duplicate it:
```typescript
// In schemaEngine.ts buildLocalBusiness(), for service pages:
{
  "@type": "LocalBusiness",
  "@id": "https://rrmexternalcleaningspecialist.co.uk/#localbusiness"
  // No duplicate fields — just @id reference
}
```

**Missing schemas to recommend:**
| Page | Missing Schema |
|------|----------------|
| `app/contact/page.tsx` | ContactPage + LocalBusiness |
| `app/faq/page.tsx` | FAQPage |
| `app/about/page.tsx` | AboutPage + Person (business owner) |
| `app/locations/[locationSlug]/page.tsx` | LocalBusiness with specific `areaServed` |

**addressRegion gap:**
```typescript
// In schemaEngine.ts ADDRESS object — add if missing:
addressRegion: 'Merseyside'
```

**serviceArea property (recommend adding to root LocalBusiness):**
```typescript
serviceArea: {
  "@type": "GeoCircle",
  geoMidpoint: { "@type": "GeoCoordinates", latitude: 53.4575, longitude: -2.6729 },
  geoRadius: "40000"
}
```

### CHECK 7 — Core Web Vitals Risk Audit

**LCP (Largest Contentful Paint) — target < 2.5s:**
- `public/img1.png` through `img9.png` — PNG files are LCP risk
- Verify hero images use Next.js `<Image priority>` with correct `sizes` prop
- Verify `<Image>` is imported from `next/image` not `<img>`
- Check `fetchpriority="high"` is implicitly added by Next.js `priority` prop

**INP (Interaction to Next Paint) — target < 200ms (replaced FID in 2024):**
- Count `'use client'` directives — each ships JavaScript to the browser
- Verify client components use `React.lazy()` or `next/dynamic` where possible
- `src/components/FAQ.tsx` — check if Server Component is possible
- `ServiceDynamicClient.tsx` — uses `next/dynamic` ✓ but verify it has `ssr: false` only where needed

**CLS (Cumulative Layout Shift) — target < 0.1:**
- Every `<Image>` must have explicit `width` and `height` props OR use `fill` with correct container
- No `<img>` tags without dimensions (causes CLS)
- Verify fonts use `display: 'swap'` ✓ — check `font-display` class in layout
- Verify no conditional rendering that changes DOM structure after hydration

**Font loading:**
- `app/layout.tsx` uses `next/font/google` with `display: 'swap'` ✓
- Two fonts: Inter + Plus Jakarta Sans — verify neither triggers extra network round-trips
- Consider `preload: false` for secondary font if LCP is delayed

**Resource hints to check `app/layout.tsx` for:**
- Hero image should have `rel="preload"` via Next.js `<Image priority>`
- Third-party scripts (if any) should be deferred

### CHECK 8 — Rendering Strategy Audit

For each route, verify the correct rendering strategy:

| Route | Required Strategy | How to Verify |
|-------|------------------|---------------|
| `app/services/[service]/[town]/page.tsx` | SSG | `generateStaticParams` exports 840 combinations |
| `app/services/[service]/page.tsx` | SSG | `generateStaticParams` exports 40 services |
| `app/services/[...slug]/page.tsx` | SSG | `generateStaticParams` exports known slugs |
| `app/locations/[locationSlug]/page.tsx` | SSG | `generateStaticParams` exports 21 locations |
| `app/problems/[problemSlug]/page.tsx` | SSG | `generateStaticParams` present |
| `app/surfaces/[surfaceSlug]/page.tsx` | SSG | `generateStaticParams` present |
| `app/areas/[areaSlug]/page.tsx` | SSG | `generateStaticParams` present |
| `app/page.tsx` (homepage) | SSG | No dynamic params needed |

**Flag**: Any dynamic route WITHOUT `generateStaticParams` will fall back to SSR on first request (slow TTFB) or 404 with `dynamicParams = false`. All service/location routes MUST be SSG.

**`export const dynamic` check:**
- Verify no route accidentally has `export const dynamic = 'force-dynamic'` (forces SSR)
- Verify no route has `export const revalidate` set to a very short interval (wastes bandwidth)

### CHECK 9 — Indexing Blockers

Scan entire codebase for noindex risks:

```typescript
// Check every generateMetadata() return for:
robots: { index: false }
robots: 'noindex'

// Check next.config.ts headers() for:
{ key: 'X-Robots-Tag', value: 'noindex' }

// Check page JSX for:
<meta name="robots" content="noindex" />
```

**GSC verification:**
- `public/google1e10f429b785ad23.html` — verify file exists and is not accidentally .gitignored
- Alternative: verify `app/layout.tsx` contains GSC verification meta tag

**`dynamicParams` setting:**
- If `export const dynamicParams = false` is set on any route, unknown slugs return 404
- This is correct behaviour for invalid slugs but verify the slugs in `generateStaticParams` are exhaustive

### CHECK 10 — Mobile Usability

Read `app/layout.tsx` viewport configuration:
```typescript
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,   // allows user zoom ✓
  userScalable: true, // accessible ✓
  colorScheme: 'light dark',
};
```
This is correctly configured ✓

**Additional mobile checks:**
- Tap targets: CTA buttons must be ≥ 44×44px — check Tailwind classes (`min-h-[56px]`) ✓
- Horizontal overflow: check `overflow-x` — any container breaking layout on mobile
- Text size: flag `text-xs` on body content (< 12px renders poorly on mobile)
- `CTAButton` component — verify it meets touch target requirements

---

## Output Format

```
## TECHNICAL SEO AUDIT REPORT
Project:        R.R.M External Cleaning Specialist
Production URL: https://rrmexternalcleaningspecialist.co.uk
Date:           [today]
Pages audited:  ~895

---

### CRITICAL ISSUES — Fix Immediately

#### CRITICAL-1: [Issue Name]
Impact: [which pages affected + SEO consequence]
Affected files: [list]
Fix:
```ts
// BEFORE
[old code]

// AFTER
[new code]
```

[Repeat for each critical issue]

---

### HIGH PRIORITY — Fix Within 7 Days

#### HIGH-1: [Issue Name]
Impact: [explanation]
Affected files: [list]
Fix: [code or instructions]

---

### MEDIUM PRIORITY — Fix Within 30 Days

#### MEDIUM-1: [Issue Name]
Impact: [explanation]
Fix: [instructions]

---

### PASSED CHECKS

- [Check name]: PASS — [brief reason]

---

### SUMMARY SCORECARD

| Area | Score | Status |
|------|-------|--------|
| Metadata API | /10 | |
| Canonical URLs | /10 | |
| Structured Data | /10 | |
| Sitemap | /10 | |
| Core Web Vitals | /10 | |
| Rendering (SSG) | /10 | |
| Indexing | /10 | |
| Mobile Usability | /10 | |
| **Total** | **/80** | |
```

---

## Auto-Fix Rules

**Apply immediately without asking:**
1. `priceRange: '$$'` in layout.tsx → `'££'`
2. Sitemap URLs missing trailing slash → add to all entries in `app/sitemap.ts`
3. `Disallow: /_next/` in robots.txt → remove the line
4. Title template double-brand → add `{ absolute: title }` in metadataEngine.ts
5. Missing `addressRegion` → add `'Merseyside'` to schemaEngine.ts ADDRESS

**Ask before applying:**
- `aggregateRating` changes (user must confirm real review count)
- Modifying `generateStaticParams` (affects build time + scope)
- Adding new JSON-LD schema types to existing pages
- Changing `changeFrequency` or `priority` in sitemap (may affect crawl budget decisions)

---

## Example Usage

```
/technical-seo full
/technical-seo metadata
/technical-seo schema
/technical-seo sitemap
/technical-seo cwv
/technical-seo rendering
/technical-seo indexing
/technical-seo app/layout.tsx
```
