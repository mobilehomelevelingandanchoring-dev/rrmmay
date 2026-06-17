'use client';

import dynamic from 'next/dynamic';
import ServicePageContent from '@/pageComponents/ServicePage';
import { useParams } from 'next/navigation';

const LoadingFallback = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="animate-pulse text-muted-foreground">Loading...</div>
  </div>
);

// Dynamic imports for code splitting - each page loaded only when needed
const locationPages: Record<string, Record<string, ReturnType<typeof dynamic>>> = {
  'pressure-washing': {
    'liverpool': dynamic(() => import('@/pageComponents/pressure/PressureLiverpool').then(m => ({ default: m.PressureLiverpool })), { loading: LoadingFallback }),
    'warrington': dynamic(() => import('@/pageComponents/pressure/PressureWarrington').then(m => ({ default: m.PressureWarrington })), { loading: LoadingFallback }),
  },
  'gutter-cleaning': {
    'skelmersdale': dynamic(() => import('@/pageComponents/gutter/GutterSkelmersdale').then(m => ({ default: m.GutterSkelmersdale })), { loading: LoadingFallback }),
    'warrington': dynamic(() => import('@/pageComponents/gutter/GutterWarrington').then(m => ({ default: m.GutterWarrington })), { loading: LoadingFallback }),
    'liverpool': dynamic(() => import('@/pageComponents/gutter/GutterLiverpool').then(m => ({ default: m.GutterLiverpool })), { loading: LoadingFallback }),
    'manchester': dynamic(() => import('@/pageComponents/gutter/GutterManchester').then(m => ({ default: m.GutterManchester })), { loading: LoadingFallback }),
    'st-helens': dynamic(() => import('@/pageComponents/gutter/GutterStHelens').then(m => ({ default: m.GutterStHelens })), { loading: LoadingFallback }),
    'widnes': dynamic(() => import('@/pageComponents/gutter/GutterWidnes').then(m => ({ default: m.GutterWidnes })), { loading: LoadingFallback }),
    'wigan': dynamic(() => import('@/pageComponents/gutter/GutterWigan').then(m => ({ default: m.GutterWigan })), { loading: LoadingFallback }),
    'golborne': dynamic(() => import('@/pageComponents/gutter/GutterGolborne').then(m => ({ default: m.GutterGolborne })), { loading: LoadingFallback }),
    'huyton': dynamic(() => import('@/pageComponents/gutter/GutterHuyton').then(m => ({ default: m.GutterHuyton })), { loading: LoadingFallback }),
    'lymm': dynamic(() => import('@/pageComponents/gutter/GutterLymm').then(m => ({ default: m.GutterLymm })), { loading: LoadingFallback }),
    'newton-le-willows': dynamic(() => import('@/pageComponents/gutter/GutterNewtonLeWillows').then(m => ({ default: m.GutterNewtonLeWillows })), { loading: LoadingFallback }),
  },
  'exterior-cleaning': {
    'wigan': dynamic(() => import('@/pageComponents/exterior/ExteriorCleaningWigan').then(m => ({ default: m.ExteriorCleaningWigan })), { loading: LoadingFallback }),
    'skelmersdale': dynamic(() => import('@/pageComponents/exterior/ExteriorCleaningSkelmersdale').then(m => ({ default: m.ExteriorCleaningSkelmersdale })), { loading: LoadingFallback }),
    'warrington': dynamic(() => import('@/pageComponents/exterior/ExteriorCleaningWarrington').then(m => ({ default: m.ExteriorCleaningWarrington })), { loading: LoadingFallback }),
    'liverpool': dynamic(() => import('@/pageComponents/exterior/ExteriorCleaningLiverpool').then(m => ({ default: m.ExteriorCleaningLiverpool })), { loading: LoadingFallback }),
    'manchester': dynamic(() => import('@/pageComponents/exterior/ExteriorCleaningManchester').then(m => ({ default: m.ExteriorCleaningManchester })), { loading: LoadingFallback }),
    'st-helens': dynamic(() => import('@/pageComponents/exterior/ExteriorCleaningStHelens').then(m => ({ default: m.ExteriorCleaningStHelens })), { loading: LoadingFallback }),
    'widnes': dynamic(() => import('@/pageComponents/exterior/ExteriorCleaningWidnes').then(m => ({ default: m.ExteriorCleaningWidnes })), { loading: LoadingFallback }),
    'golborne': dynamic(() => import('@/pageComponents/exterior/ExteriorCleaningGolborne').then(m => ({ default: m.ExteriorCleaningGolborne })), { loading: LoadingFallback }),
    'huyton': dynamic(() => import('@/pageComponents/exterior/ExteriorCleaningHuyton').then(m => ({ default: m.ExteriorCleaningHuyton })), { loading: LoadingFallback }),
    'lymm': dynamic(() => import('@/pageComponents/exterior/ExteriorCleaningLymm').then(m => ({ default: m.ExteriorCleaningLymm })), { loading: LoadingFallback }),
    'newton-le-willows': dynamic(() => import('@/pageComponents/exterior/ExteriorCleaningNewtonLeWillows').then(m => ({ default: m.ExteriorCleaningNewtonLeWillows })), { loading: LoadingFallback }),
  },
};

export default function ServiceDynamicClient() {
  const params = useParams();
  const slug = params.slug as string[];

  const serviceSlug = slug?.[0] || '';
  const locationSlug = slug?.[1];

  // Check for a dedicated location-specific component
  if (locationSlug && locationPages[serviceSlug]?.[locationSlug]) {
    const LocationComponent = locationPages[serviceSlug][locationSlug];
    return <LocationComponent />;
  }

  return (
    <ServicePageContent
      params={{
        serviceSlug,
        ...(locationSlug && { locationSlug })
      }}
    />
  );
}
