'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { galleryImages } from '@/data/gallery';
import SectionLabel from '@/components/ui/SectionLabel';
import LightboxModal from '@/components/ui/LightboxModal';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'rooms', label: 'Rooms' },
  { id: 'outdoors', label: 'Pool & Outdoors' },
  { id: 'food', label: 'Food' },
  { id: 'events', label: 'Events' },
  { id: 'nature', label: 'Nature & Surroundings' }
] as const;

export default function GallerySection({ viewAllHref }: { viewAllHref?: string }) {
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]['id']>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = useMemo(() => {
    return activeCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  const handleOpenLightbox = (imgId: string) => {
    const index = filteredImages.findIndex((img) => img.id === imgId);
    if (index !== -1) setLightboxIndex(index);
  };

  return (
    <section className="bg-cream-dark py-24" id="gallery">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <SectionLabel className="mb-4">The Collection</SectionLabel>
            <h2 className="font-display text-4xl md:text-[52px] italic text-forest">
              Captured Moments
            </h2>
            {viewAllHref && (
              <Link
                href={viewAllHref}
                className="inline-flex items-center gap-2 mt-6 font-sans text-[10px] uppercase tracking-[0.3em] text-gold hover:text-forest transition-colors"
              >
                View Full Gallery <ArrowRight size={14} />
              </Link>
            )}
          </div>

          <div className="flex gap-6 md:gap-8 border-b border-forest/10 pb-4 overflow-x-auto flex-nowrap md:pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`font-sans text-[11px] uppercase tracking-[0.2em] relative transition-colors duration-300 ${
                  activeCategory === cat.id ? 'text-gold' : 'text-taupe hover:text-forest'
                }`}
              >
                {cat.label}
                {activeCategory === cat.id && (
                  <motion.div
                    layoutId="gallery-tab"
                    className="absolute -bottom-4 left-0 right-0 h-0.5 bg-gold"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="relative break-inside-avoid group cursor-pointer overflow-hidden border border-gold/10"
                onClick={() => handleOpenLightbox(image.id)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105 grayscale-[40%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 border-0 group-hover:border-[12px] border-gold/10 transition-all duration-500 pointer-events-none" />
                <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/10 transition-colors duration-500" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <LightboxModal
        images={filteredImages}
        currentIndex={lightboxIndex ?? 0}
        isOpen={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        onPrev={() => setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : null))}
        onNext={() => setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredImages.length : null))}
      />
    </section>
  );
}
