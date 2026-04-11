import { Metadata } from 'next';
import HeroEstimateForm from '@/components/forms/HeroEstimateForm';

export const metadata: Metadata = {
  title: 'Contact Topline Plumbing | Redding, CA',
  description: 'Contact Topline Plumbing for plumbing services in Redding, CA. Call (530) 704-6989 or request a free estimate online.',
  alternates: { canonical: 'https://toplineplumbingco.com/contact' },
  openGraph: {
    title: 'Contact Topline Plumbing | Redding, CA',
    description: 'Contact Topline Plumbing for plumbing services in Redding, CA. Call (530) 704-6989 or request a free estimate online.',
    url: 'https://toplineplumbingco.com/contact',
    siteName: 'Topline Plumbing',
    images: [{ url: '/images/water-heater.webp', width: 1200, height: 630, alt: 'Topline Plumbing — Contact Us in Redding, CA' }],
    locale: 'en_US',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-36 md:pb-20 bg-gradient-to-br from-navy-900 to-navy-700">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold uppercase mb-6 text-white">Contact Us</h1>
          <p className="text-lg md:text-xl text-white text-opacity-90">Get a free estimate or schedule service today</p>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Get In Touch</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-base text-gray-900 uppercase tracking-wide mb-2">Phone</h3>
                    <a href="tel:5307046989" className="text-lg text-navy-500 hover:text-navy-700">(530) 704-6989</a>
                    <p className="text-sm text-gray-600">Available 24/7 for emergencies</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-base text-gray-900 uppercase tracking-wide mb-2">Email</h3>
                    <a href="mailto:Toplineplumbingredding@gmail.com" className="text-navy-500 hover:text-navy-700 break-all">Toplineplumbingredding@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-base text-gray-900 uppercase tracking-wide mb-2">Service Area</h3>
                    <p className="text-gray-600">Redding, Shasta Lake, Anderson, Palo Cedro, Bella Vista & surrounding areas</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-base text-gray-900 uppercase tracking-wide mb-2">Hours</h3>
                    <p className="text-gray-600">24/7 Emergency Service<br/>Regular Hours: Mon-Fri 8am-5pm</p>
                  </div>
                </div>
              </div>

              <div className="bg-navy-900 text-white p-6 rounded-2xl">
                <h3 className="font-heading font-bold text-xl mb-3 text-white">Why Choose Topline?</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><span className="text-primary">✓</span> Upfront pricing, no hidden fees</li>
                  <li className="flex items-center gap-2"><span className="text-primary">✓</span> Licensed & insured professionals</li>
                  <li className="flex items-center gap-2"><span className="text-primary">✓</span> Same-day service available</li>
                  <li className="flex items-center gap-2"><span className="text-primary">✓</span> 100% satisfaction guarantee</li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 shadow-lg overflow-hidden bg-white">
              <div className="p-8 md:p-10">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Request a Free Estimate</h2>
                <HeroEstimateForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
