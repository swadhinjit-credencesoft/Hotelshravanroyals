'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import { Home, Waves, UtensilsCrossed, PartyPopper } from 'lucide-react';

const keyExperiences = [
  {
    id: 'k1',
    title: 'Cozy & Private Stays',
    description: 'Relax in quiet, spacious rooms surrounded by greenery, away from city noise.',
    image: '/Lawn-Facing-Room.png',
    imageAlt: 'Cozy and private room surrounded by greenery at Unwind Karjat',
    icon: Home,
  },
  {
    id: 'k2',
    title: 'Pool & Open Spaces',
    description: 'Enjoy the large outdoor swimming pool, with lawns and open spaces around it for the whole group.',
    image: '/Pool.png',
    imageAlt: 'Large outdoor swimming pool at Unwind Karjat',
    icon: Waves,
  },
  {
    id: 'k3',
    title: 'Good Food & BBQs',
    description: 'Savor fresh, delicious meals at the in-house dining area, with options for evening barbecues on the lawn.',
    image: '/bbq.jpeg',
    imageAlt: 'Fresh delicious meals served at the in-house dining area of Unwind Karjat',
    icon: UtensilsCrossed,
  },
  {
    id: 'k4',
    title: 'Celebrations & Events',
    description: 'Popular for family get-togethers, small parties, milestone anniversaries, and casual corporate day-outs.',
    image: '/celebrationsevenet.png',
    imageAlt: 'Celebration and event setup on the lawns at Unwind Karjat',
    icon: PartyPopper,
  },
];

export default function KeyStayExperiences() {
  return (
    <section className="bg-cream py-24" id="key-experiences">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <SectionLabel className="justify-center mb-6">The Stay Experience</SectionLabel>
          <h2 className="font-display text-4xl md:text-6xl italic text-forest">Key Stay Experiences</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {keyExperiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-white border border-gold/10 hover:border-gold/30 hover:shadow-warm-lg transition-all duration-500 overflow-hidden"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={exp.image}
                  alt={exp.imageAlt}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-gold/90 flex items-center justify-center">
                  <exp.icon size={22} className="text-[#1a1004]" />
                </div>
              </div>
              <div className="p-8 md:p-10">
                <h3 className="font-display text-3xl italic text-forest mb-4 group-hover:text-gold transition-colors">
                  {exp.title}
                </h3>
                <p className="font-serif text-lg text-taupe leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
