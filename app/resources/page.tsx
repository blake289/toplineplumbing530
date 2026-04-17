import { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Plumbing Resources & Homeowner Guides | Topline Plumbing Redding',
  description:
    'Free plumbing guides for Redding homeowners. Emergency shut-off instructions, water heater failure signs, burst pipe response, and more — written by a licensed Redding plumber since 1998.',
  alternates: { canonical: 'https://toplineplumbingco.com/resources' },
  openGraph: {
    title: 'Plumbing Resources & Homeowner Guides | Topline Plumbing',
    description:
      'Free plumbing guides for Redding homeowners — emergency response, warning signs, and prevention tips from a licensed Redding plumber.',
    url: 'https://toplineplumbingco.com/resources',
    siteName: 'Topline Plumbing',
    images: [
      {
        url: '/images/water-heater.webp',
        width: 1200,
        height: 630,
        alt: 'Topline Plumbing Resources',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const guides = [
  {
    href: '/resources/how-to-shut-off-main-water-valve',
    category: 'Emergency',
    title: 'How to Shut Off the Main Water Valve in Your Home',
    blurb:
      'The single most important plumbing skill every homeowner should know. Step-by-step guide to finding and operating your main shut-off before a small leak becomes a flood.',
    readTime: '4 min read',
  },
  {
    href: '/resources/water-heater-failure-warning-signs',
    category: 'Water Heater',
    title: '7 Warning Signs Your Water Heater Is About to Fail',
    blurb:
      "How to tell if your water heater is on borrowed time — before you wake up to a flooded garage. The signs most homeowners miss until it's too late.",
    readTime: '6 min read',
  },
  {
    href: '/resources/burst-pipe-emergency-guide',
    category: 'Emergency',
    title: 'What to Do When a Pipe Bursts: Step-by-Step Emergency Guide',
    blurb:
      "Burst pipe in the middle of the night? Here's exactly what to do in the first 10 minutes to limit damage and what to tell the plumber when you call.",
    readTime: '5 min read',
  },
];

export default function ResourcesHubPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://toplineplumbingco.com' },
          { name: 'Resources', url: 'https://toplineplumbingco.com/resources' },
        ]}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-36 md:pb-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold uppercase mb-6 leading-tight text-white">
            Plumbing Resources for Redding Homeowners
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-4 leading-relaxed max-w-3xl mx-auto">
            Practical, no-nonsense guides written by a licensed Redding
            plumber. No fluff, no upsells — just the information you need to
            protect your home and handle emergencies.
          </p>
          <p className="text-base text-white/70 leading-relaxed max-w-3xl mx-auto">
            All guides written and reviewed by Topline Plumbing staff,
            licensed California plumbers serving Redding since 1998.
          </p>
        </div>
      </section>

      {/* Guide grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-12 text-center">
            Featured Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide, i) => (
              <Link
                key={i}
                href={guide.href}
                className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-lg border border-gray-200 p-6 md:p-8 transition-all hover:-translate-y-1 block group"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs uppercase tracking-wider text-primary font-bold">
                    {guide.category}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="text-xs text-gray-500">{guide.readTime}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-navy-900 group-hover:text-primary transition-colors mb-3 leading-snug">
                  {guide.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base mb-4">
                  {guide.blurb}
                </p>
                <span className="text-primary font-semibold text-sm group-hover:translate-x-1 inline-flex items-center gap-1 transition-transform">
                  Read the guide
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-heading font-bold text-navy-900 mb-6">
            Why These Guides Exist
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Most of what you read about plumbing online is written by content
            farms that have never touched a pipe wrench. The advice is
            generic, often wrong, and usually pushes expensive "solutions" you
            don't need.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            These guides are written by licensed plumbers who actually do this
            work every day in the Redding area. They're designed to help you
            understand your home, make informed decisions, and know when
            something is a real emergency versus a maintenance item that can
            wait.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-navy-900 text-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Need a Plumber Right Now?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Topline Plumbing is open Mon&ndash;Fri 8:00a&ndash;4:30p in the Redding
            area. Upfront pricing. Licensed, bonded &amp; insured (CSLB #596557).
          </p>
          <a
            href="tel:5307046989"
            className="inline-flex h-14 px-10 bg-primary text-white font-btn font-bold rounded-xl items-center justify-center gap-2 hover:bg-red-700 transition-all shadow-lg text-lg"
          >
            Call: (530) 704-6989
          </a>
        </div>
      </section>
    </>
  );
}
