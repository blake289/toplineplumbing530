import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-gray-100 section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Service Areas Section - SEO */}
        <div className="mb-12 -mx-6 md:-mx-12 lg:-mx-20 px-6 md:px-12 lg:px-20 py-12 bg-white">
          <div className="text-center mb-8">
            <h3 className="text-navy-900 text-2xl font-bold mb-3">Professional Plumbing Services Throughout Northern California</h3>
            <p className="text-gray-700 text-base max-w-4xl mx-auto">
              Licensed plumbers serving the entire 530 area code with emergency plumbing, drain cleaning, water heater service, and all residential & commercial plumbing needs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-sm md:text-base">
            <Link href="/areas/chico" className="text-center py-3 px-4 rounded-xl border-2 border-primary text-navy-900 hover:bg-primary hover:text-white hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 ease-[cubic-bezier(0.25,0.8,0.25,1)] touch-target">
              Plumber Chico
            </Link>
            <Link href="/areas/redding" className="text-center py-3 px-4 rounded-xl border-2 border-primary text-navy-900 hover:bg-primary hover:text-white hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 ease-[cubic-bezier(0.25,0.8,0.25,1)] touch-target">
              Plumber Redding
            </Link>
            <Link href="/areas/yuba-city" className="text-center py-3 px-4 rounded-xl border-2 border-primary text-navy-900 hover:bg-primary hover:text-white hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 ease-[cubic-bezier(0.25,0.8,0.25,1)] touch-target">
              Plumber Yuba City
            </Link>
            <Link href="/areas/marysville" className="text-center py-3 px-4 rounded-xl border-2 border-primary text-navy-900 hover:bg-primary hover:text-white hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 ease-[cubic-bezier(0.25,0.8,0.25,1)] touch-target">
              Plumber Marysville
            </Link>
            <Link href="/areas/paradise" className="text-center py-3 px-4 rounded-xl border-2 border-primary text-navy-900 hover:bg-primary hover:text-white hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 ease-[cubic-bezier(0.25,0.8,0.25,1)] touch-target">
              Plumber Paradise
            </Link>
            <Link href="/areas/oroville" className="text-center py-3 px-4 rounded-xl border-2 border-primary text-navy-900 hover:bg-primary hover:text-white hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 ease-[cubic-bezier(0.25,0.8,0.25,1)] touch-target">
              Plumber Oroville
            </Link>
            <Link href="/areas/red-bluff" className="text-center py-3 px-4 rounded-xl border-2 border-primary text-navy-900 hover:bg-primary hover:text-white hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 ease-[cubic-bezier(0.25,0.8,0.25,1)] touch-target">
              Plumber Red Bluff
            </Link>
            <Link href="/areas/anderson" className="text-center py-3 px-4 rounded-xl border-2 border-primary text-navy-900 hover:bg-primary hover:text-white hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 ease-[cubic-bezier(0.25,0.8,0.25,1)] touch-target">
              Plumber Anderson
            </Link>
            <Link href="/areas/south-lake-tahoe" className="text-center py-3 px-4 rounded-xl border-2 border-primary text-navy-900 hover:bg-primary hover:text-white hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 ease-[cubic-bezier(0.25,0.8,0.25,1)] touch-target">
              Plumber South Lake Tahoe
            </Link>
            <Link href="/areas/truckee" className="text-center py-3 px-4 rounded-xl border-2 border-primary text-navy-900 hover:bg-primary hover:text-white hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 ease-[cubic-bezier(0.25,0.8,0.25,1)] touch-target">
              Plumber Truckee
            </Link>
            <Link href="/areas/grass-valley" className="text-center py-3 px-4 rounded-xl border-2 border-primary text-navy-900 hover:bg-primary hover:text-white hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 ease-[cubic-bezier(0.25,0.8,0.25,1)] touch-target">
              Plumber Grass Valley
            </Link>
            <Link href="/areas/auburn" className="text-center py-3 px-4 rounded-xl border-2 border-primary text-navy-900 hover:bg-primary hover:text-white hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 ease-[cubic-bezier(0.25,0.8,0.25,1)] touch-target">
              Plumber Auburn
            </Link>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-t border-gray-700 pt-12">
          {/* Column 1: Company Info */}
          <div>
            <Image
              src="/images/logo.webp"
              alt="Topline Plumbing"
              width={200}
              height={80}
              className="mb-4"
            />
            <p className="text-gray-300 mb-6 text-sm">
              Auburn & Grass Valley's most trusted plumber since 1998.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61551944100731"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-[#1877F2] to-[#0D5DBF] hover:shadow-lg hover:-translate-y-1 transition-all duration-base shadow-md"
              >
                <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/toplinewatersolutions/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-[#E4405F] via-[#C13584] to-[#833AB4] hover:shadow-lg hover:-translate-y-1 transition-all duration-base shadow-md"
              >
                <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-white text-base font-semibold mb-5">Services</h4>
            <nav className="flex flex-col gap-3">
              <Link
                href="/services/water-heater-repair"
                className="text-gray-300 hover:text-primary font-medium transition-all duration-base text-base"
              >
                Water Heater Repair
              </Link>
              <Link
                href="/services/tankless"
                className="text-gray-300 hover:text-primary font-medium transition-all duration-base text-base"
              >
                Tankless Installation
              </Link>
              <Link
                href="/services/emergency"
                className="text-gray-300 hover:text-primary font-medium transition-all duration-base text-base"
              >
                Emergency Plumbing
              </Link>
              <Link
                href="/services/drain-cleaning"
                className="text-gray-300 hover:text-primary font-medium transition-all duration-base text-base"
              >
                Drain Cleaning
              </Link>
            </nav>
          </div>

          {/* Column 3: Service Areas */}
          <div>
            <h4 className="text-white text-base font-semibold mb-5">Service Areas</h4>
            <nav className="flex flex-col gap-3">
              <Link
                href="/areas/shasta-lake"
                className="text-gray-300 hover:text-primary font-medium transition-all duration-base text-base"
              >
                Shasta Lake, CA
              </Link>
              <Link
                href="/areas/anderson"
                className="text-gray-300 hover:text-primary font-medium transition-all duration-base text-base"
              >
                Anderson, CA
              </Link>
              <Link
                href="/areas/palo-cedro"
                className="text-gray-300 hover:text-primary font-medium transition-all duration-base text-base"
              >
                Palo Cedro, CA
              </Link>
              <Link
                href="/areas/bella-vista"
                className="text-gray-300 hover:text-primary font-medium transition-all duration-base text-base"
              >
                Bella Vista, CA
              </Link>
            </nav>
          </div>

          {/* Column 4: Contact */}
          <div className="lg:col-span-1">
            <h4 className="text-white text-base font-semibold mb-5">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:5307689446"
                className="text-white text-lg font-semibold hover:text-gray-200 transition-colors duration-base flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (530) 768-9446
              </a>
              <a
                href="mailto:Toplineplumbingredding@gmail.com"
                className="text-gray-200 hover:text-white hover:translate-x-1 transition-all duration-base text-base whitespace-nowrap"
              >
                Toplineplumbingredding@gmail.com
              </a>
              <p className="text-gray-300 text-base">
                Serving Redding & surrounding areas
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-600 pt-6 mt-12 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white">
          <p>&copy; Copyright 2026. Topline Plumbing. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-primary font-medium transition-colors duration-fast">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-primary font-medium transition-colors duration-fast">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
