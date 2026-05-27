import React from 'react';
import Link from 'next/link';

export default function AfterHoursCapture() {
  return (
    <section className="bg-navy-900 py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="bg-white/[0.04] backdrop-blur rounded-2xl border border-white/10 p-6 md:p-8">
          <div className="flex items-start gap-4 md:gap-5">
            <div className="hidden sm:flex w-12 h-12 rounded-full bg-primary/20 items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-primary mb-1.5">
                After Hours? Weekend?
              </p>
              <h2 className="text-xl md:text-2xl font-heading font-bold text-white mb-3 leading-tight">
                We&apos;re a daytime plumber, but you can still reach us.
              </h2>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-5">
                Our business hours are Mon&ndash;Fri 8:00a&ndash;4:30p. If you&apos;re hitting us outside those hours, here&apos;s the fastest way to get on the schedule for the next business day:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">1</span>
                    <span className="text-sm font-semibold text-white">Text us</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Text <a href="sms:5307046989" className="text-primary font-semibold hover:underline">(530) 704-6989</a> with what&apos;s going on. We see it first thing in the morning and call back to schedule.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">2</span>
                    <span className="text-sm font-semibold text-white">Fill the form</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Drop your details on our <Link href="/contact" className="text-primary font-semibold hover:underline">contact page</Link>. Same response window &mdash; first thing the next business day.
                  </p>
                </div>
              </div>

              <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
                <p className="text-xs md:text-sm text-amber-100 leading-relaxed">
                  <span className="font-semibold text-amber-200">Active flooding, sewage backup, or gas smell right now?</span> Call your utility or 911 first. We&apos;re a scheduled-response plumber, not a 24/7 emergency dispatch service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
