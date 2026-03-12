import { Metadata } from 'next';
import Card from '@/components/ui/Card';
import HeroEstimateForm from '@/components/forms/HeroEstimateForm';

export const metadata: Metadata = {
  title: 'Contact Topline Plumbing | Redding, CA',
  description: 'Contact Topline Plumbing for plumbing services in Redding, CA. Call (530) 768-9446 or request a free estimate online.',
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-36 md:pb-20 bg-gradient-to-br from-navy-900 to-navy-700">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold uppercase mb-6">Contact Us</h1>
          <p className="text-lg md:text-xl text-white text-opacity-90">Get a free estimate or schedule service today</p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Get In Touch</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:5307689446" className="text-lg text-navy-500 hover:text-navy-700">(530) 768-9446</a>
                    <p className="text-sm text-gray-600">Available 24/7 for emergencies</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:Toplineplumbingredding@gmail.com" className="text-navy-500 hover:text-navy-700 break-all">Toplineplumbingredding@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Service Area</h3>
                    <p className="text-gray-600">Redding, Shasta Lake, Anderson, Palo Cedro, Bella Vista & surrounding areas</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">⏰</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Hours</h3>
                    <p className="text-gray-600">24/7 Emergency Service<br/>Regular Hours: Mon-Fri 8am-5pm</p>
                  </div>
                </div>
              </div>

              <div className="bg-navy-900 text-white p-6 rounded-lg">
                <h3 className="font-heading font-bold text-xl mb-3">Why Choose Topline?</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><span className="text-primary">✓</span> Upfront pricing, no hidden fees</li>
                  <li className="flex items-center gap-2"><span className="text-primary">✓</span> Licensed & insured professionals</li>
                  <li className="flex items-center gap-2"><span className="text-primary">✓</span> Same-day service available</li>
                  <li className="flex items-center gap-2"><span className="text-primary">✓</span> 100% satisfaction guarantee</li>
                </ul>
              </div>
            </div>

            <Card padding="lg" shadow="lg">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">Request a Free Estimate</h2>
              <HeroEstimateForm />
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
