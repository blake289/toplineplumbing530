'use client';

import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

// Note: Metadata export only works in Server Components, but we need 'use client' for animations
// The metadata is still valid for SEO when this component is rendered on the server initially

export default function AboutPage() {
  return (
    <>
      {/* SECTION 1 — PAGE HERO BANNER */}
      <section className="pt-32 pb-16 md:pt-36 md:pb-20 bg-gradient-to-br from-navy-900 to-navy-700">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold uppercase mb-6 text-white">About Topline Plumbing</h1>
          <p className="text-lg md:text-xl text-white text-opacity-90">Your trusted plumbing partner in Redding & Northern California since 1998</p>
        </div>
      </section>

      {/* MEET THE TEAM SECTION - Moved to top */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#dc2626]" />
              <span className="text-[#dc2626] text-xs font-bold uppercase tracking-wider">Our Team</span>
              <div className="w-8 h-[2px] bg-[#dc2626]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1e3a5f]">
              Meet Joe & Cindy Torculas
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Family-owned and operated since 1998, serving Redding and Northern California with pride
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/joe-cindy.webp"
                alt="Joe and Cindy Torculas - Topline Plumbing Owners"
                width={1209}
                height={806}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — OUR STORY (two-column) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12">
            {/* Left column - Story */}
            <div>
              {/* Red label */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px] bg-[#dc2626]" />
                <span className="text-[#dc2626] text-xs font-bold uppercase tracking-wider">Our Story</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1e3a5f] mb-6">
                Family-Owned, Community-Focused
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                Topline Plumbing has served Redding and Northern California
                since 1998. What started as Joe Torculas working solo out of
                his truck has grown into the 530's most trusted family-owned
                plumbing company — still built on the same principles: answer
                the phone, show up when you say you will, quote the price
                upfront, and stand behind the work.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Over 27+ years in business, we've completed more than 2,847
                water heater installations, thousands of drain clearings,
                hundreds of full home repipes, and countless emergency
                responses at every hour of the day and night. That experience
                matters — we know which water heaters fail first in Redding's
                hard water, which neighborhoods have the worst sewer line root
                intrusion, and which shortcuts other plumbers take that show
                up as problems two years later.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Plumbing problems are stressful. When you call Topline, you'll
                always speak with a real person who actually does plumbing —
                not a scheduler, not a voicemail, not an answering service.
                Upfront pricing, no hidden fees, no after-hours premium. The
                same way Joe started in 1998.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-[#1e3a5f] px-4 py-2 rounded-full">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="font-semibold text-sm">Licensed & Insured</span>
                </div>

                <div className="inline-flex items-center gap-2 bg-blue-50 text-[#1e3a5f] px-4 py-2 rounded-full">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="font-semibold text-sm">Since 1998</span>
                </div>
              </div>
            </div>

            {/* Right column - Contact card */}
            <div className="bg-gray-50 rounded-2xl shadow-md p-8">
              <h3 className="text-3xl font-heading font-bold text-[#1e3a5f] mb-3">
                Get in Touch Today
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Call us anytime — we answer 24/7 for emergencies and same-day service.
              </p>

              <a
                href="tel:5307046989"
                className="block text-[#dc2626] text-2xl font-bold mb-6 hover:text-[#b91c1c] transition-colors duration-150"
              >
                (530) 704-6989
              </a>

              <Link
                href="/contact"
                className="block w-full bg-[#dc2626] text-white text-center font-semibold py-3 px-6 rounded-lg hover:bg-[#b91c1c] hover:-translate-y-0.5 focus-visible:bg-[#b91c1c] focus-visible:-translate-y-0.5 transition-all duration-200 mb-3"
              >
                Request Free Estimate
              </Link>

              <p className="text-gray-500 text-sm text-center">
                No hidden fees. Upfront pricing always.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHY CHOOSE US (icon cards grid) */}
      <section className="py-20 bg-[#1e3a5f]">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#dc2626]" />
              <span className="text-[#dc2626] text-xs font-bold uppercase tracking-wider">Why Topline</span>
              <div className="w-8 h-[2px] bg-[#dc2626]" />
            </div>

            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
              Why Choose Topline Plumbing?
            </h2>
          </div>

          {/* Cards grid - Centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 - Licensed & Insured */}
            <div className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:-translate-y-1 focus-within:bg-white/10 transition-all duration-200 text-center">
              <div className="w-10 h-10 bg-[#dc2626] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Licensed & Insured</h3>
              <p className="text-white/70 text-sm leading-relaxed">Fully licensed, bonded, and insured for your protection</p>
            </div>

            {/* Card 2 - Upfront Pricing */}
            <div className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:-translate-y-1 focus-within:bg-white/10 transition-all duration-200 text-center">
              <div className="w-10 h-10 bg-[#dc2626] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Upfront Pricing</h3>
              <p className="text-white/70 text-sm leading-relaxed">Know the cost before we start—no surprises</p>
            </div>

            {/* Card 3 - Same-Day Service */}
            <div className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:-translate-y-1 focus-within:bg-white/10 transition-all duration-200 text-center">
              <div className="w-10 h-10 bg-[#dc2626] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Same-Day Service</h3>
              <p className="text-white/70 text-sm leading-relaxed">Fast response for urgent plumbing needs</p>
            </div>

            {/* Card 4 - 100% Satisfaction */}
            <div className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:-translate-y-1 focus-within:bg-white/10 transition-all duration-200 text-center">
              <div className="w-10 h-10 bg-[#dc2626] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">100% Satisfaction Guarantee</h3>
              <p className="text-white/70 text-sm leading-relaxed">We're not done until you're completely satisfied</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — SOCIAL PROOF STRIP */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#dc2626]" />
              <span className="text-[#dc2626] text-xs font-bold uppercase tracking-wider">Real Reviews</span>
              <div className="w-8 h-[2px] bg-[#dc2626]" />
            </div>

            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1e3a5f]">
              What Our Customers Say
            </h2>
          </div>

          {/* Testimonials grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic text-sm leading-relaxed mb-4">
                "Joe and his team saved us when our pipe burst at 2am. They were professional, fast, and fair. Highly recommend!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1e3a5f] text-white flex items-center justify-center font-heading font-bold text-sm">
                  JM
                </div>
                <div>
                  <div className="font-semibold text-[#1e3a5f] text-sm">James M.</div>
                  <div className="text-gray-500 text-xs">Redding, CA</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic text-sm leading-relaxed mb-4">
                "Installed our new tankless water heater effortlessly. They explained everything clearly and left the garage cleaner than they found it."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1e3a5f] text-white flex items-center justify-center font-heading font-bold text-sm">
                  TP
                </div>
                <div>
                  <div className="font-semibold text-[#1e3a5f] text-sm">Tina P.</div>
                  <div className="text-gray-500 text-xs">Anderson, CA</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic text-sm leading-relaxed mb-4">
                "Honest plumbers. Came out for what I thought was a huge issue, cleared a simple clog for $130, and didn't try to upsell me at all."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1e3a5f] text-white flex items-center justify-center font-heading font-bold text-sm">
                  DR
                </div>
                <div>
                  <div className="font-semibold text-[#1e3a5f] text-sm">David R.</div>
                  <div className="text-gray-500 text-xs">Shasta Lake, CA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — BOTTOM CTA BANNER */}
      <section className="relative py-16 bg-[#dc2626] overflow-hidden">
        {/* Subtle noise texture overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
        }} />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3">
            Ready to Work With Us?
          </h2>

          <p className="text-lg text-white/80 mb-8">
            Call now or request a free estimate — we respond fast.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[#1e3a5f] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:-translate-y-0.5 focus-visible:bg-gray-100 focus-visible:-translate-y-0.5 transition-all duration-200"
            >
              Request Estimate
            </Link>

            <a
              href="tel:5307046989"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 focus-visible:bg-white/10 transition-all duration-200"
            >
              Call (530) 704-6989
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

// Stats Bar Component with count-up animation
function StatsBar() {
  const [counts, setCounts] = useState({ years: 0, heaters: 0, visible: false });
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !counts.visible) {
          setCounts({ ...counts, visible: true });

          // Animate years count
          let yearsCount = 0;
          const yearsInterval = setInterval(() => {
            yearsCount += 1;
            if (yearsCount >= 27) {
              clearInterval(yearsInterval);
            }
            setCounts(prev => ({ ...prev, years: yearsCount }));
          }, 30);

          // Animate heaters count
          let heatersCount = 0;
          const heatersInterval = setInterval(() => {
            heatersCount += 50;
            if (heatersCount >= 2847) {
              heatersCount = 2847;
              clearInterval(heatersInterval);
            }
            setCounts(prev => ({ ...prev, heaters: heatersCount }));
          }, 20);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={statsRef}
      className="py-10 bg-white border-t border-b border-gray-100"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Stat 1 */}
          <div className="text-center">
            <div className="text-4xl font-heading font-bold text-[#1e3a5f] mb-2">
              {counts.years}+
            </div>
            <div className="text-sm text-gray-500 uppercase tracking-wide font-semibold">
              Years Experience
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block border-l border-gray-200" />

          {/* Stat 2 */}
          <div className="text-center md:border-r md:border-gray-200">
            <div className="text-4xl font-heading font-bold text-[#1e3a5f] mb-2">
              {counts.heaters.toLocaleString()}
            </div>
            <div className="text-sm text-gray-500 uppercase tracking-wide font-semibold">
              Water Heaters Installed
            </div>
          </div>

          {/* Stat 3 */}
          <div className="text-center">
            <div className="text-4xl font-heading font-bold text-[#dc2626] mb-2">
              24/7
            </div>
            <div className="text-sm text-gray-500 uppercase tracking-wide font-semibold">
              Emergency Service
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
