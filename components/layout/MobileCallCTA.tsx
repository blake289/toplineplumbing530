import Link from 'next/link';

export default function MobileCallCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-navy-900 border-t border-white/10 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
      <div className="flex items-center h-16 px-4 gap-3">
        {/* Call button — primary action */}
        <a
          href="tel:5307046989"
          className="flex-1 flex items-center justify-center gap-2 bg-primary text-white font-semibold text-base rounded-xl h-11 hover:bg-primary-dark active:scale-[0.97] transition-all duration-150 shadow-md"
        >
          <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
          </svg>
          Call Now
        </a>

        {/* Book / quote — secondary action */}
        <Link
          href="/contact"
          className="flex-1 flex items-center justify-center gap-2 bg-white/10 text-white font-semibold text-base rounded-xl h-11 hover:bg-white/20 active:scale-[0.97] transition-all duration-150"
        >
          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Book Service
        </Link>
      </div>
    </div>
  );
}
