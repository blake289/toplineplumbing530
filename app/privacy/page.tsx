import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Topline Plumbing',
  description: 'Privacy Policy for Topline Plumbing. Learn how we collect, use, and protect your personal information.',
  alternates: { canonical: 'https://toplineplumbingco.com/privacy' },
  openGraph: {
    title: 'Privacy Policy | Topline Plumbing',
    description: 'Privacy Policy for Topline Plumbing. Learn how we collect, use, and protect your personal information.',
    url: 'https://toplineplumbingco.com/privacy',
    siteName: 'Topline Plumbing',
    images: [{ url: '/images/water-heater.webp', width: 1200, height: 630, alt: 'Topline Plumbing — Privacy Policy' }],
    locale: 'en_US',
    type: 'website',
  },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-36 md:pb-20 bg-gradient-to-br from-navy-900 to-navy-700">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center text-white">
          <h1 className="text-3xl md:text-4xl font-heading font-bold uppercase mb-4 text-white">Privacy Policy</h1>
          <p className="text-lg text-white/80">Last updated: March 26, 2026</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12 prose prose-lg">
          <h2>1. Information We Collect</h2>
          <p>Topline Plumbing ("we," "our," or "us") collects information you provide directly to us when you:</p>
          <ul>
            <li>Submit a contact or estimate request form on our website</li>
            <li>Call or text us</li>
            <li>Schedule a service appointment</li>
          </ul>
          <p>This information may include your name, phone number, email address, service address, and details about your plumbing needs.</p>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your service requests and provide plumbing services</li>
            <li>Send appointment reminders and service follow-ups via SMS and email</li>
            <li>Send you information about our services and promotions (with your consent)</li>
            <li>Improve our website and customer experience</li>
          </ul>

          <h2>3. SMS / Text Message Communications</h2>
          <p>By providing your phone number and submitting a form on our website, you consent to receive SMS text messages from Topline Plumbing. These messages may include:</p>
          <ul>
            <li>Appointment confirmations and reminders</li>
            <li>Service follow-up messages</li>
            <li>Promotional offers and updates</li>
          </ul>
          <p>Message frequency varies. Message and data rates may apply. You may opt out at any time by replying <strong>STOP</strong> to any message. Reply <strong>HELP</strong> for help. Opting out will not affect your ability to receive services.</p>

          <h2>4. SMS Data — No Sharing Policy</h2>
          <p><strong>We do not sell, share, rent, or trade your phone number or SMS opt-in data with third parties for marketing or promotional purposes.</strong> Your consent to receive SMS messages from Topline Plumbing applies only to communications from Topline Plumbing and will not be shared with any other organization.</p>

          <h2>5. Information Sharing</h2>
          <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only with:</p>
          <ul>
            <li>Service providers who assist in operating our business (e.g., scheduling software, CRM platforms) — bound by confidentiality obligations</li>
            <li>Law enforcement or government authorities if required by law</li>
          </ul>

          <h2>6. Cookies &amp; Tracking Technologies</h2>
          <p>Our website may use cookies and similar tracking technologies to improve your browsing experience and analyze site traffic. Cookies are small files stored on your device. You can control cookie settings through your browser. We may use:</p>
          <ul>
            <li><strong>Essential cookies</strong> — required for the website to function properly</li>
            <li><strong>Analytics cookies</strong> — help us understand how visitors use our site (e.g., Google Analytics)</li>
          </ul>
          <p>We do not use cookies to serve third-party advertising or track you across other websites for ad targeting.</p>

          <h2>7. Data Security</h2>
          <p>We implement reasonable security measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet is 100% secure.</p>

          <h2>8. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Request access to the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt out of SMS communications at any time by replying STOP</li>
          </ul>

          <h2>9. Age Restriction</h2>
          <p>Our SMS messaging program is intended for individuals who are 18 years of age or older. By submitting a form on our website and opting in to receive SMS messages, you confirm that you are at least 18 years old. We do not knowingly collect personal information from individuals under 18.</p>

          <h2>10. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us:</p>
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
