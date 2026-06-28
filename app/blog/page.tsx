import { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Plumbing Tips & Guides | Topline Plumbing, Redding CA',
  description:
    'Plumbing tips and guides for Redding homeowners from a licensed local plumber since 1998. Drain clogs, water heaters, and honest advice with no upsells.',
  alternates: { canonical: 'https://toplineplumbingco.com/blog' },
  openGraph: {
    title: 'Plumbing Tips & Guides | Topline Plumbing',
    description:
      'Plumbing tips and guides for Redding homeowners from a licensed local plumber since 1998.',
    url: 'https://toplineplumbingco.com/blog',
    siteName: 'Topline Plumbing',
    locale: 'en_US',
    type: 'website',
  },
};

function formatDate(iso: string): string {
  const d = new Date(`${iso}T00:00:00`);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://toplineplumbingco.com' },
          { name: 'Blog', url: 'https://toplineplumbingco.com/blog' },
        ]}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-36 md:pb-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold uppercase mb-6 leading-tight text-white">
            Plumbing Tips &amp; Guides
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            Practical, no-nonsense plumbing advice for Redding homeowners,
            written by a licensed local plumber since 1998. No fluff, no
            upsells, just what you need to know.
          </p>
        </div>
      </section>

      {/* Post grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          {posts.length === 0 ? (
            <p className="text-center text-gray-600">
              New guides are on the way. Check back soon.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-lg border border-gray-200 p-6 md:p-8 transition-all hover:-translate-y-1 block group"
                >
                  <div className="text-xs uppercase tracking-wider text-primary font-bold mb-4">
                    {formatDate(post.date)}
                  </div>
                  <h2 className="text-xl md:text-2xl font-heading font-bold text-navy-900 group-hover:text-primary transition-colors mb-3 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-base mb-4">
                    {post.excerpt}
                  </p>
                  <span className="text-primary font-semibold text-sm group-hover:translate-x-1 inline-flex items-center gap-1 transition-transform">
                    Read more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          )}
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
