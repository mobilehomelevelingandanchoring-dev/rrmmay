'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';

interface LiteYouTubeProps {
  videoId: string;
  title: string;
  className?: string;
}

export function LiteYouTube({ videoId, title, className = '' }: LiteYouTubeProps) {
  const [activated, setActivated] = useState(false);

  const activate = useCallback(() => setActivated(true), []);

  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  if (activated) {
    return (
      <div className={`relative w-full aspect-video ${className}`}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full rounded-xl"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={activate}
      aria-label={`Play video: ${title}`}
      className={`relative w-full aspect-video cursor-pointer group bg-black rounded-xl overflow-hidden ${className}`}
    >
      <Image
        src={thumbnailUrl}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px"
        className="object-cover transition-opacity duration-300 group-hover:opacity-75"
        loading="lazy"
      />
      {/* Play button overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          viewBox="0 0 68 48"
          width="68"
          height="48"
          className="drop-shadow-lg"
          aria-hidden="true"
        >
          <path
            d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
            fill="red"
          />
          <path d="M45 24 27 14v20" fill="white" />
        </svg>
      </div>
    </button>
  );
}
