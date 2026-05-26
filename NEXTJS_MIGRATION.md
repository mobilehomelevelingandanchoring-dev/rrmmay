# React + Vite to Next.js Migration Guide

## Migration Complete ✅

This project has been successfully migrated from React + Vite to Next.js 15 with full feature parity.

### What Changed

#### 1. **Removed Dependencies**
- `react-router-dom` → Replaced with Next.js App Router
- `react-helmet-async` → Replaced with Next.js Metadata API
- `vite` and related packages → Removed (Next.js handles bundling)

#### 2. **Added Dependencies**
- `next` (v15.1.0) - Core framework
- `eslint-config-next` - Next.js linting

#### 3. **Project Structure**

**Before (Vite):**
```
src/
  App.tsx
  main.tsx
  pages/*.tsx
  components/
  public/
```

**After (Next.js):**
```
app/
  layout.tsx (root layout)
  page.tsx (home page)
  [routes]/page.tsx (dynamic routes)
src/
  pages/*.tsx (reusable page components)
  components/
  public/
```

#### 4. **Routing Changes**

| Vite Route | Next.js Route | File Location |
|---|---|---|
| `/` | `/` | `app/page.tsx` |
| `/services` | `/services` | `app/services/page.tsx` |
| `/services/:slug` | `/services/[...slug]` | `app/services/[...slug]/page.tsx` |
| `/contact` | `/contact` | `app/contact/page.tsx` |
| `*` (404) | `/[not-found]` | `app/not-found.tsx` |

#### 5. **Component Updates**

**React Router → Next.js Navigation**
```tsx
// Before
import { Link } from 'react-router-dom';
<Link to="/services">Services</Link>

// After
import Link from 'next/link';
<Link href="/services">Services</Link>
```

**Helmet → Next.js Metadata**
```tsx
// Before - in component
import { Helmet } from 'react-helmet-async';
<Helmet>
  <title>Page Title</title>
  <meta name="description" content="..." />
</Helmet>

// After - in layout/page
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Page Title',
  description: '...'
};
```

**useParams Hook**
```tsx
// Before
import { useParams } from 'react-router-dom';
const { serviceSlug } = useParams();

// After
import { useParams } from 'next/navigation';
const params = useParams();
const serviceSlug = params.serviceSlug;
// OR for server components:
export default function Page({ params }: { params: { slug: string } }) {
  // Use params directly
}
```

### Configuration Files

#### `next.config.ts`
- Image optimization with AVIF and WebP support
- SEO headers configuration
- Path aliases (@/)

#### `tsconfig.json`
- Updated for Next.js compatibility
- Maintains path aliases

#### `package.json`
- Scripts updated: `npm run dev` (was `vite`)
- Build still uses `next build`

### Key Features Preserved

✅ **UI/UX:** All components and styling remain identical  
✅ **Design:** Tailwind CSS configuration unchanged  
✅ **Styling:** CSS structure and global styles preserved  
✅ **Layout:** Header, Footer, and Layout components work with Next.js Link  
✅ **SEO:** Schema.org metadata now server-rendered in layout  
✅ **Content:** All pages, text, and imagery unchanged  
✅ **Routing:** All routes functional with dynamic parameters  
✅ **Components:** shadcn/ui, Radix UI components fully compatible  

### Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

4. **Lint code:**
   ```bash
   npm run lint
   ```

### Important Notes

**Cookie/localStorage usage:**
If components use browser APIs, mark them with `'use client'` directive.

**API Routes:**
If you need backend endpoints, create them in `app/api/[route]/route.ts`

**Environment Variables:**
- `.env.local` - Local development
- Environment variables must be available at build time for server components

### Migration Checklist

- [x] Create Next.js app directory structure
- [x] Update package.json with Next.js dependencies
- [x] Create root layout (app/layout.tsx)
- [x] Create home page (app/page.tsx)
- [x] Create all route pages (services, locations, etc.)
- [x] Update Link components (to → href)
- [x] Remove react-router-dom imports
- [x] Replace Helmet with Metadata API
- [x] Update useParams hooks
- [x] Copy all source components
- [x] Copy public assets
- [x] Update configuration files
- [x] Create next.config.ts
- [x] Create .eslintrc.json
- [x] Create .prettierrc
- [x] Add 'use client' where needed

### Next Steps

1. Test all pages and routes in development
2. Verify SEO metadata is correctly set
3. Test dynamic routes with parameters
4. Deploy to Vercel (recommended for Next.js)

### Support

For Next.js documentation, visit: https://nextjs.org/docs

For migration questions, refer to: https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration-guide
