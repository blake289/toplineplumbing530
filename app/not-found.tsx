import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found | Topline Plumbing',
  description:
    'The page you were looking for could not be found. Call Topline Plumbing in Redding, CA at (530) 704-6989.',
};

export default function NotFound() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-navy-900 text-white min-h-[70vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
        <p className="text-[#dc2626] text-sm font-bold uppercase tracking-widest mb-4">
          Error 404
        </p>
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">
          Page Not Found
        </h1>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-10">
          We couldn&apos;t find the page you were looking for &mdash; it may have
          moved or never existed. Need a plumber in Redding? Give us a call or
          head back to one of the pages below.
        </p>

        <a
          href="tel:5307046989"
          className="inline-block bg-[#dc2626] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#b91c1c] hover:-translate-y-0.5 focus-visible:bg-[#b91c1c] focus-visible:-translate-y-0.5 transition-all duration-200 mb-10"
        >
          Call (530) 704-6989
        </a>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          <Link href="/" className="text-gray-200 hover:text-white underline">
            Home
          </Link>
          <Link href="/services" className="text-gray-200 hover:text-white underline">
            Services
          </Link>
          <Link href="/areas" className="text-gray-200 hover:text-white underline">
            Service Areas
          </Link>
          <Link href="/contact" className="text-gray-200 hover:text-white underline">
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
