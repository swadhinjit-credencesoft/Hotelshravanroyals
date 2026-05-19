'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useCallback } from 'react'
import { GalleryImage } from '@/data/gallery'

interface LightboxModalProps {
  images: GalleryImage[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export default function LightboxModal({
  images,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext,
}: LightboxModalProps) {
  const current = images[currentIndex]

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    },
    [onClose, onPrev, onNext]
  )

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, handleKeyDown])

  return (
    <AnimatePresence>
      {isOpen && current && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center lightbox-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`Image lightbox: ${current.alt}`}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-10 p-2 text-ivory/80 hover:text-ivory transition-colors focus-visible:ring-2 focus-visible:ring-gold"
            aria-label="Close lightbox"
          >
            <X size={28} />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); onPrev() }}
            className="absolute left-4 md:left-8 z-10 p-3 border border-gold/30 text-gold hover:border-gold hover:bg-gold/10 transition-all rounded-sm focus-visible:ring-2 focus-visible:ring-gold"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); onNext() }}
            className="absolute right-4 md:right-8 z-10 p-3 border border-gold/30 text-gold hover:border-gold hover:bg-gold/10 transition-all rounded-sm focus-visible:ring-2 focus-visible:ring-gold"
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>

          {/* Image */}
          <motion.div
            key={currentIndex}
            className="relative max-h-[85vh] max-w-[90vw] w-full"
            style={{ aspectRatio: `${current.width}/${current.height}`, maxWidth: '90vw' }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.35 }}
            onClick={(e) => e.stopPropagation()}
          >
            {current.type === 'video' ? (
              <video
                src={current.src}
                autoPlay
                loop
                muted
                controls
                playsInline
                className="w-full h-full object-contain"
              />
            ) : (
              <Image
                src={current.src}
                alt={current.alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
            )}
          </motion.div>

          {/* Caption */}
          <motion.p
            key={`caption-${currentIndex}`}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-ivory/60 font-serif text-sm italic text-center px-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {current.alt}
          </motion.p>

          {/* Counter */}
          <p className="absolute top-5 left-1/2 -translate-x-1/2 font-sans text-xs tracking-[0.15em] text-ivory/40 uppercase">
            {currentIndex + 1} / {images.length}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
