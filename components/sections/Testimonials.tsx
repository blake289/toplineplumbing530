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
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-3 bg-navy-50 text-navy-900 text-xs font-semibold uppercase tracking-wide rounded-full mb-4">
            Real Reviews from Real Customers
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-heading font-bold uppercase text-gray-900">
            Don't Just Take Our Word for It
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow duration-base"
            >
              {/* Star Rating */}
              <div className="text-yellow-500 mb-4 text-xl tracking-wider">
                {'★'.repeat(testimonial.rating)}
              </div>

              {/* Review Text */}
              <p className="text-gray-600 italic leading-relaxed mb-6 text-base">
                "{testimonial.text}"
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-navy-900 text-white flex items-center justify-center font-heading font-bold text-lg">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-heading font-bold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-gray-600 uppercase tracking-wide">
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
