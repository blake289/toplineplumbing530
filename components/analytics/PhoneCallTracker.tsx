'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const fired = new WeakSet<HTMLAnchorElement>();

export default function PhoneCallTracker() {
  useEffect(() => {
    const trackTelLink = (link: HTMLAnchorElement) => {
      if (fired.has(link)) return;
      fired.add(link);
      setTimeout(() => fired.delete(link), 1500);

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
        transport_type: 'beacon',
      };

      if (typeof window.gtag === 'function') {
        window.gtag('event', 'phone_call', payload);
      } else if (Array.isArray(window.dataLayer)) {
        window.dataLayer.push({ event: 'phone_call', ...payload });
      }
    };

    const findTelLink = (e: Event): HTMLAnchorElement | null => {
      const target = e.target as HTMLElement | null;
      return (target?.closest('a[href^="tel:"]') as HTMLAnchorElement) || null;
    };

    const onPointerDown = (e: PointerEvent) => {
      const link = findTelLink(e);
      if (link) trackTelLink(link);
    };
    const onClick = (e: MouseEvent) => {
      const link = findTelLink(e);
      if (link) trackTelLink(link);
    };

    document.addEventListener('pointerdown', onPointerDown, { capture: true });
    document.addEventListener('click', onClick, { capture: true });
    return () => {
      document.removeEventListener('pointerdown', onPointerDown, { capture: true } as EventListenerOptions);
      document.removeEventListener('click', onClick, { capture: true } as EventListenerOptions);
    };
  }, []);

  return null;
}
