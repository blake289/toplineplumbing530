import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const serviceAreas: Array<[string, string]> = [
  ['Redding', '/areas/redding'],
  ['Anderson', '/areas/anderson'],
  ['Chico', '/areas/chico'],
  ['Paradise', '/areas/paradise'],
  ['Oroville', '/areas/oroville'],
  ['Red Bluff', '/areas/red-bluff'],
  ['Yuba City', '/areas/yuba-city'],
  ['Marysville', '/areas/marysville'],
  ['South Lake Tahoe', '/areas/south-lake-tahoe'],
  ['Truckee', '/areas/truckee'],
  ['Grass Valley', '/areas/grass-valley'],
  ['Auburn', '/areas/auburn'],
  ['Shasta Lake', '/areas/shasta-lake'],
  ['Palo Cedro', '/areas/palo-cedro'],
  ['Bella Vista', '/areas/bella-vista'],
];

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-20 pb-8">
        {/* Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-white/10">
          {/* Column 1: Company */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/images/logo.png"
                alt="Topline Plumbing"
                width={200}
                height={200}
                className="w-14 h-14 rounded-full"
              />
              <div className="flex flex-col leading-none">
                <span className="text-white text-lg font-bold tracking-tight">Topline Plumbing</span>
                <span className="text-gray-400 text-[12px] mt-1">Since 1998</span>
              </div>
            </div>
            <p className="text-gray-400 text-[15px] leading-relaxed max-w-xs mb-6">
              Redding&apos;s most trusted plumber. Same-day service, upfront pricing, and 27+ years of local experience.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61551944100731"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/toplineplumbing/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="md:col-span-2">
            <h4 className="text-white text-[13px] font-semibold tracking-[0.08em] uppercase mb-5">Services</h4>
            <nav className="flex flex-col gap-3 text-[15px]">
              <Link href="/services/emergency" className="text-gray-400 hover:text-white transition-colors">Emergency Plumbing</Link>
              <Link href="/services/water-heater-repair" className="text-gray-400 hover:text-white transition-colors">Water Heater Repair</Link>
              <Link href="/services/tankless" className="text-gray-400 hover:text-white transition-colors">Tankless Installation</Link>
              <Link href="/services/drain-cleaning" className="text-gray-400 hover:text-white transition-colors">Drain Cleaning</Link>
              <Link href="/cost" className="text-gray-400 hover:text-white transition-colors">Pricing &amp; Cost</Link>
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div className="md:col-span-3">
            <h4 className="text-white text-[13px] font-semibold tracking-[0.08em] uppercase mb-5">Contact</h4>
            <div className="flex flex-col gap-3 text-[15px]">
              <a href="tel:5307046989" className="text-white text-lg font-bold hover:text-primary-light transition-colors inline-flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                (530) 704-6989
              </a>
              <a href="mailto:Toplineplumbingredding@gmail.com" className="text-gray-400 hover:text-white transition-colors break-all">
                Toplineplumbingredding@gmail.com
              </a>
              <p className="text-gray-400">Serving Redding &amp; Northern California</p>
              <p className="text-gray-400 text-[13px] mt-1 font-medium tracking-wide">
                CA CSLB License # [INSERT NUMBER HERE]
              </p>
            </div>
          </div>

          {/* Column 4: Service Areas as pills */}
          <div className="md:col-span-3">
            <h4 className="text-white text-[13px] font-semibold tracking-[0.08em] uppercase mb-5">Service Areas</h4>
            <div className="flex flex-wrap gap-1.5">
              {serviceAreas.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="inline-flex items-center px-2.5 py-1 rounded-full text-[12px] text-gray-400 bg-white/[0.04] border border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20 transition-[background-color,color,border-color] duration-[160ms] ease-snappy"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 mt-2 flex flex-col md:flex-row items-center justify-between gap-4 text-[15px]">
          <p className="text-white font-semibold tracking-tight">
            &copy; {new Date().getFullYear()} Topline Plumbing. All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-400">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
