'use client';

/**
 * <Analytics />
 *
 * Tracks client-side route changes in the Next.js App Router (SPA navigations).
 * The GA4 script itself is loaded directly in <head> in app/layout.tsx so that
 * Google Tag Assistant and crawlers can detect it in the initial HTML.
 *
 * This component only fires pageview() on subsequent navigations — the initial
 * page_view is handled by the gtag('config', ...) call in the <head> script.
 */

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef, Suspense } from 'react';
import { GA_MEASUREMENT_ID, pageview } from '@/lib/gtag';

function AnalyticsInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // Skip first render — the <head> init script already fires the initial page_view.
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const qs = searchParams.toString();
    const url = pathname + (qs ? `?${qs}` : '');
    pageview(url);
  }, [pathname, searchParams]);

  return null;
}

export function Analytics() {
  if (!GA_MEASUREMENT_ID) return null;

  // Suspense is required by Next.js App Router when using useSearchParams().
  return (
    <Suspense fallback={null}>
      <AnalyticsInner />
    </Suspense>
  );
}
