import React from 'react';
import Reveal from '@/components/ui/Reveal';

const GOOGLE_BUSINESS_URL = 'https://www.google.com/maps?cid=353211204535522869';
const CSLB_LOOKUP_URL = 'https://www.cslb.ca.gov/onlineservices/checklicenseII/checklicense.aspx';
const GOOGLE_REVIEW_RATING = 5.0;
const GOOGLE_REVIEW_COUNT = 52; // Live GBP count (verified via Places API 2026-06-26); update as it grows.

const testimonials = [
  {
    rating: 5,
    text: 'My water main broke at my house and Topline Plumbing was here within an hour to fix it. Excellent work and communication. If I ever need a plumber again they will be my first call. Thank you again Joe & Josiah.',
    name: 'Gary Atkison',
    location: 'Verified Google Review',
    initials: 'GA',
  },
  {
    rating: 5,
    text: "Very good experience, within quote, clean repair, with system back on in a very short period of time. Couldn't be happier. Not the first job that they did for me. Highly recommend for your plumbing needs.",
    name: 'Michael Quinn',
    location: 'Verified Google Review',
    initials: 'MQ',
  },
  {
    rating: 5,
    text: 'Had a toilet leaking like crazy. They fit me in the very next morning for my service call. Fixed the leak on my old toilet promptly. Fast, efficient and very knowledgeable! Highly recommend!!',
    name: 'Tracy Holt',
    location: 'Verified Google Review',
    initials: 'TH',
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

function FamilyOwnedBadge() {
  return (
    <div className="flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-[filter,opacity] duration-200 ease-snappy">
      <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-navy-900/5 text-navy-900">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-[15px] font-black text-navy-900">Family Owned</span>
        <span className="text-[11px] font-semibold text-gray-500 tracking-wide">Serving Redding since 1998</span>
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
        <span className="text-[11px] font-semibold text-gray-500 tracking-wide">CA CSLB #596557 · verify</span>
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
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              See what homeowners across Northern California say about working with Topline Plumbing.
            </p>
            {/* Live aggregate — verified 5.0 / 50 on Google */}
            <a
              href={GOOGLE_BUSINESS_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${GOOGLE_REVIEW_RATING.toFixed(1)} stars from ${GOOGLE_REVIEW_COUNT} Google reviews — read them on Google`}
              className="inline-flex items-center gap-2.5 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm hover:shadow-md hover:border-gray-300 transition-[box-shadow,border-color] duration-200"
            >
              <span className="text-xl font-bold text-navy-900">{GOOGLE_REVIEW_RATING.toFixed(1)}</span>
              <span className="flex items-center gap-0.5" aria-hidden>
                {[0, 1, 2, 3, 4].map((i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </span>
              <span className="text-sm font-medium text-gray-600">{GOOGLE_REVIEW_COUNT} Google reviews</span>
            </a>
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
            Why homeowners trust Topline
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
            <a href={GOOGLE_BUSINESS_URL} target="_blank" rel="noopener noreferrer" aria-label="Read Topline Plumbing reviews on Google" className="rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
              <GoogleReviewsBadge />
            </a>
            <FamilyOwnedBadge />
            <a href={CSLB_LOOKUP_URL} target="_blank" rel="noopener noreferrer" aria-label="Verify Topline Plumbing license #596557 on the CSLB website" className="rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
              <LicensedBadge />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
