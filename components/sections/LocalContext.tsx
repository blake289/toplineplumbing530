import React from 'react';
import type { CityProfile } from '@/lib/cityProfiles';

interface LocalContextProps {
  profile: CityProfile;
}

export default function LocalContext({ profile }: LocalContextProps) {
  return (
    <section className="bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="mb-8">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-primary mb-2">
            Plumbing in {profile.name}
          </p>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy-900 mb-4 leading-tight">
            What we see in {profile.name} that you won&apos;t find in a generic plumbing page.
          </h2>
          <p className="text-[15px] md:text-base text-gray-700 leading-relaxed">
            {profile.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-navy-900 mb-3">
              Local realities that shape the work
            </h3>
            <ul className="space-y-3">
              {profile.localRealities.map((item, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-gray-700 leading-relaxed">
                  <span className="text-primary font-bold mt-0.5 flex-shrink-0" aria-hidden>
                    →
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-navy-900 mb-3">
              Calls we get most from {profile.name}
            </h3>
            <ul className="space-y-3">
              {profile.commonCalls.map((item, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-gray-700 leading-relaxed">
                  <span className="text-accent-green font-bold mt-0.5 flex-shrink-0" aria-hidden>
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500">
          <span>
            <span className="font-semibold text-gray-700">County:</span> {profile.county}
          </span>
          <span aria-hidden>·</span>
          <span>
            <span className="font-semibold text-gray-700">From our shop:</span> {profile.distanceFromRedding}
          </span>
        </div>
      </div>
    </section>
  );
}
