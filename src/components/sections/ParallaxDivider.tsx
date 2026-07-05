'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { initGsap } from '@/lib/gsap'

export default function ParallaxDivider() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  useEffect(() => {
    let killed = false
    initGsap().then((g) => {
      if (killed || !imageRef.current) return
      g.gsap.fromTo(
        imageRef.current,
        { y: '-15%' },
        {
          y: '15%',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.4,
          },
        }
      )
    })
    return () => { killed = true }
  }, [])

  return (
    <div
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ height: '70vh' }}
      aria-label="Parallax quote divider"
    >
      {/* Parallax image */}
      <div
        ref={imageRef}
        className="absolute inset-0"
        style={{ height: '130%', top: '-15%' }}
      >
        <Image
          src='https://bookonelocal.in/cdn/IMG_3809.avif'
          alt="Hotel Surya Bella Casa Purnea - Best Hotel Near Bus Stand Purnea"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(26,16,4,0.52)', zIndex: 1 }}
      />

      {/* Quote */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6">
        <motion.div
          className="text-center max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <svg
            className="mx-auto mb-6 opacity-40"
            width="40"
            height="32"
            viewBox="0 0 40 32"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M0 32V19.2C0 8.53333 5.6 2.13333 16.8 0L18.4 3.2C13.3333 4.53333 10.1333 7.46667 8.8 12H16V32H0ZM24 32V19.2C24 8.53333 29.6 2.13333 40.8 0L42.4 3.2C37.3333 4.53333 34.1333 7.46667 32.8 12H40V32H24Z"
              fill="#C8A96E"
            />
          </svg>

          <blockquote className="font-serif text-2xl md:text-[36px] italic font-light text-ivory leading-[1.55] mb-6">
          Hospitality is not just a service. It is a feeling — the reassuring sensation that you are completely at home.
          </blockquote>

          <motion.p
            className="font-sans text-[11px] uppercase tracking-[0.28em] text-gold"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            — Hotel Surya Bella Casa
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}
