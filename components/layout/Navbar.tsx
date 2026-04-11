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
      <header className="sticky top-0 bg-navy-900 shadow-md border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 hover:opacity-85 hover:scale-[1.02] transition-all duration-200">
              <Image
                src="/images/logo.png"
                alt="Topline Plumbing"
                width={200}
                height={200}
                priority
                className="h-[84px] w-[84px]"
              />
            </Link>

            {/* Desktop Navigation - compact spacing */}
            <nav className="hidden lg:flex items-center gap-3 xl:gap-5">
              {/* Services Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setOpenDropdown('services')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className="text-white text-sm xl:text-base font-medium hover:text-primary transition-colors duration-200 flex items-center gap-1 h-11 whitespace-nowrap relative group"
                >
                  Services
                  <svg className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-200"></span>
                </button>
                {openDropdown === 'services' && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="w-56 bg-white rounded-md shadow-xl py-2">
                      <Link href="/services/emergency" className="block px-4 py-2.5 text-sm text-gray-900 hover:bg-red-50 hover:text-primary hover:border-l-[3px] hover:border-l-primary hover:pl-[13px] transition-all duration-150">
                        Emergency Plumbing
                      </Link>
                      <Link href="/services/water-heater-repair" className="block px-4 py-2.5 text-sm text-gray-900 hover:bg-red-50 hover:text-primary hover:border-l-[3px] hover:border-l-primary hover:pl-[13px] transition-all duration-150">
                        Water Heaters
                      </Link>
                      <Link href="/services/drain-cleaning" className="block px-4 py-2.5 text-sm text-gray-900 hover:bg-red-50 hover:text-primary hover:border-l-[3px] hover:border-l-primary hover:pl-[13px] transition-all duration-150">
                        Drain Cleaning
                      </Link>
                      <Link href="/services/tankless" className="block px-4 py-2.5 text-sm text-gray-900 hover:bg-red-50 hover:text-primary hover:border-l-[3px] hover:border-l-primary hover:pl-[13px] transition-all duration-150">
                        Tankless Upgrades
                      </Link>
                      <Link href="/services/sewer-line" className="block px-4 py-2.5 text-sm text-gray-900 hover:bg-red-50 hover:text-primary hover:border-l-[3px] hover:border-l-primary hover:pl-[13px] transition-all duration-150">
                        Sewer Line Repair
                      </Link>
                      <Link href="/services/gas-line" className="block px-4 py-2.5 text-sm text-gray-900 hover:bg-red-50 hover:text-primary hover:border-l-[3px] hover:border-l-primary hover:pl-[13px] transition-all duration-150">
                        Gas Line Services
                      </Link>
                      <Link href="/services/leak-detection" className="block px-4 py-2.5 text-sm text-gray-900 hover:bg-red-50 hover:text-primary hover:border-l-[3px] hover:border-l-primary hover:pl-[13px] transition-all duration-150">
                        Leak Detection
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Service Areas Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setOpenDropdown('areas')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className="text-white text-sm xl:text-base font-medium hover:text-primary transition-colors duration-200 flex items-center gap-1 h-11 whitespace-nowrap relative group"
                >
                  Service Areas
                  <svg className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-200"></span>
                </button>
                {openDropdown === 'areas' && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="w-56 bg-white rounded-md shadow-xl py-2">
                      <Link href="/areas/chico" className="block px-4 py-2.5 text-sm text-gray-900 hover:bg-red-50 hover:text-primary hover:border-l-[3px] hover:border-l-primary hover:pl-[13px] transition-all duration-150">Chico</Link>
                      <Link href="/areas/redding" className="block px-4 py-2.5 text-sm text-gray-900 hover:bg-red-50 hover:text-primary hover:border-l-[3px] hover:border-l-primary hover:pl-[13px] transition-all duration-150">Redding</Link>
                      <Link href="/areas/yuba-city" className="block px-4 py-2.5 text-sm text-gray-900 hover:bg-red-50 hover:text-primary hover:border-l-[3px] hover:border-l-primary hover:pl-[13px] transition-all duration-150">Yuba City</Link>
                      <Link href="/areas/marysville" className="block px-4 py-2.5 text-sm text-gray-900 hover:bg-red-50 hover:text-primary hover:border-l-[3px] hover:border-l-primary hover:pl-[13px] transition-all duration-150">Marysville</Link>
                      <Link href="/areas/paradise" className="block px-4 py-2.5 text-sm text-gray-900 hover:bg-red-50 hover:text-primary hover:border-l-[3px] hover:border-l-primary hover:pl-[13px] transition-all duration-150">Paradise</Link>
                      <Link href="/areas/oroville" className="block px-4 py-2.5 text-sm text-gray-900 hover:bg-red-50 hover:text-primary hover:border-l-[3px] hover:border-l-primary hover:pl-[13px] transition-all duration-150">Oroville</Link>
                      <Link href="/areas/red-bluff" className="block px-4 py-2.5 text-sm text-gray-900 hover:bg-red-50 hover:text-primary hover:border-l-[3px] hover:border-l-primary hover:pl-[13px] transition-all duration-150">Red Bluff</Link>
                      <Link href="/areas/anderson" className="block px-4 py-2.5 text-sm text-gray-900 hover:bg-red-50 hover:text-primary hover:border-l-[3px] hover:border-l-primary hover:pl-[13px] transition-all duration-150">Anderson</Link>
                      <Link href="/areas/south-lake-tahoe" className="block px-4 py-2.5 text-sm text-gray-900 hover:bg-red-50 hover:text-primary hover:border-l-[3px] hover:border-l-primary hover:pl-[13px] transition-all duration-150">South Lake Tahoe</Link>
                      <Link href="/areas/truckee" className="block px-4 py-2.5 text-sm text-gray-900 hover:bg-red-50 hover:text-primary hover:border-l-[3px] hover:border-l-primary hover:pl-[13px] transition-all duration-150">Truckee</Link>
                      <Link href="/areas/grass-valley" className="block px-4 py-2.5 text-sm text-gray-900 hover:bg-red-50 hover:text-primary hover:border-l-[3px] hover:border-l-primary hover:pl-[13px] transition-all duration-150">Grass Valley</Link>
                      <Link href="/areas/auburn" className="block px-4 py-2.5 text-sm text-gray-900 hover:bg-red-50 hover:text-primary hover:border-l-[3px] hover:border-l-primary hover:pl-[13px] transition-all duration-150">Auburn</Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/about" className="text-white text-sm xl:text-base font-medium hover:text-primary focus-visible:text-primary transition-colors duration-200 whitespace-nowrap relative group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-200"></span>
              </Link>
              <Link href="/gallery" className="text-white text-sm xl:text-base font-medium hover:text-primary focus-visible:text-primary transition-colors duration-200 whitespace-nowrap relative group">
                Gallery
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-200"></span>
              </Link>
              <Link href="/contact" className="text-white text-sm xl:text-base font-medium hover:text-primary focus-visible:text-primary transition-colors duration-200 whitespace-nowrap relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-200"></span>
              </Link>
            </nav>

            {/* Desktop CTA Section - ultra compact */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3">
              {/* 24/7 Badge */}
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white/10 backdrop-blur-sm rounded-full whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse-slow"></span>
                <span className="text-white text-sm xl:text-base font-medium">24/7 Support</span>
              </div>

              {/* Phone CTA */}
              <a
                href="tel:5307046989"
                className="px-3 xl:px-4 py-2 text-sm xl:text-base bg-primary text-white font-semibold min-h-[44px] rounded-xl inline-flex items-center gap-1.5 hover:bg-primary-dark hover:shadow-lg hover:-translate-y-1 active:translate-y-0 focus-visible:bg-primary-dark focus-visible:-translate-y-1 transition-all duration-300 whitespace-nowrap shadow-md"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                (530) 704-6989
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-3 hover:bg-navy-700 rounded transition-colors touch-target"
              onClick={toggleMobileMenu}
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileDrawer isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
    </>
  );
}
