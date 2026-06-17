import React from 'react';
import Reveal from '@/components/ui/Reveal';

const promises = [
  {
    title: 'On time, every time',
    body: 'We show up inside the window we give you — no all-day waiting around.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
  {
    title: 'We respect your home',
    body: 'Drop cloths down, shoe covers on, and the work area left clean when we leave.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    ),
  },
  {
    title: 'You approve the price first',
    body: 'A clear, upfront quote before any work begins. You decide before we start.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
  {
    title: 'No surprise billing',
    body: 'The price you approve is the price you pay. No hidden fees added at the end.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
    ),
  },
  {
    title: 'Licensed & insured',
    body: 'CSLB #596557, fully insured. A family-owned Redding plumber since 1998.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    ),
  },
];

export default function ToplinePromise() {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-14 lg:mb-16">
            <div className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.12em] text-primary mb-4">
              <span className="w-8 h-px bg-primary" aria-hidden />
              THE TOPLINE PROMISE
              <span className="w-8 h-px bg-primary" aria-hidden />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-4 tracking-[-0.02em] leading-[1.1] no-orphans">
              What you can count on, every job.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              No games, no surprises. Here is exactly what we commit to before we ever pick up a wrench.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {promises.map((p) => (
            <div
              key={p.title}
              className="flex items-start gap-4 bg-[#F8FAFC] rounded-2xl border border-gray-200 p-6 lg:p-7 transition-[transform,box-shadow,border-color] duration-200 ease-snappy hover:border-navy-900/20 hover:-translate-y-[3px] hover:shadow-[0_16px_36px_-10px_rgba(15,23,42,0.10)]"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden>
                  {p.icon}
                </svg>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-navy-900 mb-1.5 tracking-tight">{p.title}</h3>
                <p className="text-[14px] text-gray-600 leading-relaxed">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
