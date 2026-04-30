import Script from 'next/script';
import { getGoogleReviews, type GoogleReview } from '@/lib/google-reviews';

interface GoogleReviewsProps {
  title?: string;
  subtitle?: string;
  background?: 'white' | 'gray';
  max?: number;
}

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <svg
          key={n}
          className={`w-5 h-5 ${n <= rating ? 'text-yellow-500 fill-current' : 'text-gray-300 fill-current'}`}
          viewBox="0 0 20 20"
          aria-hidden
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function Initials({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map((s) => s[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();
  return (
    <div className="w-11 h-11 rounded-full bg-primary text-white font-bold flex items-center justify-center text-sm flex-shrink-0">
      {initials || 'G'}
    </div>
  );
}

function reviewSchema(review: GoogleReview) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: { '@id': 'https://toplineplumbingco.com/#business' },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: 5,
    },
    author: { '@type': 'Person', name: review.authorName },
    datePublished: review.publishTime,
    reviewBody: review.text,
  };
}

export default async function GoogleReviews({
  title = 'Real Reviews from Real Customers',
  subtitle = '5.0 perfect rating on Google — auto-pulled live.',
  background = 'white',
  max = 5,
}: GoogleReviewsProps) {
  const reviews = await getGoogleReviews();

  if (reviews.length === 0) {
    return null;
  }

  const visible = reviews.slice(0, max);
  const bgClass = background === 'gray' ? 'bg-gray-50' : 'bg-white';

  return (
    <section className={`py-16 md:py-20 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <svg className="w-6 h-6" viewBox="0 0 24 24" aria-hidden>
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Verified Google Reviews
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-2">
            {title}
          </h2>
          <p className="text-lg text-gray-600">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((r, i) => (
            <figure
              key={`${r.authorName}-${r.publishTime}-${i}`}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="flex items-center justify-between mb-3">
                <StarRow rating={r.rating} />
                <span className="text-xs text-gray-500">{r.relativeTime}</span>
              </div>
              <blockquote className="text-gray-800 leading-relaxed mb-5 flex-grow">
                {r.text.length > 280 ? `${r.text.slice(0, 280).trim()}…` : r.text}
              </blockquote>
              <figcaption className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
                <Initials name={r.authorName} />
                <div>
                  <div className="font-semibold text-navy-900 text-sm">{r.authorName}</div>
                  <div className="text-xs text-gray-500">via Google</div>
                </div>
              </figcaption>
              <Script
                id={`review-schema-${i}`}
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema(r)) }}
              />
            </figure>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://g.page/r/CTUWBxm42-YEEAI/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            Leave us a Google review →
          </a>
        </div>
      </div>
    </section>
  );
}
