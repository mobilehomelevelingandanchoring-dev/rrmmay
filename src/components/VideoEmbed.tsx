'use client';

import Link from 'next/link';
import { LiteYouTube } from '@/components/LiteYouTube';

interface VideoEmbedProps {
  title: string;
  description: string;
  relatedPageUrl?: string;
  relatedPageLabel?: string;
  location?: string;
  service?: string;
}

const VideoEmbed = ({
  title,
  description,
  relatedPageUrl,
  relatedPageLabel,
}: VideoEmbedProps) => {
  return (
    <article className="my-12 bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
      <figure className="flex flex-col">
        <LiteYouTube videoId="YGLP1Hm5MFE" title={title} />
        <figcaption className="p-6 bg-gray-50">
          <h3 className="text-lg font-semibold text-primary mb-2">
            {title}
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            {description}
          </p>
          {relatedPageUrl && relatedPageLabel && (
            <div className="pt-3 border-t border-gray-200">
              <Link
                href={relatedPageUrl}
                className="inline-flex items-center text-sm font-semibold text-accent hover:text-accent-dark transition-colors"
              >
                {relatedPageLabel}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          )}
        </figcaption>
      </figure>
    </article>
  );
};

export default VideoEmbed;
