'use client';

import React, { useEffect, useRef, useState } from 'react';
import Reveal from '@/components/ui/Reveal';

interface StatProps {
  target: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

function StatCard({ target, label, suffix = '', prefix = '' }: StatProps) {
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
      { threshold: 0.2 }
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

    const duration = 1800;
    const fps = 60;
    const totalFrames = Math.round((duration / 1000) * fps);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      const current = Math.round(target * eased);

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
      className="text-center md:text-left flex flex-col gap-3"
    >
      <div className="text-[56px] md:text-[64px] lg:text-[72px] font-bold leading-none text-white tracking-[-0.035em] tabular-nums">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-[12px] md:text-[13px] font-semibold tracking-[0.18em] text-white/60 uppercase">
        {label}
      </div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="relative bg-[#0B1F38] overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      {/* Accent glow */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Optional eyebrow label */}
        <Reveal>
        <div className="text-center mb-12 lg:mb-14">
          <div className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.12em] text-primary-light mb-3">
            <span className="w-8 h-px bg-primary-light" aria-hidden />
            TRUSTED BY REDDING SINCE 1998
            <span className="w-8 h-px bg-primary-light" aria-hidden />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-[-0.02em] leading-[1.1] max-w-3xl mx-auto">
            Numbers that say more than any marketing slogan.
          </h2>
        </div>
        </Reveal>

        {/* Stats row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 items-center md:divide-x md:divide-white/10">
          <div className="md:pl-0 md:pr-6">
            <StatCard target={27} label="Years of experience" suffix="+" />
          </div>
          <div className="md:px-6 md:text-center">
            <StatCard target={3000} label="Jobs completed" suffix="+" />
          </div>
          <div className="md:pl-6 md:pr-0 md:text-right">
            {/* Static hours display — non-animated for clarity */}
            <div className="text-center md:text-right flex flex-col gap-3">
              <div className="text-[44px] md:text-[52px] lg:text-[58px] font-bold leading-none text-white tracking-[-0.035em] tabular-nums">
                Mon&ndash;Fri
              </div>
              <div className="text-[12px] md:text-[13px] font-semibold tracking-[0.18em] text-white/60 uppercase">
                8:00a &ndash; 4:30p
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
