'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

const photos = [
  '32d2390a5f08f9fa688adfd29bcded5f.jpg',
  '8a3440e544ae1ed48910c97cc095cde8.jpg',
  'PXL_20230824_183436283~2.jpg',
  'PXL_20230824_184759382.MP.jpg',
  'PXL_20230824_190214986.jpg',
  'PXL_20230824_190715691.jpg',
  'PXL_20230824_202929211.jpg',
  'PXL_20230824_203034325.jpg',
  'PXL_20230824_203617356.jpg',
  'PXL_20230825_162316080.MP.jpg',
  'PXL_20230825_162506459.jpg',
  'PXL_20230825_162604778.MP.jpg',
  'PXL_20230825_170331692.jpg',
  'PXL_20230825_182557410.jpg',
  'PXL_20230825_182856575.jpg',
  'PXL_20230825_182948804.jpg',
  'PXL_20230825_184450871.MP.jpg',
  'PXL_20230825_184458238.jpg',
  'PXL_20230825_210252443.jpg',
  'PXL_20230825_210300418.jpg',
  'PXL_20230825_212631722.jpg',
  'PXL_20230825_212644110.jpg',
  'PXL_20230825_212727678.jpg',
  'PXL_20230825_212741148.jpg',
  'PXL_20230825_213739951.MP.jpg',
  'PXL_20230825_214155389.jpg',
  'PXL_20230825_214341787.jpg',
  'PXL_20230825_214416525.jpg',
  'PXL_20230825_230229123.jpg',
  'PXL_20230829_154222780.jpg',
  'PXL_20230829_154244043.jpg',
  'PXL_20230829_172350300.jpg',
  'PXL_20230829_172359542.jpg',
  'PXL_20230829_172405158.jpg',
  'PXL_20230829_225306088.MP.jpg',
  'PXL_20230829_225313506.jpg',
  'PXL_20230829_225325304.jpg',
  'PXL_20230830_180651564.jpg',
  'PXL_20230830_194134485.MP.jpg',
  'PXL_20230830_194201062.MP.jpg',
  'PXL_20230830_195557761.jpg',
  'PXL_20230831_195039433.jpg',
  'PXL_20230831_195044552.jpg',
  'PXL_20230831_195054222.jpg',
  'PXL_20230905_173519922.MP.jpg',
  'PXL_20230905_173548142.jpg',
  'PXL_20230905_205839104.jpg',
  'PXL_20230906_190237285.jpg',
  'PXL_20230907_171527829.jpg',
  'PXL_20230907_172844004.jpg',
  'PXL_20230907_172913442.jpg',
  'PXL_20230907_173629580.jpg',
  'PXL_20230907_184706103.jpg',
  'PXL_20230907_184810309.jpg',
  'PXL_20230908_191216325.jpg',
  'PXL_20230909_152106802.jpg',
  'PXL_20230909_193611657.jpg',
  'PXL_20230909_211732383.jpg',
  'PXL_20230909_211752855.jpg',
  'PXL_20230909_212047234.jpg',
  'PXL_20230911_181811472.jpg',
  'PXL_20230911_181819978.jpg',
  'PXL_20230911_181844320.jpg',
  'PXL_20230911_181942769.jpg',
  'PXL_20230911_182038289.jpg',
  'PXL_20230911_182047310.jpg',
  'PXL_20230911_182049838.jpg',
  'PXL_20230911_182059311.jpg',
  'PXL_20230911_182112583.MP.jpg',
  'PXL_20230911_182128368.MP.jpg',
  'PXL_20230911_182142819.jpg',
  'PXL_20230911_182154883.jpg',
  'PXL_20230911_182202168.jpg',
  'PXL_20230911_182304434.jpg',
  'PXL_20230911_183238954.jpg',
  'PXL_20230911_183623813.jpg',
  'PXL_20230911_183626309.jpg',
  'PXL_20230911_183633089.jpg',
  'PXL_20230911_183635572.MP.jpg',
  'PXL_20230911_190457525.MP.jpg',
  'PXL_20230911_204620703.MP.jpg',
  'PXL_20230911_204633268.MP.jpg',
  'PXL_20230911_204638852.jpg',
  'PXL_20230912_174512179.jpg',
  'PXL_20230912_174555072.jpg',
  'PXL_20230912_174618117.jpg',
  'PXL_20230912_175232939.jpg',
  'PXL_20230913_212209837.jpg',
  'PXL_20230913_212234667.jpg',
  'PXL_20230913_212248939.jpg',
  'PXL_20230913_212448741.jpg',
  'PXL_20230913_212503723.jpg',
  'PXL_20230913_212513690.jpg',
  'PXL_20230913_212739570.jpg',
  'PXL_20230913_212741735.jpg',
  'PXL_20230913_212821128.jpg',
  'PXL_20230915_190133086.jpg',
  'PXL_20230915_190147008.jpg',
  'PXL_20230915_190213833.jpg',
  'PXL_20230915_190241086.jpg',
  'PXL_20230915_190819865.jpg',
  'PXL_20230915_191155540.jpg',
  'PXL_20230915_191158947.jpg',
  'PXL_20230915_192456986.jpg',
  'PXL_20230919_165011872.jpg',
  'PXL_20230919_165605702.jpg',
  'PXL_20230919_200211191.jpg',
  'PXL_20230919_200218888.jpg',
  'PXL_20230919_201029777.jpg',
  'PXL_20230919_201031753.jpg',
  'PXL_20230919_214113359.jpg',
  'PXL_20230919_214128298.jpg',
  'PXL_20230919_214139777.jpg',
  'PXL_20230919_214152856.MP.jpg',
  'PXL_20230919_214239618.jpg',
  'PXL_20230919_214247511.jpg',
  'PXL_20230919_214307448.jpg',
  'PXL_20230919_232513379.MP.jpg',
  'PXL_20230919_232529625.jpg',
  'PXL_20230919_235304518.jpg',
  'PXL_20230920_002253335.jpg',
  'PXL_20230920_002255719.jpg',
  'PXL_20230920_002318631.MP.jpg',
];

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % photos.length);
  }, [lightboxIndex]);

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + photos.length) % photos.length);
  }, [lightboxIndex]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, goNext, goPrev]);

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our Work</p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Project Gallery
          </h1>
          <p className="text-navy-200 text-lg max-w-2xl mx-auto">
            Real jobs, real results. Browse photos from our plumbing projects across Northern California.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-900 font-medium">Gallery</span>
          </nav>
        </div>
      </div>

      {/* Masonry Grid */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            style={{
              columnCount: undefined,
              columns: undefined,
            }}
            className="[column-count:2] sm:[column-count:3] lg:[column-count:4] [column-gap:12px]"
          >
            {photos.map((filename, index) => (
              <div
                key={filename}
                className="break-inside-avoid mb-3 overflow-hidden rounded-lg cursor-pointer group relative bg-gray-200"
                onClick={() => openLightbox(index)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/gallery/${encodeURIComponent(filename)}`}
                  alt={`Topline Plumbing project photo ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                  style={{ opacity: 0, transition: 'opacity 0.3s ease, transform 0.3s ease' }}
                  onLoad={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = '1'; }}
                  className="w-full block object-cover group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Ready for Professional Plumbing?
          </h2>
          <p className="text-navy-200 text-lg mb-8">
            Our team delivers quality work on every job. Call us today for a free estimate.
          </p>
          <a
            href="tel:5307046989"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold text-lg rounded-xl hover:bg-primary-dark transition-all duration-300 shadow-brand hover:shadow-brand-lg hover:-translate-y-1"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
            </svg>
            (530) 704-6989
          </a>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors z-10"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium">
            {lightboxIndex + 1} / {photos.length}
          </div>

          {/* Prev */}
          <button
            className="absolute left-2 md:left-6 text-white p-3 hover:bg-white/10 rounded-full transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            aria-label="Previous photo"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center px-16 md:px-24"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={lightboxIndex}
              src={`/images/gallery/${encodeURIComponent(photos[lightboxIndex])}`}
              alt={`Topline Plumbing project photo ${lightboxIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
          </div>

          {/* Next */}
          <button
            className="absolute right-2 md:right-6 text-white p-3 hover:bg-white/10 rounded-full transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            aria-label="Next photo"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
