import React from 'react';
import Link from 'next/link';

interface ServiceGalleryProps {
  photos: string[];
  title?: string;
  subtitle?: string;
  ctaHref?: string;
  ctaLabel?: string;
}

export default function ServiceGallery({
  photos,
  title = 'Recent Work',
  subtitle = 'Real jobs from real homes across Northern California — every photo is from a Topline crew.',
  ctaHref = '/gallery',
  ctaLabel = 'See the full project gallery →',
}: ServiceGalleryProps) {
  if (!photos || photos.length === 0) return null;

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-primary mb-2">
            Proof of Work
          </p>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy-900 mb-3">
            {title}
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {photos.map((filename, idx) => (
            <Link
              key={filename}
              href={ctaHref}
              className="block aspect-square overflow-hidden rounded-lg bg-gray-200 group relative shadow-sm hover:shadow-md transition-shadow"
              aria-label={`View Topline Plumbing project photo ${idx + 1} in gallery`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/gallery/${encodeURIComponent(filename)}`}
                alt={`Topline Plumbing project ${idx + 1}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" aria-hidden />
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
