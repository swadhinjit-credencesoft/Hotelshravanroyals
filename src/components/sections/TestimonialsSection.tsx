'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { testimonials } from '@/data/testimonials';
import SectionLabel from '@/components/ui/SectionLabel';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function TestimonialsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalPages = Math.ceil(testimonials.length / cardsPerPage);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setCardsPerPage(w >= 1024 ? 3 : w >= 768 ? 2 : 1);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const scrollToPage = useCallback((page: number) => {
    const container = containerRef.current;
    if (!container) return;
    const cardIndex = page * cardsPerPage;
    const card = container.children[cardIndex] as HTMLElement | undefined;
    if (!card) return;
    card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  }, [cardsPerPage]);

  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const first = container.children[0] as HTMLElement | undefined;
    if (!first) return;
    const cardWidth = first.offsetWidth + 32;
    const idx = Math.round(container.scrollLeft / cardWidth);
    setCurrentPage(Math.min(Math.floor(idx / cardsPerPage), totalPages - 1));
  }, [cardsPerPage, totalPages]);

  const scroll = useCallback((dir: 'left' | 'right') => {
    const container = containerRef.current;
    if (!container) return;
    const first = container.children[0] as HTMLElement | undefined;
    if (!first) return;
    const cardWidth = first.offsetWidth + 32;
    container.scrollBy({ left: dir === 'right' ? cardWidth : -cardWidth, behavior: 'smooth' });
    setTimeout(() => {
      const idx = Math.round(container.scrollLeft / cardWidth);
      setCurrentPage(Math.min(Math.floor(idx / cardsPerPage), totalPages - 1));
    }, 400);
  }, [cardsPerPage, totalPages]);

  return (
    <section className="bg-parchment py-24 overflow-hidden" id="testimonials">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <SectionLabel className="justify-center mb-4">Guest Stories</SectionLabel>
          <h2 className="font-display text-4xl md:text-[52px] italic text-forest mb-6">
            In Their Words
          </h2>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className={`hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 border border-gold/30 text-gold bg-cream/90 backdrop-blur-sm rounded-sm hover:border-gold hover:bg-cream transition-all ${currentPage === 0 ? 'opacity-30 pointer-events-none' : ''}`}
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll('right')}
            className={`hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 border border-gold/30 text-gold bg-cream/90 backdrop-blur-sm rounded-sm hover:border-gold hover:bg-cream transition-all ${currentPage >= totalPages - 1 ? 'opacity-30 pointer-events-none' : ''}`}
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>

          <div
            ref={containerRef}
            onScroll={handleScroll}
            className="flex gap-8 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollSnapType: 'x mandatory', msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex-shrink-0 w-full md:w-[calc((100%_-_32px)/2)] lg:w-[calc((100%_-_64px)/3)] h-auto" style={{ scrollSnapAlign: 'start' }}>
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12 gap-3">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToPage(i)}
                className={`h-1.5 transition-all duration-500 rounded-none ${
                  currentPage === i ? 'w-12 bg-gold' : 'w-4 bg-gold/20 hover:bg-gold/40'
                }`}
                aria-label={`Go to page ${i + 1}`}
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
    <div className="bg-cream border border-gold/10 p-8 md:p-10 relative group flex flex-col h-full">
      <div className="absolute top-6 left-6 text-gold/10 pointer-events-none">
        <svg width="40" height="32" viewBox="0 0 60 48" fill="currentColor">
          <path d="M13.5 0C6.04416 0 0 6.04416 0 13.5V31.5C0 38.9558 6.04416 45 13.5 45H22.5V36H13.5C11.0147 36 9 33.9853 9 31.5V27H22.5V0H13.5ZM46.5 0C39.0442 0 33 6.04416 33 13.5V31.5C33 38.9558 39.0442 45 46.5 45H55.5V36H46.5C44.0147 36 42 33.9853 42 31.5V27H55.5V0H46.5Z" />
        </svg>
      </div>

      <div className="flex gap-1 mb-6">
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

      <blockquote className="font-serif text-lg md:text-xl italic text-forest leading-relaxed flex-1">
        &ldquo;{testimonial.text}&rdquo;
      </blockquote>

      <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gold/10">
        <div className="relative w-11 h-11 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 flex-shrink-0">
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
