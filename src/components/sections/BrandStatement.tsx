'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { heroStats } from '@/data/hero'
import GoldDivider from '@/components/ui/GoldDivider'
import SectionLabel from '@/components/ui/SectionLabel'


export default function BrandStatement() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const quoteLines = [
    'Hotel Bella Casa is more than a stay — it is a world of refined luxury',
    'peaceful escapes, and unforgettable experiences where comfort, beauty',
    'and hospitality exist in perfect harmony.',
  ]

  return (
    <section
      ref={ref}
      className="bg-cream-light py-32 text-center relative overflow-hidden"
      aria-label="Brand statement"
    >
      {/* Subtle background ornament */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" aria-hidden="true">
        <svg width="100%" height="100%" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <circle cx="400" cy="300" r="250" fill="none" stroke="#C8A96E" strokeWidth="1" />
          <circle cx="400" cy="300" r="200" fill="none" stroke="#C8A96E" strokeWidth="0.5" />
          <circle cx="400" cy="300" r="150" fill="none" stroke="#C8A96E" strokeWidth="0.5" />
          <line x1="150" y1="300" x2="650" y2="300" stroke="#C8A96E" strokeWidth="0.5" />
          <line x1="400" y1="50" x2="400" y2="550" stroke="#C8A96E" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-10 relative z-10">
        {/* Label */}
        <div className="flex justify-center mb-6">
          <SectionLabel>Our Philosophy</SectionLabel>
        </div>

        {/* Divider */}
        <div className="flex justify-center mb-12">
          <GoldDivider width="w-12" />
        </div>

        {/* Quote lines */}
        <blockquote className="font-serif text-3xl md:text-[48px] italic font-light text-forest leading-[1.35] mb-12">
          {quoteLines.map((line, i) => (
            <motion.span
              key={i}
              className="block overflow-hidden"
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={isInView ? { clipPath: 'inset(0 0% 0 0)' } : { clipPath: 'inset(0 100% 0 0)' }}
              transition={{
                duration: 0.9,
                delay: 0.2 + i * 0.4,
                ease: [0.76, 0, 0.24, 1],
              }}
            >
              {line}
            </motion.span>
          ))}
        </blockquote>

        {/* SVG Ornament */}
        <motion.div
          className="flex justify-center mb-14"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.6 }}
          aria-hidden="true"
        >
          <svg width="180" height="24" viewBox="0 0 180 24" fill="none">
            <line x1="0" y1="12" x2="68" y2="12" stroke="#C8A96E" strokeWidth="0.75" />
            <path d="M76 12 L82 6 L88 12 L82 18 Z" fill="#C8A96E" opacity="0.6" />
            <circle cx="90" cy="12" r="3" fill="#C8A96E" />
            <path d="M92 12 L98 6 L104 12 L98 18 Z" fill="#C8A96E" opacity="0.6" />
            <line x1="112" y1="12" x2="180" y2="12" stroke="#C8A96E" strokeWidth="0.75" />
          </svg>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 mb-16">
          {heroStats.map((stat, i) => (
            <div key={stat.label} className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.8 + i * 0.12 }}
              >
                <span className="font-serif text-5xl md:text-[56px] text-gold font-light leading-none">
                  {stat.value}
                </span>
                <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-taupe mt-2">
                  {stat.label}
                </p>
              </motion.div>
              {i < heroStats.length - 1 && (
                <div className="hidden md:block absolute translate-x-[calc(var(--col)*100%+50%)] top-1/2 -translate-y-1/2 w-px h-12 bg-gold/20" />
              )}
            </div>
          ))}
        </div>

        {/* Subtext */}
        <motion.p
          className="font-sans text-base md:text-[16px] text-taupe max-w-xl mx-auto leading-[1.9]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
         At Hotel Bella Casa, luxury is not just experienced — it is remembered.  
Surrounded by breathtaking landscapes, timeless architecture, and curated hospitality,  
every stay is designed to awaken serenity, indulgence, and unforgettable moments.
        </motion.p>
      </div>
    </section>
  )
}
