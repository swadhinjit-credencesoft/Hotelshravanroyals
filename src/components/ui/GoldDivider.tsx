'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface GoldDividerProps {
  className?: string
  width?: string
}

export default function GoldDivider({ className = '', width = 'w-16' }: GoldDividerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div ref={ref} className={`flex items-center gap-3 ${className}`}>
      <motion.div
        className={`h-px bg-gold ${width}`}
        initial={{ scaleX: 0, originX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.div
        className="w-1.5 h-1.5 rounded-full bg-gold"
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      />
      <motion.div
        className={`h-px bg-gold ${width}`}
        initial={{ scaleX: 0, originX: 1 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      />
    </div>
  )
}
