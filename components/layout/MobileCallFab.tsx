'use client';

import React, { useEffect, useState } from 'react';

/**
 * Floating Click-to-Call FAB
 * — Fixed bottom-right on mobile viewports only
 * — Hidden once the user has scrolled far enough that a CTA is on-screen
 */
export default function MobileCallFab() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show after 300px of scroll so hero CTA isn't duplicated
      setIsVisible(window.scrollY > 300);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="tel:5307046989"
      aria-label="Call Topline Plumbing at (530) 704-6989"
      className={`
        md:hidden fixed bottom-5 right-5 z-50
        inline-flex items-center gap-2.5 px-5 h-14
        rounded-full bg-primary text-white font-semibold text-[15px]
        shadow-[0_10px_30px_-5px_rgba(221,21,21,0.55)]
        ring-4 ring-white/10
        hover:bg-primary-dark active:scale-[0.97]
        transition-all duration-300
        ${isVisible ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-24 opacity-0 pointer-events-none'}
      `}
    >
      <span className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white/15">
        {/* pulse dot */}
        <span className="absolute inset-0 rounded-full bg-white/25 animate-ping" aria-hidden />
        <svg className="relative w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
        </svg>
      </span>
      (530) 704-6989
    </a>
  );
}
