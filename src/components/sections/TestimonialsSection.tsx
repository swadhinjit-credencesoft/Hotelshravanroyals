'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { testimonials } from '@/data/testimonials';
import SectionLabel from '@/components/ui/SectionLabel';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [xOffset, setXOffset] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const updateX = () => {
      const firstCard = track.children[0] as HTMLElement;
      if (!firstCard) return;
      const gap = 32;
      setXOffset(-(currentIndex * (firstCard.offsetWidth + gap)));
    };
    updateX();
    requestAnimationFrame(updateX);
    const observer = new ResizeObserver(updateX);
    observer.observe(track);
    return () => observer.disconnect();
  }, [currentIndex]);

  return (
    <section className="bg-parchment py-24" id="testimonials">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <SectionLabel className="justify-center mb-4">Guest Stories</SectionLabel>
          <h2 className="font-display text-4xl md:text-[52px] italic text-forest mb-6">
            In Their Words
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            ref={trackRef}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            className="flex gap-8 cursor-grab active:cursor-grabbing"
            animate={{ x: xOffset }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </motion.div>

          <div className="flex justify-center mt-12 gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 transition-all duration-500 rounded-none ${
                  currentIndex === i ? 'w-12 bg-gold' : 'w-4 bg-gold/20 hover:bg-gold/40'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[0] }) {
  return (
    <div className="min-w-full md:min-w-[48%] lg:min-w-[31%] xl:min-w-[24%] bg-cream border border-gold/10 p-6 md:p-10 relative group">
      <div className="absolute top-8 left-8 text-gold/10 pointer-events-none">
        <svg width="60" height="48" viewBox="0 0 60 48" fill="currentColor">
          <path d="M13.5 0C6.04416 0 0 6.04416 0 13.5V31.5C0 38.9558 6.04416 45 13.5 45H22.5V36H13.5C11.0147 36 9 33.9853 9 31.5V27H22.5V0H13.5ZM46.5 0C39.0442 0 33 6.04416 33 13.5V31.5C33 38.9558 39.0442 45 46.5 45H55.5V36H46.5C44.0147 36 42 33.9853 42 31.5V27H55.5V0H46.5Z" />
        </svg>
      </div>

      <div className="flex gap-1 mb-8">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * i }}
          >
            <Star size={14} className="fill-gold text-gold" />
          </motion.div>
        ))}
      </div>

      <blockquote className="font-serif text-lg md:text-xl italic text-forest leading-relaxed mb-10 min-h-[120px] md:min-h-[160px]">
        &ldquo;{testimonial.text}&rdquo;
      </blockquote>

      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-sans text-[11px] uppercase tracking-widest text-forest font-medium">
            {testimonial.name}
          </h4>
          <p className="font-sans text-[9px] uppercase tracking-widest text-taupe mt-0.5">
            {testimonial.stayType} &bull; {testimonial.country}
          </p>
        </div>
      </div>
    </div>
  );
}
