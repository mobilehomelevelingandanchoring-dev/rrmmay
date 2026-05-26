# Next.js Migration - Remaining Manual Updates

## Bulk Link Update Helper

Due to the large number of location-specific pages (pressure, gutter, roof, render, exterior, cladding), you can quickly update all remaining `Link to=` to `Link href=` using find-and-replace.

### For VS Code:

1. **Open Find and Replace:**
   - Press `Ctrl+H` (Windows/Linux) or `Cmd+Shift+H` (Mac)

2. **Find:** `Link to=` (literal text search)

3. **Replace with:** `Link href=`

4. **Replace All** in the `src/pages/**/*.tsx` files

5. **Update imports at top of files:**
   - Find: `import { Link } from "react-router-dom";`
   - Replace with: `import Link from "next/link";`

6. **Update useParams hooks (in LocationPage, ProblemPage, etc.):**
   - Find: `import { useParams } from "react-router-dom";`
   - Replace with: `import { useParams } from "next/navigation";`

### Files That Need Updates:

The following file types still contain react-router-dom imports:
- `src/pages/*/LocationPage.tsx`
- `src/pages/AreaPage.tsx`  
- `src/pages/SurfacePage.tsx`
- `src/pages/*/GutterWigan.tsx` (and other location pages)
- `src/pages/*/PressureNewtonLeWillows.tsx` (and other location pages)
- `src/pages/*/RoofNewtonLeWillows.tsx` (and other location pages)
- `src/pages/*/RenderNewtonLeWillows.tsx` (and other location pages)
- `src/pages/*/ExteriorCleaningNewtonLeWillows.tsx` (and other location pages)
- `src/pages/*/CladdingNewtonLeWillows.tsx` (and other location pages)

### Quick Automated Update (for developers):

You can run this sed command to update all files (macOS/Linux):

```bash
# Update Link to= to Link href=
find src/pages -name "*.tsx" -exec sed -i 's/Link to=/Link href=/g' {} \;

# Update react-router-dom imports to next/link
find src/pages -name "*.tsx" -exec sed -i 's/from "react-router-dom"/from "next\/link"/g' {} \;
```

For Windows PowerShell:

```powershell
# Update all Link to= to Link href= in tsx files
Get-ChildItem -Path "src/pages" -Filter "*.tsx" -Recurse | ForEach-Object {
    (Get-Content $_.FullName) -replace 'Link to=', 'Link href=' | Set-Content $_.FullName
}

# Update imports
Get-ChildItem -Path "src/pages" -Filter "*.tsx" -Recurse | ForEach-Object {
    (Get-Content $_.FullName) -replace 'from "react-router-dom"', 'from "next/link"' | Set-Content $_.FullName
}
```

### Custom Component Imports

For any remaining custom imports from react-router-dom, replace them:

```tsx
// BEFORE
import { useParams, Link, useLocation } from "react-router-dom";

// AFTER
'use client';
import Link from "next/link";
import { useParams } from "next/navigation";
// Remove useLocation - use useSearchParams if needed
```

## Next.js API Usage

### useParams - Getting URL Parameters

```tsx
// Replaces: const { slug } = useParams(); (from react-router)

// Client Component:
'use client';
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  const slug = params.slug; // Use like this
}

// Server Component:
export default function Page({ params }: { params: { slug: string } }) {
  // params are passed as props
}
```

### useSearchParams - Query Parameters

```tsx
// Replaces: const location = useLocation(); useLocation().search

'use client';
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams(),
  const query = searchParams.get('q');
}
```

### useRouter - Navigation

```tsx
// Replaces: useNavigate() from react-router

'use client';
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  
  // Push to new route
  router.push('/path');
  
  // Replace current route
  router.replace('/path');
  
  // Go back
  router.back();
  
  // Go forward
  router.forward();
}
```

## Testing

Once you've made the updates:

1. **Run the dev server:**
   ```bash
   npm run dev
   ```

2. **Test navigation:**
   - Click through all navigation links
   - Check that dynamic routes work (services, locations, etc.)
   - Verify the 404 page shows for invalid routes

3. **Check console:**
   - Ensure no react-router-dom errors
   - Check for any missing Link href warnings

## Production Deployment

### For Vercel:

1. Push code to GitHub/GitLab
2. Import project in Vercel
3. Vercel auto-detects Next.js and configures build
4. Deploy!

### For Other Hosts:

Build and deploy:
```bash
npm run build
npm run start
```

### Environment Setup:

Create `.env.production.local` for production variables if needed.

## Additional Resources

- **Next.js Link:** https://nextjs.org/docs/app/api-reference/components/link
- **useParams:** https://nextjs.org/docs/app/api-reference/functions/use-params
- **useRouter:** https://nextjs.org/docs/app/api-reference/functions/use-router
- **Routing Migration:** https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration-guide

## Common Issues & Solutions

### Issue: "next/link requires an <a> tag child"
**Solution:** Ensure Link wrapper contains an `<a>` tag or use `asChild` prop:
```tsx
// Works
<Link href="/page"><a>Click</a></Link>

// OR
import { Button } from "@/components/ui/button";
<Button asChild>
  <Link href="/page">Click</Link>
</Button>
```

### Issue: Page not found on dynamic route
**Solution:** Check that the route file structure matches the URL pattern:
- URL: `/services/pressure-washing` 
- File: `app/services/[...slug]/page.tsx`

### Issue: Metadata not showing
**Solution:** Ensure metadata is exported from page.tsx or layout.tsx:
```tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title'
};
```

## Support

For Next.js specific questions: https://github.com/vercel/next.js/discussions
For Stack Overflow: Tag with `next.js`
