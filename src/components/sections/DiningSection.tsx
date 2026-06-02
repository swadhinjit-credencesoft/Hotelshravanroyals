'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import { venues } from '@/data/dining'
import SectionLabel from '@/components/ui/SectionLabel'
import GoldDivider from '@/components/ui/GoldDivider'

function VenueRow({ venue, index }: { venue: (typeof venues)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const isEven = index % 2 === 0

  useEffect(() => {
    let ScrollTrigger: typeof import('gsap/ScrollTrigger').ScrollTrigger
    import('gsap').then((g) => {
      import('gsap/ScrollTrigger').then((st) => {
        ScrollTrigger = st.ScrollTrigger
        g.gsap.registerPlugin(ScrollTrigger)
        if (imgRef.current) {
          g.gsap.fromTo(
            imgRef.current,
            { y: '-8%' },
            {
              y: '8%',
              ease: 'none',
              scrollTrigger: {
                trigger: ref.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
              },
            }
          )
        }
      })
    })
  }, [])

  const imageBlock = (
    <motion.div
      className="relative overflow-hidden rounded-sm"
      style={{ aspectRatio: '4/3' }}
      initial={{ clipPath: 'inset(0 100% 0 0)' }}
      animate={isInView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
      transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
    >
      <div ref={imgRef} className="absolute inset-0" style={{ height: '116%', top: '-8%' }}>
        <Image
          src={venue.image}
          alt={venue.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </motion.div>
  )

  const textBlock = (
    <motion.div
      className="flex flex-col justify-center py-8 md:py-0 md:px-16"
      initial={{ opacity: 0, x: isEven ? 60 : -60 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
    >
      {/* Cuisine tag */}
      <span className="inline-block bg-gold/10 text-gold font-sans text-[10px] uppercase tracking-[0.18em] px-3 py-1 rounded-sm self-start mb-5">
        {venue.cuisine}
      </span>

      <h3 className="font-display text-3xl md:text-[42px] italic text-forest mb-2 leading-tight">
        {venue.name}
      </h3>
      <p className="font-sans text-[13px] uppercase tracking-[0.14em] text-gold mb-5">
        {venue.tagline}
      </p>

      <p className="font-serif text-lg md:text-xl font-light text-taupe leading-[2] mb-6">
        {venue.description}
      </p>

      <div className="flex items-center gap-2 mb-8">
        <Clock size={13} className="text-gold" />
        <span className="font-sans text-[11px] uppercase tracking-[0.16em] text-gold">
          {venue.hours}
        </span>
      </div>

      <a
        href={venue.reservationHref}
        className="group inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.18em] text-forest border border-forest/30 px-7 py-3 rounded-sm hover:border-gold hover:text-gold transition-all duration-300 self-start"
        aria-label={`Reserve a table at ${venue.name}`}
      >
        Reserve a Table
        <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </motion.div>
  )

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-0 mb-24 last:mb-0">
      {isEven ? (
        <>
          <div className="md:pr-8">{imageBlock}</div>
          <div>{textBlock}</div>
        </>
      ) : (
        <>
          <div className="order-2 md:order-1">{textBlock}</div>
          <div className="order-1 md:order-2 md:pl-8">{imageBlock}</div>
        </>
      )}
    </div>
  )
}

export default function DiningSection() {
  return (
    <section className="bg-cream py-24" aria-label="Dining venues">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-20">
          <SectionLabel className="justify-center mb-5">Dining &amp; Local Flavors</SectionLabel>
          <h2 className="font-display text-4xl md:text-[52px] italic text-forest mb-6 leading-tight">
            Convenient Dining Options
          </h2>
          <GoldDivider className="justify-center mb-6" />
          <p className="font-serif text-xl font-light text-taupe max-w-xl mx-auto leading-relaxed">
            Enjoy premium pure vegetarian dining in Purnia. Relish partner deliveries or step out to savor the sweet shops and street delicacies of Vikass Market.
          </p>
        </div>

        {/* Venues */}
        {venues.map((venue, i) => (
          <VenueRow key={venue.id} venue={venue} index={i} />
        ))}

        <div className="mt-24 text-center">
           <Link
             href="/dining"
             className="inline-flex items-center gap-3 bg-forest text-ivory font-sans text-[11px] uppercase tracking-[0.2em] px-12 py-5 hover:bg-forest/90 transition-all rounded-sm group"
           >
              Explore Full Dining Experience
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
           </Link>
        </div>
      </div>
    </section>
  )
}
