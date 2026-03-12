'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import StatusDot from '../ui/StatusDot';
import Button from '../ui/Button';
import MobileDrawer from './MobileDrawer';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleDropdownToggle = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleMouseEnter = (dropdown: string) => {
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <>
      <header className="navbar sticky top-0 bg-navy-900 shadow-md border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 mr-auto">
              <Image
                src="/images/logo.webp"
                alt="Topline Plumbing"
                width={150}
                height={60}
                priority
                className="h-15 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
              {/* Services Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="text-white font-medium hover:text-gray-200 transition-colors duration-fast flex items-center gap-1 h-11"
                  onClick={() => handleDropdownToggle('services')}
                  aria-expanded={openDropdown === 'services'}
                  aria-haspopup="true"
                >
                  Services
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'services' && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="w-56 bg-white rounded-md shadow-lg py-2">
                      <Link href="/services/emergency" className="block px-4 py-3 text-gray-900 hover:bg-gray-100 transition-colors">
                        Emergency Plumbing
                      </Link>
                      <Link href="/services/water-heater-repair" className="block px-4 py-3 text-gray-900 hover:bg-gray-100 transition-colors">
                        Water Heaters
                      </Link>
                      <Link href="/services/drain-cleaning" className="block px-4 py-3 text-gray-900 hover:bg-gray-100 transition-colors">
                        Drain Cleaning
                      </Link>
                      <Link href="/services/tankless" className="block px-4 py-3 text-gray-900 hover:bg-gray-100 transition-colors">
                        Tankless Upgrades
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Service Areas Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => handleMouseEnter('areas')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="text-white font-medium hover:text-gray-200 transition-colors duration-fast flex items-center gap-1 h-11 whitespace-nowrap"
                  onClick={() => handleDropdownToggle('areas')}
                  aria-expanded={openDropdown === 'areas'}
                  aria-haspopup="true"
                >
                  Service Areas
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'areas' && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="w-56 bg-white rounded-md shadow-xl py-2">
                      <Link href="/areas/chico" className="block px-4 py-3 text-gray-900 hover:bg-gray-100 transition-colors">Chico</Link>
                      <Link href="/areas/redding" className="block px-4 py-3 text-gray-900 hover:bg-gray-100 transition-colors">Redding</Link>
                      <Link href="/areas/yuba-city" className="block px-4 py-3 text-gray-900 hover:bg-gray-100 transition-colors">Yuba City</Link>
                      <Link href="/areas/marysville" className="block px-4 py-3 text-gray-900 hover:bg-gray-100 transition-colors">Marysville</Link>
                      <Link href="/areas/paradise" className="block px-4 py-3 text-gray-900 hover:bg-gray-100 transition-colors">Paradise</Link>
                      <Link href="/areas/oroville" className="block px-4 py-3 text-gray-900 hover:bg-gray-100 transition-colors">Oroville</Link>
                      <Link href="/areas/red-bluff" className="block px-4 py-3 text-gray-900 hover:bg-gray-100 transition-colors">Red Bluff</Link>
                      <Link href="/areas/anderson" className="block px-4 py-3 text-gray-900 hover:bg-gray-100 transition-colors">Anderson</Link>
                      <Link href="/areas/south-lake-tahoe" className="block px-4 py-3 text-gray-900 hover:bg-gray-100 transition-colors">South Lake Tahoe</Link>
                      <Link href="/areas/truckee" className="block px-4 py-3 text-gray-900 hover:bg-gray-100 transition-colors">Truckee</Link>
                      <Link href="/areas/grass-valley" className="block px-4 py-3 text-gray-900 hover:bg-gray-100 transition-colors">Grass Valley</Link>
                      <Link href="/areas/auburn" className="block px-4 py-3 text-gray-900 hover:bg-gray-100 transition-colors">Auburn</Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/about" className="text-white font-medium hover:text-gray-200 transition-colors duration-fast h-11 flex items-center cursor-pointer">
                About
              </Link>
              <Link href="/contact" className="text-white font-medium hover:text-gray-200 transition-colors duration-fast h-11 flex items-center cursor-pointer">
                Contact Us
              </Link>
            </nav>

            {/* Desktop CTA Section */}
            <div className="hidden lg:flex items-center gap-3 ml-4 xl:ml-8">
              <StatusDot />
              <a
                href="tel:5307689446"
                className="px-4 py-2.5 text-sm bg-primary text-white font-semibold rounded-full inline-flex items-center justify-center gap-2 hover:bg-red-700 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                (530) 768-9446
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white text-2xl p-2 hover:bg-navy-700 rounded transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Open Menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
    </>
  );
}
