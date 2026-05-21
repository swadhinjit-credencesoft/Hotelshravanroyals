'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { heroStats } from '@/data/hero'
import GoldDivider from '@/components/ui/GoldDivider'
import SectionLabel from '@/components/ui/SectionLabel'

export default function BrandStatement() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-cream-light py-24 text-center sm:py-28 md:py-32"
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

      <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-10">
        {/* Label */}
        <div className="mb-6 flex justify-center">
          <SectionLabel>Our Philosophy</SectionLabel>
        </div>

        {/* Divider */}
        <div className="mb-12 flex justify-center">
          <GoldDivider width="w-12" />
        </div>

        {/* Quote lines */}
        <blockquote className="mx-auto mb-12 max-w-4xl font-serif text-xl font-light italic leading-[1.4] text-forest sm:text-3xl md:text-[44px] lg:text-[48px]">
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            &ldquo;Shravan Royals is more than a stay &mdash; it is a world of refined luxury, peaceful escapes, and unforgettable experiences where comfort, beauty, and hospitality exist in perfect harmony.&rdquo;
          </motion.span>
        </blockquote>

        {/* SVG Ornament */}
        <motion.div
          className="mb-14 flex justify-center"
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
        <div className="mb-16 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0">
          {heroStats.map((stat, i) => (
            <div key={stat.label} className="relative flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.8 + i * 0.12 }}
              >
                <span className="font-serif text-5xl font-light leading-none text-gold md:text-[56px]">
                  {stat.value}
                </span>
                <p className="mt-2 font-sans text-[11px] uppercase tracking-[0.18em] text-taupe">
                  {stat.label}
                </p>
              </motion.div>
              {i < heroStats.length - 1 && (
                <div className="absolute right-0 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-gold/20 md:block" />
              )}
            </div>
          ))}
        </div>

        {/* Subtext */}
        <motion.p
          className="mx-auto max-w-xl font-sans text-base leading-[1.9] text-taupe md:text-[16px]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          At Shravan Royals, luxury is not just experienced &mdash; it is remembered. Surrounded by breathtaking landscapes,
          timeless architecture, and curated hospitality, every stay is designed to awaken serenity, indulgence, and
          unforgettable moments.
        </motion.p>
      </div>
    </section>
  )
}
