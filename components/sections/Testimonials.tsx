import React from 'react';

const testimonials = [
  {
    rating: 5,
    text: 'Joe and his team saved us when our pipe burst at 2am. They were professional, fast, and fair. Highly recommend!',
    name: 'James M.',
    location: 'Redding, CA',
    initials: 'JM',
  },
  {
    rating: 5,
    text: 'Installed our new tankless water heater effortlessly. They explained everything clearly and left the garage cleaner than they found it.',
    name: 'Tina P.',
    location: 'Anderson, CA',
    initials: 'TP',
  },
  {
    rating: 5,
    text: 'Honest plumbers. Came out for what I thought was a huge issue, cleared a simple clog for $130, and didn\'t try to upsell me at all.',
    name: 'David R.',
    location: 'Shasta Lake, CA',
    initials: 'DR',
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-background-light">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-2.5 bg-navy-100 text-navy-700 text-xs font-semibold uppercase tracking-widest rounded-full mb-6">
            Real Reviews from Real Customers
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text-dark mb-4 no-orphans">
            Don't Just Take Our Word for It
          </h2>
          <p className="text-lg text-text-light max-w-3xl mx-auto">
            See what our customers have to say about their experience with Topline Plumbing
          </p>
        </div>

        {/* Testimonials Grid - Equal height cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl hover:border-gray-200 hover:-translate-y-1 transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)] flex flex-col h-full"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-accent-yellow fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-base text-text leading-relaxed mb-6 italic flex-grow">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-navy-900 to-navy-700 text-white flex items-center justify-center font-heading font-bold text-base flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-heading font-bold text-text-dark text-base">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-text-light">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
