'use client';

import { awards } from '@/data/awards';

export default function AwardsMarquee() {
  const row1 = [...awards, ...awards];
  const row2 = [...awards].reverse();
  const row2Extended = [...row2, ...row2];

  return (
    <section className="bg-forest py-12 border-y border-ivory/10 overflow-hidden group">
      <div className="flex flex-col gap-8">
        <div className="marquee-wrapper">
          <div className="marquee-track flex items-center gap-12 whitespace-nowrap">
            {row1.map((award, i) => (
              <div key={i} className="flex items-center gap-12">
                <span className="font-serif text-lg md:text-xl italic text-ivory/40 group-hover:text-ivory/90 transition-colors duration-500">
                  {award}
                </span>
                <span className="text-gold text-xs">◆</span>
              </div>
            ))}
          </div>
        </div>

        <div className="marquee-wrapper">
          <div className="marquee-track-reverse flex items-center gap-12 whitespace-nowrap">
            {row2Extended.map((award, i) => (
              <div key={i} className="flex items-center gap-12">
                <span className="font-serif text-lg md:text-xl italic text-ivory/40 group-hover:text-ivory/90 transition-colors duration-500">
                  {award}
                </span>
                <span className="text-gold text-xs">◆</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
