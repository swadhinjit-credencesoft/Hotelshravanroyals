'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionLabel from '@/components/ui/SectionLabel';
import OptimizedVideo from '@/components/ui/OptimizedVideo';

const rituals = [
  {
    season: 'Luxury Stay',
    title: 'Premium Deluxe Rooms',
    description:
      'Experience elegant interiors, spacious rooms, modern facilities, comfortable bedding, and premium hospitality services designed for a relaxing and memorable stay.',
    image:
      'https://bookonelocal.in/cdn/IMG_6313.mp4',
  },

  {
    season: 'Hospitality & Service',
    title: 'Personalized Care',
    description:
      'Experience round-the-clock service, curated local experiences, and dedicated attention to detail to ensure every moment of your stay is effortless and exceptional.',
    image:
      'https://bookonelocal.in/cdn/IMG_6316.mp4',
  },

  {
    season: 'Celebration Hall',
    title: 'Banquet & Events',
    description:
      'Perfect venue for weddings, birthday parties, engagement ceremonies, business meetings, and family celebrations with elegant arrangements and comfortable seating.',
    image:
      'https://bookonelocal.in/cdn/IMG_6307.mp4',
  },
];

export default function SeasonalRituals() {
  return (
    <section className="bg-ivory py-32 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="mb-20">
          <SectionLabel className="mb-6">
            Hotel Shravan Royal Inn
          </SectionLabel>

          <h2 className="font-display text-4xl md:text-6xl italic text-forest">
            Premium Hospitality Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rituals.map((ritual, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.2 }}
              className="group relative"
            >
              <div className="relative aspect-[3/4] overflow-hidden border border-gold/10 rounded-2xl">
                {ritual.image.match(/\.(mp4|webm|ogg)$/) ? (
                  <OptimizedVideo
                    src={ritual.image}
                    className="group-hover:scale-105 transition-all duration-1000"
                  />
                ) : (
                  <Image
                    src={ritual.image}
                    alt={ritual.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-all duration-1000"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>

              <div className="mt-8">
                <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold mb-3 block">
                  {ritual.season}
                </span>

                <h3 className="font-serif text-3xl italic text-forest mb-4 group-hover:text-gold transition-colors duration-500">
                  {ritual.title}
                </h3>

                <p className="font-sans text-sm text-taupe/70 leading-relaxed">
                  {ritual.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}