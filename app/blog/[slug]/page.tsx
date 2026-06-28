import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import { getAllPosts, getPostBySlug } from '@/lib/blog';

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.meta.title,
    description: post.meta.description,
    alternates: { canonical: `https://toplineplumbingco.com/blog/${slug}` },
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      url: `https://toplineplumbingco.com/blog/${slug}`,
      siteName: 'Topline Plumbing',
      locale: 'en_US',
      type: 'article',
    },
  };
}

function formatDate(iso: string): string {
  const d = new Date(`${iso}T00:00:00`);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// Hand-styled prose container (no @tailwindcss/typography dependency).
const proseClasses = [
  'max-w-none',
  'text-gray-700 text-lg leading-relaxed',
  '[&_p]:mb-6',
  '[&_h2]:font-heading [&_h2]:font-bold [&_h2]:text-navy-900 [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:mt-12 [&_h2]:mb-4',
  '[&_h3]:font-heading [&_h3]:font-bold [&_h3]:text-navy-900 [&_h3]:text-xl [&_h3]:md:text-2xl [&_h3]:mt-8 [&_h3]:mb-3',
  '[&_strong]:text-navy-900 [&_strong]:font-semibold',
  '[&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ul]:space-y-2',
  '[&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_ol]:space-y-2',
  '[&_li]:leading-relaxed',
  '[&_a]:text-primary [&_a]:font-semibold [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-primary-dark',
].join(' ');

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { meta, html, faqs } = post;
  const url = `https://toplineplumbingco.com/blog/${slug}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: meta.title,
    description: meta.description,
    datePublished: meta.date,
    dateModified: meta.date,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: {
      '@type': 'Person',
      name: 'Joe, Topline Plumbing',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Topline Plumbing',
      url: 'https://toplineplumbingco.com',
    },
  };

  const faqSchema =
    faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.q,
            acceptedAnswer: { '@type': 'Answer', text: faq.a },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://toplineplumbingco.com' },
          { name: 'Blog', url: 'https://toplineplumbingco.com/blog' },
          { name: meta.title, url },
        ]}
      />

      {/* Header */}
      <section className="pt-32 pb-12 md:pt-36 md:pb-16 bg-navy-900 text-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <Link
            href="/blog"
            className="text-white/70 hover:text-white text-sm font-semibold inline-flex items-center gap-1 mb-6 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            All guides
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-5 leading-tight text-white">
            {meta.title}
          </h1>
          <p className="text-white/80 text-sm md:text-base">
            By {meta.author} &middot; {formatDate(meta.date)}
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <article
            className={proseClasses}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </section>

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-10 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8"
                >
                  <h3 className="text-lg md:text-xl font-heading font-bold text-navy-900 mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 md:py-24 bg-navy-900 text-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Need a Plumber in Redding?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Topline Plumbing is open Mon&ndash;Fri 8:00a&ndash;4:30p, with same-day
            service during business hours when the schedule allows. Upfront
            pricing. Licensed, bonded &amp; insured (CSLB #596557).
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:5307046989"
              className="inline-flex h-14 px-10 bg-primary text-white font-btn font-bold rounded-xl items-center justify-center gap-2 hover:bg-red-700 transition-all shadow-lg text-lg"
            >
              Call: (530) 704-6989
            </a>
            <Link
              href={meta.moneyPage}
              className="inline-flex h-14 px-10 bg-transparent border-2 border-white text-white font-btn font-bold rounded-xl items-center justify-center hover:bg-white/10 transition-all text-lg"
            >
              See our service details
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
