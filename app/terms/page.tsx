import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Topline Plumbing',
  description: 'Terms of Service for Topline Plumbing. Read our terms and conditions for using our website and services.',
  alternates: { canonical: 'https://toplineplumbingco.com/terms' },
  openGraph: {
    title: 'Terms of Service | Topline Plumbing',
    description: 'Terms of Service for Topline Plumbing. Read our terms and conditions for using our website and services.',
    url: 'https://toplineplumbingco.com/terms',
    siteName: 'Topline Plumbing',
    images: [{ url: '/images/water-heater.webp', width: 1200, height: 630, alt: 'Topline Plumbing — Terms of Service' }],
    locale: 'en_US',
    type: 'website',
  },
};

export default function TermsPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-36 md:pb-20 bg-gradient-to-br from-navy-900 to-navy-700">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center text-white">
          <h1 className="text-3xl md:text-4xl font-heading font-bold uppercase mb-4 text-white">Terms of Service</h1>
          <p className="text-lg text-white/80">Last updated: March 26, 2026</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12 prose prose-lg">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing or using the Topline Plumbing website (toplineplumbingco.com) or our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.</p>

          <h2>2. Services</h2>
          <p>Topline Plumbing provides residential and commercial plumbing services in Redding, CA and surrounding areas including the Northern California region. Service availability, pricing, and scope are subject to change without notice.</p>

          <h2>3. Website Use</h2>
          <p>You agree to use this website only for lawful purposes. You may not:</p>
          <ul>
            <li>Use the site in any way that violates applicable laws or regulations</li>
            <li>Attempt to gain unauthorized access to any part of the website</li>
            <li>Transmit any harmful, offensive, or disruptive content</li>
          </ul>

          <h2>4. Age Restriction</h2>
          <p>You must be 18 years of age or older to use this SMS service. You must be at least 18 years of age to use this website, submit forms, or opt in to receive SMS text messages from Topline Plumbing. By using our website or submitting a form, you represent that you are 18 years of age or older.</p>

          <h2>5. SMS Communications</h2>
          <p>By submitting your phone number through any form on our website, you expressly consent to receive SMS text messages from Topline Plumbing at the number provided. These messages may include appointment reminders, service updates, and promotional offers.</p>
          <ul>
            <li>Message frequency varies based on your interactions with us</li>
            <li>Message and data rates may apply</li>
            <li>Reply <strong>STOP</strong> at any time to unsubscribe from SMS messages</li>
            <li>Reply <strong>HELP</strong> for assistance</li>
            <li>Opting out of SMS does not affect your ability to receive services</li>
          </ul>

          <h2>5. Estimates and Pricing</h2>
          <p>Free estimates provided through our website or by phone are non-binding. Final pricing is determined upon on-site assessment by a Topline Plumbing technician. Prices may vary based on the scope of work, parts required, and job conditions.</p>

          <h2>6. Limitation of Liability</h2>
          <p>Topline Plumbing is not liable for any indirect, incidental, or consequential damages arising from the use of our website or services. Our total liability is limited to the amount paid for the specific service in question.</p>

          <h2>7. Intellectual Property</h2>
          <p>All content on this website, including text, images, logos, and graphics, is the property of Topline Plumbing and may not be reproduced without written permission.</p>

          <h2>8. Changes to Terms</h2>
          <p>We reserve the right to update these Terms of Service at any time. Continued use of our website after changes are posted constitutes your acceptance of the revised terms.</p>

          <h2>9. Carrier Liability Disclaimer</h2>
          <p>Topline Plumbing is not liable for any delays or failures in the receipt of SMS messages due to wireless carrier network issues, coverage limitations, or factors beyond our control. Mobile carriers are not liable for delayed or undelivered messages. Message and data rates may apply based on your carrier plan.</p>

          <h2>10. Governing Law</h2>
          <p>These Terms of Service are governed by the laws of the State of California. Any disputes shall be resolved in the courts of Shasta County, California.</p>

          <h2>11. Contact Us</h2>
          <p>If you have questions about these Terms of Service, please contact us:</p>
          <ul>
            <li><strong>Phone:</strong> (530) 704-6989</li>
            <li><strong>Email:</strong> Toplineplumbingredding@gmail.com</li>
            <li><strong>Address:</strong> Redding, CA 96001</li>
          </ul>
        </div>
      </section>
    </>
  );
}
