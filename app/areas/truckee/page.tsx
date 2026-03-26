import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Plumber in Truckee, CA | Topline Plumbing',
  description: 'Licensed plumber in Truckee, California. 24/7 emergency plumbing, drain cleaning, water heater repair. Same-day service in Truckee. Call (530) 768-9446',
};

export default function TruckeePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Licensed Plumber in Truckee, California</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Professional plumbing service in Truckee, CA. Licensed plumbers for emergency plumbing, drain cleaning, water heater repair, leak detection, and all residential & commercial plumbing needs. Same-day service available.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <Link href="/" className="text-blue-600 hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/#service-areas" className="text-blue-600 hover:underline">Service Areas</Link>
          <span className="mx-2">/</span>
          <span>Truckee CA</span>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Your Trusted Plumber in Truckee, California</h2>
              <p className="text-lg text-gray-700">
                Topline Plumbing 530 is proud to serve Truckee, Nevada County with professional plumbing services. Our licensed plumbers have been serving Truckee homeowners and businesses for 15+ years, completing thousands of plumbing jobs across Northern California with a 4.9-star rating.
              </p>
              <p className="text-lg text-gray-700">
                Whether you need emergency plumbing service at 2am or a scheduled water heater installation, our licensed plumbers in Truckee are ready to help. We offer same-day plumbing service for most repairs in Truckee and surrounding areas.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 pt-6">Complete Plumbing Services in Truckee CA</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    <Link href="/services/emergency" className="text-blue-600 hover:underline">24/7 Emergency Plumber Truckee</Link>
                  </h3>
                  <p className="text-gray-700">Plumbing emergencies don't wait for business hours. Our emergency plumbers respond 24/7 to burst pipes, water heater flooding, sewer backups, and all plumbing emergencies in Truckee. Average response time: 60 minutes.</p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    <Link href="/services/drain-cleaning" className="text-blue-600 hover:underline">Drain Cleaning Service Truckee</Link>
                  </h3>
                  <p className="text-gray-700">Clogged drain in Truckee? Slow bathroom drain? Kitchen sink backup? Our licensed plumbers provide professional drain cleaning using advanced equipment. We clear clogged drains fast — usually in under an hour.</p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    <Link href="/services/water-heater-repair" className="text-blue-600 hover:underline">Water Heater Repair & Installation Truckee</Link>
                  </h3>
                  <p className="text-gray-700">No hot water in Truckee? Water heater leaking? Strange noises? Our plumbers specialize in water heater repair and replacement. Same-day water heater service available in Truckee.</p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    <Link href="/services/tankless" className="text-blue-600 hover:underline">Tankless Water Heater Installation Truckee</Link>
                  </h3>
                  <p className="text-gray-700">Upgrade to a tankless water heater for endless hot water and energy savings. Professional installation with warranty.</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 pt-8">Why Truckee Homeowners Choose Topline Plumbing</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Local Truckee Plumbers:</strong> We serve Truckee and know the area's plumbing challenges</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Licensed & Insured:</strong> Every plumber is fully licensed CA plumber, bonded & insured</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Fast Response in Truckee:</strong> Same-day service available, 24/7 emergency plumbing</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Transparent Pricing:</strong> Upfront pricing before we start work - no hidden fees</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>4.9-Star Rating:</strong> 427 five-star reviews from satisfied customers</span>
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 pt-8">Plumbing Service Areas Near Truckee</h2>
              <p className="text-gray-700 mb-4">In addition to Truckee, we provide licensed plumbing service throughout Northern California including:</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <Link href="/areas/chico" className="text-blue-600 hover:underline">Plumber Chico</Link>
                <Link href="/areas/redding" className="text-blue-600 hover:underline">Plumber Redding</Link>
                <Link href="/areas/yuba-city" className="text-blue-600 hover:underline">Plumber Yuba City</Link>
                <Link href="/areas/marysville" className="text-blue-600 hover:underline">Plumber Marysville</Link>
                <Link href="/areas/paradise" className="text-blue-600 hover:underline">Plumber Paradise</Link>
                <Link href="/areas/oroville" className="text-blue-600 hover:underline">Plumber Oroville</Link>
                <Link href="/areas/red-bluff" className="text-blue-600 hover:underline">Plumber Red Bluff</Link>
                <Link href="/areas/anderson" className="text-blue-600 hover:underline">Plumber Anderson</Link>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 pt-8">Emergency Plumber Truckee - 24/7 Service</h2>
              <p className="text-gray-700">
                When you have a plumbing emergency in Truckee — burst pipe, water heater flooding, sewer backup, or any urgent plumbing problem — call Topline Plumbing 530 immediately at <strong>(530) 768-9446</strong>. Our emergency plumbers are on-call 24 hours a day, 7 days a week, 365 days a year.
              </p>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* CTA Box */}
              <div className="bg-primary text-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-2">Truckee Plumber</h3>
                <p className="mb-4">Call for Same-Day Service</p>
                <a
                  href="tel:5307689446"
                  className="w-full h-14 px-6 bg-white text-primary font-semibold rounded-full inline-flex items-center justify-center gap-2 hover:bg-gray-100 transition-all shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (530) 768-9446
                </a>
              </div>

              {/* Services Card */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Truckee Services</h3>
                <ul className="space-y-2">
                  <li><Link href="/services/emergency" className="text-blue-600 hover:underline">Emergency Plumbing</Link></li>
                  <li><Link href="/services/drain-cleaning" className="text-blue-600 hover:underline">Drain Cleaning</Link></li>
                  <li><Link href="/services/water-heater-repair" className="text-blue-600 hover:underline">Water Heater</Link></li>
                  <li><Link href="/services/tankless" className="text-blue-600 hover:underline">Tankless Upgrades</Link></li>
                </ul>
              </div>

              {/* Service Info Card */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Service Info</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Licensed CA Plumber
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Bonded & Insured
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    24/7 Emergency
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Same-Day Service
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Upfront Pricing
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    4.9★ Rating
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need a Plumber in Truckee?</h2>
          <p className="text-xl text-gray-200 mb-8">Licensed plumbers ready to help. Same-day service available in Truckee, California.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="tel:5307689446"
              className="h-14 px-8 bg-primary text-white font-semibold rounded-full inline-flex items-center justify-center gap-2 hover:bg-red-700 transition-all shadow-lg text-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="whitespace-nowrap">Call: (530) 768-9446</span>
            </a>
            <Link
              href="/"
              className="h-14 px-8 bg-white text-navy-900 font-semibold rounded-full inline-flex items-center justify-center hover:bg-gray-100 transition-all shadow-lg text-lg"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
