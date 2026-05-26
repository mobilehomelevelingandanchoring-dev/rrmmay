'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { videoObjectSchema } from '@/lib/schema';
import { LiteYouTube } from '@/components/LiteYouTube';

const VIDEOS_DATA = [
  {
    id: '5t2gaYNzQFQ',
    title: 'Professional Driveway Cleaning Demo – Newton-le-Willows by R.R.M Exterior Cleaning',
    description: 'Watch our professional driveway cleaning transformation. Expert pressure washing removes dirt, moss, and stains from driveways in Newton-le-Willows and surrounding areas.',
    relatedPage: '/services/driveway-cleaning',
    relatedLabel: 'Explore Driveway Cleaning Services',
  },
  {
    id: '83ZS3cX5cQ0',
    title: 'Professional Roof Soft Washing – R.R.M Exterior Cleaning Greater Manchester',
    description: 'See specialized roof soft washing techniques in action. Safe, effective moss and algae removal for all roof types across Greater Manchester.',
    relatedPage: '/services/roof-cleaning',
    relatedLabel: 'Learn About Roof Cleaning',
  },
  {
    id: 'ACgJ89XF79c',
    title: 'Patio and Outdoor Space Restoration – R.R.M Exterior Cleaning',
    description: 'Discover how professional patio cleaning transforms outdoor spaces. Chemical-free methods deliver safe, lasting results for patios and decking.',
    relatedPage: '/services',
    relatedLabel: 'View Patio Cleaning Services',
  },
  {
    id: 'lvgqQkgdgqo',
    title: 'Comprehensive Exterior Cleaning Services – Pressure Washing & Soft Washing',
    description: 'Experience our complete exterior cleaning solutions. From pressure washing to soft washing, we provide professional results for residential and commercial properties.',
    relatedPage: '/services',
    relatedLabel: 'View All Services',
  },
];

const FEATURED_VIDEOS = [
  {
    id: '5t2gaYNzQFQ',
    title: 'R.R.M Exterior Cleaning – Professional Pressure Washing Demo Newton-le-Willows',
    heading: 'Pressure Washing Demo',
    description: 'Professional pressure washing of driveways and concrete surfaces in Newton-le-Willows. Watch as R.R.M Exterior Cleaning removes deep-set dirt, moss, and stains effectively, restoring surfaces to like-new condition with our expert pressure washing techniques.',
  },
  {
    id: 'b8npdce0TuY',
    title: 'R.R.M Exterior Cleaning – Professional Driveway Cleaning Demo Golborne',
    heading: 'Driveway Cleaning Demo',
    description: 'Expert driveway cleaning in Golborne using advanced pressure washing methods. See how R.R.M Exterior Cleaning transforms stained, weathered driveways into pristine surfaces, removing algae, moss, and accumulated grime while preserving your driveway\'s integrity.',
  },
  {
    id: 'ACgJ89XF79c',
    title: 'R.R.M Exterior Cleaning – Professional Roof Cleaning Tutorial Huyton',
    heading: 'Roof Cleaning Tutorial',
    description: 'Safe and effective roof cleaning techniques demonstrated in Huyton by R.R.M Exterior Cleaning. Learn how professional soft washing removes moss, algae, and lichen from roof tiles without causing damage, extending your roof\'s lifespan.',
  },
  {
    id: 'YGLP1Hm5MFE',
    title: 'R.R.M Exterior Cleaning – Professional Gutter & Patio Cleaning Guide Warrington',
    heading: 'Gutter & Patio Cleaning Guide',
    description: 'Complete gutter and patio cleaning guide from R.R.M Exterior Cleaning in Warrington. Discover professional methods for clearing blocked gutters, cleaning patio surfaces, and maintaining outdoor spaces to prevent damage and extend durability.',
  },
];

const VideoSection = () => {
  useEffect(() => {
    VIDEOS_DATA.forEach((video) => {
      const videoSchema = videoObjectSchema(video.id, video.title, video.description);
      const schemaEl = document.createElement('script');
      schemaEl.type = 'application/ld+json';
      schemaEl.innerHTML = JSON.stringify(videoSchema);
      schemaEl.className = `video-schema-${video.id}`;
      document.head.appendChild(schemaEl);
    });

    return () => {
      VIDEOS_DATA.forEach((video) => {
        const schemaEl = document.querySelector(`.video-schema-${video.id}`);
        if (schemaEl) schemaEl.remove();
      });
    };
  }, []);

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="videos-heading">
      <div className="container-custom max-w-6xl">
        <div className="text-center mb-8 md:mb-12 px-4">
          <h2 id="videos-heading" className="text-2xl md:text-3xl lg:text-4xl font-bold font-display mb-3 md:mb-4 text-primary">
            Pressure Washing & Exterior Cleaning Videos
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch professional exterior cleaning transformations. Our video gallery showcases real customer results from <strong>pressure washing</strong>, <strong>soft washing</strong>,
            <strong> driveway cleaning</strong>, and specialized services across Greater Manchester.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12 px-4 md:px-0">
          {VIDEOS_DATA.map((video) => (
            <article
              key={video.id}
              className="flex flex-col h-full bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <figure className="flex-shrink-0">
                <LiteYouTube videoId={video.id} title={video.title} className="rounded-t-lg" />
                <figcaption className="p-3 md:p-4 bg-accent-50 border-t border-accent-100">
                  <h3 className="font-semibold text-xs md:text-sm text-primary mb-2">
                    {video.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                    {video.description}
                  </p>
                  <Link
                    href={video.relatedPage}
                    className="inline-flex items-center text-xs font-semibold text-accent hover:text-accent-dark transition-colors"
                  >
                    {video.relatedLabel}
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </figcaption>
              </figure>
            </article>
          ))}
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 md:p-6 rounded text-center mx-4 md:mx-0">
          <p className="text-xs md:text-sm text-gray-700 mb-3">
            These videos showcase actual R.R.M External Cleaning projects across Greater Manchester,
            demonstrating our commitment to professional standards and customer satisfaction.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-4 md:px-6 py-2 bg-primary text-white rounded-lg font-semibold text-sm hover:bg-primary-dark transition-colors"
          >
            Explore All Services
          </Link>
        </div>

        {/* Featured Videos Section */}
        <section className="mt-12 md:mt-16 lg:mt-20 border-t-2 border-gray-200 pt-8 md:pt-12">
          <article className="text-center mb-8 md:mb-12 px-4 md:px-0">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-display mb-3 md:mb-4 text-primary">
              Featured Videos
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Check out our latest YouTube content and tutorials featuring real R.R.M Exterior Cleaning projects across Greater Manchester and surrounding areas.
            </p>
          </article>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-4 md:px-0">
            {FEATURED_VIDEOS.map((video) => (
              <figure key={video.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <LiteYouTube videoId={video.id} title={video.title} />
                <figcaption className="p-4 md:p-5 bg-accent-50">
                  <h3 className="text-lg md:text-xl font-bold text-primary mb-2">{video.heading}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {video.description}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-8 md:mt-10 px-4 md:px-0">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 bg-primary text-white rounded-lg font-semibold text-sm md:text-base hover:bg-primary-dark transition-colors"
            >
              View All Services
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
};

export default VideoSection;
