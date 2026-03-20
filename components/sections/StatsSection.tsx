'use client';

import React, { useEffect, useRef, useState } from 'react';

interface StatProps {
  target: number;
  label: string;
  highlight?: boolean;
  suffix?: string;
}

function StatCard({ target, label, highlight = false, suffix = '' }: StatProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible || target === 0) return;

    const duration = 2000; // 2 seconds
    const fps = 60;
    const totalFrames = Math.round((duration / 1000) * fps);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const current = Math.round(target * progress);

      if (frame >= totalFrames) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 1000 / fps);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div
      ref={ref}
      className="bg-white p-8 rounded-2xl border border-gray-100 text-center shadow-sm"
    >
      <div
        className={`text-5xl md:text-6xl font-heading font-extrabold leading-none mb-2 ${
          highlight ? 'text-primary' : 'text-navy-900'
        }`}
      >
        {count}{suffix}
      </div>
      <div className="text-sm md:text-base font-semibold text-gray-600 uppercase tracking-wide">
        {label}
      </div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="section-padding bg-background-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Trust Text */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-heading font-bold uppercase text-gray-900 mb-6 leading-tight">
              Why Topline Should Be Your First Call
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-prose">
              When an emergency strikes, you don't have time to gamble on an unproven plumber. We built Topline Plumbing on
              a foundation of trust, upfront pricing, and technical excellence.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    Upfront, Transparent Pricing
                  </h4>
                  <p className="text-gray-600 text-base max-w-prose">
                    No hidden fees or surprises at the end of the job.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    Local & Dedicated
                  </h4>
                  <p className="text-gray-600 text-base max-w-prose">
                    We treat every home with the respect we give our own.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    100% Guaranteed Work
                  </h4>
                  <p className="text-gray-600 text-base max-w-prose">
                    Our job isn't done until you're completely satisfied.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            <StatCard target={30} label="Years Exp." />
            <StatCard target={2487} label="Water Heaters" />
            <div className="col-span-2">
              <StatCard target={5} label="Min. Avg. Response Time" highlight suffix="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
