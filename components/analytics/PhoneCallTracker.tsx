'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export default function PhoneCallTracker() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const link = target?.closest('a[href^="tel:"]') as HTMLAnchorElement | null;
      if (!link) return;

      const href = link.getAttribute('href') || '';
      const phone = href.replace(/^tel:/, '').replace(/[^\d+]/g, '');
      const sourceSection =
        link.getAttribute('data-call-source') ||
        link.closest('[data-call-source]')?.getAttribute('data-call-source') ||
        link.closest('section')?.getAttribute('id') ||
        link.closest('header, footer, nav')?.tagName.toLowerCase() ||
        'body';

      const payload = {
        phone_number: phone,
        page_path: window.location.pathname,
        page_location: window.location.href,
        source_section: sourceSection,
        link_text: (link.textContent || '').trim().slice(0, 80),
      };

      if (typeof window.gtag === 'function') {
        window.gtag('event', 'phone_call', payload);
      } else if (Array.isArray(window.dataLayer)) {
        window.dataLayer.push({ event: 'phone_call', ...payload });
      }
    };

    document.addEventListener('click', handler, { capture: true });
    return () => document.removeEventListener('click', handler, { capture: true } as EventListenerOptions);
  }, []);

  return null;
}
