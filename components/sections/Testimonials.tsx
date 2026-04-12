import React from 'react';
import Reveal from '@/components/ui/Reveal';

const testimonials = [
  {
    rating: 5,
    text: 'Joe and his team saved us when our pipe burst at 2am. They were professional, fast, and fair. Highly recommend!',
    name: 'James M.',
    location: 'Redding, CA',
    initials: 'JM',
  },
  {
    rating: 5,
    text: 'Installed our new tankless water heater effortlessly. They explained everything clearly and left the garage cleaner than they found it.',
    name: 'Tina P.',
    location: 'Anderson, CA',
    initials: 'TP',
  },
  {
    rating: 5,
    text: "Honest plumbers. Came out for what I thought was a huge issue, cleared a simple clog for $130, and didn't try to upsell me at all.",
    name: 'David R.',
    location: 'Shasta Lake, CA',
    initials: 'DR',
  },
];

// Inline SVG trust badges — grayscale by default, color on group-hover
function GoogleReviewsBadge() {
  return (
    <div className="flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-[filter,opacity] duration-200 ease-snappy">
      <svg className="w-8 h-8" viewBox="0 0 48 48" aria-hidden>
        <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
        <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
        <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
        <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
      </svg>
      <div className="flex flex-col leading-tight">
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-3.5 h-3.5 text-yellow-500 fill-current" viewBox="0 0 20 20" aria-hidden>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="text-[11px] font-semibold text-gray-500 tracking-wide mt-0.5">Google Reviews</span>
      </div>
    </div>
  );
}

function BBBBadge() {
  return (
    <div className="flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-[filter,opacity] duration-200 ease-snappy">
      <div className="relative flex items-center justify-center w-11 h-11 rounded-lg bg-[#004B87] text-white">
        <span className="text-[11px] font-black tracking-tight leading-none">BBB</span>
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-[15px] font-black text-[#004B87]">A+ Rating</span>
        <span className="text-[11px] font-semibold text-gray-500 tracking-wide">Better Business Bureau</span>
      </div>
    </div>
  );
}

function YelpBadge() {
  return (
    <div className="flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-[filter,opacity] duration-200 ease-snappy">
      <svg className="w-9 h-9" viewBox="0 0 228 228" aria-hidden>
        <path fill="#D32323" d="M193.564 124.04l-41.696-13.586s-13.046-3.938-10.11-13.01c0 0 .947-3.048 4.55-7.77l43.77-51.55s3.99-4.85 6.57-6.09c3.27-1.58 7.12-1.2 10.08.46 4.55 2.55 26.46 25.73 30.99 35.58 0 0 8.67 18.95 11.94 45.23 1.34 10.87-.56 18.14-8.25 20.11-7.29 1.86-35.03-9.37-35.03-9.37h-.01zM133.53 151.14L74 105.2S59.24 94.28 67.44 84.38c0 0 3.5-4.35 17.94-6.37l64.38-8.86s5.74-.71 8.82-.25c5.36.8 8.49 4.02 9.71 8.15 1.92 6.55-1.9 40.85-6.16 52.77 0 0-5.17 20.67-22.64 16.43l-5.96-1.1v5.99zM118.02 24.87c-1.76-9.01-5.41-20.67-9.53-25.89-6.24-7.88-33.87-9.03-55.2.58C32.32 9.43 17.4 30.76 15 45.12c-1.97 11.83 4.09 14.82 4.09 14.82l66.21 40.87s8.84 6.49 16.68-.31c8.57-7.42 20.83-60.43 16.04-75.63z"/>
      </svg>
      <div className="flex flex-col leading-tight">
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-3.5 h-3.5 text-[#D32323] fill-current" viewBox="0 0 20 20" aria-hidden>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="text-[11px] font-semibold text-gray-500 tracking-wide mt-0.5">Yelp Reviews</span>
      </div>
    </div>
  );
}

function LicensedBadge() {
  return (
    <div className="flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-[filter,opacity] duration-200 ease-snappy">
      <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-accent-green/10 text-accent-green">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-[15px] font-black text-navy-900">Licensed &amp; Insured</span>
        <span className="text-[11px] font-semibold text-gray-500 tracking-wide">California CSLB</span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal>
          <div className="text-center mb-14 lg:mb-16">
            <div className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.12em] text-primary mb-4">
              <span className="w-8 h-px bg-primary" aria-hidden />
              REAL REVIEWS FROM REAL CUSTOMERS
              <span className="w-8 h-px bg-primary" aria-hidden />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-4 tracking-[-0.02em] leading-[1.1] no-orphans">
              Don&apos;t just take our word for it.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See what homeowners across Northern California say about working with Topline Plumbing.
            </p>
          </div>
        </Reveal>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-14">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="group bg-white p-7 lg:p-8 rounded-2xl border border-gray-200 transition-[transform,box-shadow,border-color] duration-200 ease-snappy hover:border-navy-900/20 hover:-translate-y-[3px] hover:shadow-[0_16px_36px_-10px_rgba(15,23,42,0.10)] active:scale-[0.98] active:shadow-sm flex flex-col h-full"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20" aria-hidden>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-[15px] text-gray-700 leading-relaxed mb-6 flex-grow">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center gap-3 pt-6 border-t border-gray-100">
                <div className="w-11 h-11 rounded-full bg-navy-900 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {testimonial.initials}
                </div>
                <div className="leading-tight">
                  <div className="font-bold text-navy-900 text-[15px]">
                    {testimonial.name}
                  </div>
                  <div className="text-[13px] text-gray-500 mt-0.5">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges Row */}
        <div className="pt-10 border-t border-gray-200">
          <p className="text-center text-[11px] font-semibold tracking-[0.12em] text-gray-400 uppercase mb-7">
            Trusted &amp; reviewed across
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
            <GoogleReviewsBadge />
            <BBBBadge />
            <YelpBadge />
            <LicensedBadge />
          </div>
        </div>
      </div>
    </section>
  );
}
