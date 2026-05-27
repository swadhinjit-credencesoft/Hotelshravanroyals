'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { experiences } from '@/data/experiences';
import SectionLabel from '@/components/ui/SectionLabel';
import { Clock, ArrowRight, Sun, CloudRain, Snowflake } from 'lucide-react';

export default function ExperiencesGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section className="bg-forest py-24" id="experiences">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="mb-16">
          <SectionLabel light className="mb-4">Experiences</SectionLabel>
          <h2 className="font-display text-4xl md:text-[52px] italic text-ivory mb-6 leading-tight">
            Curated Immersions
          </h2>
          <p className="font-serif text-xl font-light text-ivory/60 max-w-xl leading-relaxed">
            Beyond the suite, Hotel Bella Casa offers a collection of adventures and rituals designed to connect you with nature.
          </p>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-auto lg:h-[800px]"
        >
          {experiences.map((experience, i) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  experience,
  index,
  isInView,
}: {
  experience: (typeof experiences)[0];
  index: number;
  isInView: boolean;
}) {
  const isTall = index === 0;

  const getSeasonIcon = (season: string) => {
    switch (season) {
      case 'Monsoon': return <CloudRain size={12} />;
      case 'Winter': return <Snowflake size={12} />;
      default: return <Sun size={12} />;
    }
  };

  return (
    <motion.div
      className={`group relative overflow-hidden rounded-none ${
        isTall ? 'lg:row-span-2' : ''
      }`}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative h-full w-full min-h-[400px] lg:min-h-0">
        <Image
          src={experience.image}
          alt={experience.imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes={isTall ? '50vw' : '33vw'}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute top-4 left-4">
            <div className="bg-forest/80 backdrop-blur-sm px-3 py-1 border border-ivory/10 flex items-center gap-2">
                <span className="text-gold">{getSeasonIcon(experience.season)}</span>
                {/* <span className="font-sans text-[9px] uppercase tracking-widest text-ivory/80">
                    {experience.season}
                </span> */}
            </div>
        </div>

        <div className="absolute top-4 right-4">
            <div className="bg-ivory/10 backdrop-blur-sm px-3 py-1 border border-ivory/20 rounded-none">
                <span className="font-sans text-[9px] uppercase tracking-widest text-ivory/80 flex items-center gap-1.5">
                    <Clock size={10} className="text-gold" /> {experience.duration}
                </span>
            </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="flex items-center justify-between mb-2">
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold">
              {experience.category}
            </span>
            {experience.priceInfo && (
              <span className="font-sans text-[9px] uppercase tracking-widest text-ivory/60 bg-white/5 px-2 py-0.5 border border-white/10">
                {experience.priceInfo}
              </span>
            )}
          </div>
          <h3 className="font-serif text-2xl md:text-3xl italic text-ivory mb-4 group-hover:text-gold transition-colors">
            {experience.title}
          </h3>

          <div className="max-h-0 overflow-hidden group-hover:max-h-60 transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100">
            <p className="font-sans text-sm text-ivory/70 mb-6 leading-relaxed">
              {experience.description}
            </p>
            <a href="https://bookone.io/Hotel-Bella-Casa?bookingEngine=true" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.2em] text-[#1a1004] bg-gold px-6 py-3 hover:bg-gold-light transition-all rounded-sm">
              Add to Stay <ArrowRight size={12} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
