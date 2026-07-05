'use client';

import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import SectionLabel from '@/components/ui/SectionLabel';

interface CinematicHeroProps {
  title: string;
  tagline: string;
  label: string;
  image: string;
}

export default function CinematicHero({
  title,
  tagline,
  label,
  image,
}: CinematicHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const reduced = useReducedMotion();

  const { scrollY } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollY, [0, 500], ['0%', '30%']);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const textY = useTransform(scrollY, [0, 500], ['0%', '-15%']);

  // Detect video files
  const isVideo =
    typeof image === 'string' &&
    /\.(mp4|webm|ogg)$/i.test(image);

  return (
    <section
      ref={containerRef}
      className="relative h-[90vh] min-h-[600px] w-full overflow-hidden flex items-end pb-24 pt-32"
    >
      {/* Background with Parallax */}
      <motion.div
        style={{
          y: reduced ? 0 : y,
          opacity,
        }}
        className="absolute inset-0 z-0"
      >
        {isVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className={`absolute inset-0 w-full h-full object-cover ${
              reduced ? '' : 'animate-ken-burns'
            }`}
            style={{
              animationName: reduced ? 'none' : 'kenBurns',
            }}
          >
            <source src={image} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={image}
            alt={title}
            fill
            priority
            sizes="100vw"
            fetchPriority="high"
            className={`object-cover ${
              reduced ? '' : 'animate-ken-burns'
            }`}
            style={{
              animationName: reduced ? 'none' : 'kenBurns',
            }}
          />
        )}

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Cinematic Overlay */}
        <div className="absolute inset-0 bg-forest/20 mix-blend-overlay" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-10 w-full"
      >
        <div className="max-w-5xl">
          <SectionLabel light className="mb-6">
            {label}
          </SectionLabel>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="font-display text-3xl md:text-4xl lg:text-5xl italic text-ivory mb-6 leading-[1.1] text-balance"
          >
            {title}
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 1,
              delay: 0.8,
            }}
            className="h-px bg-gold mb-6 w-24"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.6,
            }}
            className="font-serif text-base md:text-lg text-ivory/70 max-w-2xl italic leading-relaxed"
          >
            {tagline}
          </motion.p>
        </div>
      </motion.div>

      {/* Film Grain */}
      <div className="grain-overlay pointer-events-none opacity-50 absolute inset-0 z-20" />
    </section>
  );
}