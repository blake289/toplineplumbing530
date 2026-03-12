import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Topline Plumbing | Redding, CA',
  description: 'Family-owned plumbing company serving Redding & Northern California since 1998. Licensed, insured, and committed to quality service.',
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-36 md:pb-20 bg-gradient-to-br from-navy-900 to-navy-700">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold uppercase mb-6 text-white">About Topline Plumbing</h1>
          <p className="text-lg md:text-xl text-white text-opacity-90">Your trusted plumbing partner in Redding & Northern California since 1998</p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">Family-Owned, Community-Focused</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Topline Plumbing is a family-owned plumbing company dedicated to serving homeowners and businesses across Redding and Northern California. With over 30 years of combined experience, we've built our reputation on honesty, quality workmanship, and exceptional customer service.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We understand that plumbing problems can be stressful and disruptive. That's why we're committed to providing fast, reliable service with upfront pricing and no hidden fees. When you call Topline Plumbing, you'll always speak with a real person who cares about solving your problem.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full bg-primary rounded-lg -z-10" />
              <Image src="/images/joe-cindy.png" alt="Topline Plumbing Team" width={600} height={800} className="relative w-full aspect-[3/4] object-cover rounded-lg" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="text-5xl font-heading font-extrabold text-navy-900 mb-2">30+</div>
              <div className="text-gray-600 font-semibold">Years Experience</div>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="text-5xl font-heading font-extrabold text-navy-900 mb-2">2,487</div>
              <div className="text-gray-600 font-semibold">Water Heaters Installed</div>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="text-5xl font-heading font-extrabold text-primary mb-2">24/7</div>
              <div className="text-gray-600 font-semibold">Emergency Service</div>
            </div>
          </div>

          <div className="bg-navy-900 text-white p-12 rounded-lg">
            <h2 className="text-3xl font-heading font-bold mb-6 text-white text-center">Why Choose Topline Plumbing?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1"><span className="text-white font-bold">✓</span></div>
                <div><h3 className="font-semibold mb-1 text-white">Licensed & Insured</h3><p className="text-white text-opacity-80 text-sm">Fully licensed, bonded, and insured for your protection</p></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1"><span className="text-white font-bold">✓</span></div>
                <div><h3 className="font-semibold mb-1 text-white">Upfront Pricing</h3><p className="text-white text-opacity-80 text-sm">Know the cost before we start—no surprises</p></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1"><span className="text-white font-bold">✓</span></div>
                <div><h3 className="font-semibold mb-1 text-white">Same-Day Service</h3><p className="text-white text-opacity-80 text-sm">Fast response for urgent plumbing needs</p></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1"><span className="text-white font-bold">✓</span></div>
                <div><h3 className="font-semibold mb-1 text-white">100% Satisfaction Guarantee</h3><p className="text-white text-opacity-80 text-sm">We're not done until you're completely satisfied</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50 text-center">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">Ready to Work With Us?</h2>
          <p className="text-lg text-gray-600 mb-8">Experience the Topline Plumbing difference. Call us today or request a free estimate.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="h-12 px-8 bg-primary text-white font-btn font-semibold rounded-full inline-flex items-center justify-center hover:bg-primary-dark transition-all duration-base shadow-lg">Request Estimate</Link>
            <a href="tel:5307689446" className="h-12 px-8 bg-navy-900 text-white font-btn font-semibold rounded-full inline-flex items-center justify-center hover:bg-navy-700 transition-all duration-base shadow-lg">Call (530) 768-9446</a>
          </div>
        </div>
      </section>
    </>
  );
}
