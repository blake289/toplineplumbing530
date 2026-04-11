'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const [areasExpanded, setAreasExpanded] = useState(false);

  // Close drawer on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when drawer is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-base lg:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-lg z-50 overflow-y-auto transition-transform duration-base lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-900 text-2xl p-2 hover:bg-gray-100 rounded transition-colors"
          onClick={onClose}
          aria-label="Close Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav className="mt-16 px-6 pb-6 flex flex-col gap-1">
          {/* Services Dropdown */}
          <div>
            <button
              className="w-full text-left py-3 text-gray-900 font-medium flex items-center justify-between hover:bg-gray-50 px-2 rounded transition-colors"
              onClick={() => setServicesExpanded(!servicesExpanded)}
              aria-expanded={servicesExpanded}
            >
              Services
              <svg
                className={`w-5 h-5 transition-transform ${servicesExpanded ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesExpanded && (
              <div className="pl-4 border-l-2 border-gray-100 ml-2 mb-2">
                <Link
                  href="/services/emergency"
                  className="block py-3.5 px-2 text-gray-700 hover:bg-gray-50 rounded transition-colors"
                  onClick={onClose}
                >
                  Emergency Plumbing
                </Link>
                <Link
                  href="/services/water-heater-repair"
                  className="block py-3.5 px-2 text-gray-700 hover:bg-gray-50 rounded transition-colors"
                  onClick={onClose}
                >
                  Water Heaters
                </Link>
                <Link
                  href="/services/drain-cleaning"
                  className="block py-3.5 px-2 text-gray-700 hover:bg-gray-50 rounded transition-colors"
                  onClick={onClose}
                >
                  Drain Cleaning
                </Link>
                <Link
                  href="/services/tankless"
                  className="block py-3.5 px-2 text-gray-700 hover:bg-gray-50 rounded transition-colors"
                  onClick={onClose}
                >
                  Tankless Upgrades
                </Link>
                <Link
                  href="/services/sewer-line"
                  className="block py-3.5 px-2 text-gray-700 hover:bg-gray-50 rounded transition-colors"
                  onClick={onClose}
                >
                  Sewer Line Repair
                </Link>
                <Link
                  href="/services/gas-line"
                  className="block py-3.5 px-2 text-gray-700 hover:bg-gray-50 rounded transition-colors"
                  onClick={onClose}
                >
                  Gas Line Services
                </Link>
                <Link
                  href="/services/leak-detection"
                  className="block py-3.5 px-2 text-gray-700 hover:bg-gray-50 rounded transition-colors"
                  onClick={onClose}
                >
                  Leak Detection
                </Link>
              </div>
            )}
          </div>

          {/* Service Areas Dropdown */}
          <div>
            <button
              className="w-full text-left py-3 text-gray-900 font-medium flex items-center justify-between hover:bg-gray-50 px-2 rounded transition-colors"
              onClick={() => setAreasExpanded(!areasExpanded)}
              aria-expanded={areasExpanded}
            >
              Service Areas
              <svg
                className={`w-5 h-5 transition-transform ${areasExpanded ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {areasExpanded && (
              <div className="pl-4 border-l-2 border-gray-100 ml-2 mb-2">
                <Link href="/areas/chico" className="block py-3 px-2 text-gray-700 hover:bg-gray-50 rounded transition-colors" onClick={onClose}>
                  Chico
                </Link>
                <Link href="/areas/redding" className="block py-3 px-2 text-gray-700 hover:bg-gray-50 rounded transition-colors" onClick={onClose}>
                  Redding
                </Link>
                <Link href="/areas/yuba-city" className="block py-3 px-2 text-gray-700 hover:bg-gray-50 rounded transition-colors" onClick={onClose}>
                  Yuba City
                </Link>
                <Link href="/areas/marysville" className="block py-3 px-2 text-gray-700 hover:bg-gray-50 rounded transition-colors" onClick={onClose}>
                  Marysville
                </Link>
                <Link href="/areas/paradise" className="block py-3 px-2 text-gray-700 hover:bg-gray-50 rounded transition-colors" onClick={onClose}>
                  Paradise
                </Link>
                <Link href="/areas/oroville" className="block py-3 px-2 text-gray-700 hover:bg-gray-50 rounded transition-colors" onClick={onClose}>
                  Oroville
                </Link>
                <Link href="/areas/red-bluff" className="block py-3 px-2 text-gray-700 hover:bg-gray-50 rounded transition-colors" onClick={onClose}>
                  Red Bluff
                </Link>
                <Link href="/areas/anderson" className="block py-3 px-2 text-gray-700 hover:bg-gray-50 rounded transition-colors" onClick={onClose}>
                  Anderson
                </Link>
                <Link href="/areas/south-lake-tahoe" className="block py-3 px-2 text-gray-700 hover:bg-gray-50 rounded transition-colors" onClick={onClose}>
                  South Lake Tahoe
                </Link>
                <Link href="/areas/truckee" className="block py-3 px-2 text-gray-700 hover:bg-gray-50 rounded transition-colors" onClick={onClose}>
                  Truckee
                </Link>
                <Link href="/areas/grass-valley" className="block py-3 px-2 text-gray-700 hover:bg-gray-50 rounded transition-colors" onClick={onClose}>
                  Grass Valley
                </Link>
                <Link href="/areas/auburn" className="block py-3 px-2 text-gray-700 hover:bg-gray-50 rounded transition-colors" onClick={onClose}>
                  Auburn
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/cost"
            className="py-3 px-2 text-gray-900 font-medium hover:bg-gray-50 rounded transition-colors"
            onClick={onClose}
          >
            Pricing
          </Link>
          <Link
            href="/resources"
            className="py-3 px-2 text-gray-900 font-medium hover:bg-gray-50 rounded transition-colors"
            onClick={onClose}
          >
            Resources
          </Link>
          <Link
            href="/about"
            className="py-3 px-2 text-gray-900 font-medium hover:bg-gray-50 rounded transition-colors"
            onClick={onClose}
          >
            About
          </Link>
          <Link
            href="/gallery"
            className="py-3 px-2 text-gray-900 font-medium hover:bg-gray-50 rounded transition-colors"
            onClick={onClose}
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className="py-3 px-2 text-gray-900 font-medium hover:bg-gray-50 rounded transition-colors"
            onClick={onClose}
          >
            Contact Us
          </Link>

          {/* Mobile CTA Button */}
          <a
            href="tel:5307046989"
            className="mt-6 h-12 px-6 bg-primary text-white font-btn font-semibold rounded-full inline-flex items-center justify-center gap-2 hover:bg-primary-dark transition-all duration-base shadow-md w-full"
            onClick={onClose}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
            </svg>
            (530) 704-6989
          </a>
        </nav>
      </div>
    </>
  );
}
