'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MobileDrawer from './MobileDrawer';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <header className="sticky top-0 z-50 shadow-sm">
        {/* Tier 1 — Utility Bar (thin dark navy) */}
        <div className="bg-navy-900 text-white/90 hidden md:block">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between h-9 text-[13px]">
              <div className="flex items-center gap-2 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse-slow" aria-hidden />
                <span>Mon&ndash;Fri 8a&ndash;4:30p</span>
                <span className="mx-2 text-white/30">•</span>
                <span className="text-white/70">Licensed &amp; Insured in California</span>
              </div>
              <div className="flex items-center gap-5">
                <a
                  href="mailto:Toplineplumbingredding@gmail.com"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Toplineplumbingredding@gmail.com
                </a>
                <a
                  href="tel:5307046989"
                  className="flex items-center gap-1.5 font-semibold text-white hover:text-primary-light transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                  </svg>
                  (530) 704-6989
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Tier 2 — Primary Nav (white background) */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <Link
                href="/"
                className="flex-shrink-0 flex items-center gap-3 transition-opacity duration-200 hover:opacity-90"
                aria-label="Topline Plumbing — home"
              >
                <Image
                  src="/images/logo.png"
                  alt="Topline Plumbing"
                  width={200}
                  height={200}
                  priority
                  className="h-14 w-14"
                />
                <span className="hidden sm:flex flex-col leading-none">
                  <span className="text-[17px] font-bold text-navy-900 tracking-tight">Topline Plumbing</span>
                  <span className="text-[11px] text-gray-500 mt-1 font-medium">Redding&apos;s trusted plumber since 1998</span>
                </span>
              </Link>

              {/* Desktop Navigation - centered */}
              <nav className="hidden lg:flex items-center gap-8">
                {/* Services Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setOpenDropdown('services')}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className="text-navy-900 text-[15px] font-medium flex items-center gap-1 h-11 whitespace-nowrap relative group"
                  >
                    Services
                    <svg className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-navy-900 group-hover:w-full transition-[width] duration-[180ms] ease-snappy" />
                  </button>
                  {openDropdown === 'services' && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
                      <div className="w-60 bg-white rounded-lg shadow-xl border border-gray-100 py-2 origin-top animate-[fadeInScale_150ms_cubic-bezier(0.23,1,0.32,1)_forwards]">
                        {[
                          ['Emergency Plumbing', '/services/emergency'],
                          ['Water Heaters', '/services/water-heater-repair'],
                          ['Drain Cleaning', '/services/drain-cleaning'],
                          ['Tankless Upgrades', '/services/tankless'],
                          ['Sewer Line Repair', '/services/sewer-line'],
                          ['Gas Line Services', '/services/gas-line'],
                          ['Leak Detection', '/services/leak-detection'],
                        ].map(([label, href]) => (
                          <Link
                            key={href}
                            href={href}
                            className="block px-4 py-2.5 text-[14px] text-gray-700 hover:bg-gray-50 hover:text-navy-900 border-l-2 border-transparent hover:border-primary transition-all duration-150"
                          >
                            {label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Service Areas Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setOpenDropdown('areas')}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className="text-navy-900 text-[15px] font-medium flex items-center gap-1 h-11 whitespace-nowrap relative group"
                  >
                    Service Areas
                    <svg className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-navy-900 group-hover:w-full transition-[width] duration-[180ms] ease-snappy" />
                  </button>
                  {openDropdown === 'areas' && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
                      <div className="w-60 bg-white rounded-lg shadow-xl border border-gray-100 py-2 origin-top animate-[fadeInScale_150ms_cubic-bezier(0.23,1,0.32,1)_forwards]">
                        {[
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
                        ].map(([label, href]) => (
                          <Link
                            key={href}
                            href={href}
                            className="block px-4 py-2.5 text-[14px] text-gray-700 hover:bg-gray-50 hover:text-navy-900 border-l-2 border-transparent hover:border-primary transition-all duration-150"
                          >
                            {label}
                          </Link>
                        ))}
                        <Link
                          href="/areas"
                          className="block px-4 py-2.5 text-[14px] text-primary font-semibold hover:bg-gray-50 border-l-2 border-transparent hover:border-primary transition-all duration-150"
                        >
                          View All Areas &rarr;
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                {[
                  ['Pricing', '/cost'],
                  ['FAQ', '/faq'],
                  ['Resources', '/resources'],
                  ['About', '/about'],
                  ['Contact', '/contact'],
                ].map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className="relative text-navy-900 text-[15px] font-medium h-11 flex items-center whitespace-nowrap group"
                  >
                    {label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-navy-900 group-hover:w-full transition-[width] duration-[180ms] ease-snappy" />
                  </Link>
                ))}
              </nav>

              {/* Desktop CTA */}
              <div className="hidden lg:flex items-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-6 h-11 rounded-full bg-accent-orange text-white text-[14px] font-semibold shadow-[0_4px_14px_-2px_rgba(249,115,22,0.4)] hover:bg-orange-500 hover:scale-[1.04] hover:shadow-[0_8px_24px_-4px_rgba(249,115,22,0.55)] active:scale-[1.01] focus-visible:scale-[1.04] transition-all duration-200 ease-out"
                >
                  Get a free estimate
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    aria-hidden
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Mobile — phone CTA + menu button */}
              <div className="lg:hidden flex items-center gap-2">
                <a
                  href="tel:5307046989"
                  aria-label="Call (530) 704-6989"
                  className="flex items-center justify-center w-11 h-11 rounded-full bg-accent-orange text-white shadow-sm hover:shadow-md transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                  </svg>
                </a>
                <button
                  className="text-navy-900 p-3 rounded-lg hover:bg-gray-100 transition-colors"
                  onClick={toggleMobileMenu}
                  aria-label="Menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <MobileDrawer isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
    </>
  );
}
