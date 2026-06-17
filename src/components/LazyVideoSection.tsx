'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

const VideoSection = dynamic(() => import('@/components/VideoSection'), {
  loading: () => (
    <div className="py-16 text-center text-muted-foreground">Loading videos...</div>
  ),
});

export function LazyVideoSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="min-h-[200px]">
      {visible ? <VideoSection /> : null}
    </div>
  );
}
