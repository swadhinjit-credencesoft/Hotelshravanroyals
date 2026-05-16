'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface SectionLabelProps {
  children: string
  className?: string
  light?: boolean
}

export default function SectionLabel({ children, className = '', light = false }: SectionLabelProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      className={`flex items-center gap-3 ${className}`}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.span
        className="inline-block h-px bg-gold"
        initial={{ width: 0 }}
        animate={isInView ? { width: 32 } : { width: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />
      <span
        className={`font-sans text-[10px] uppercase tracking-[0.22em] ${
          light ? 'text-gold-light' : 'text-gold'
        }`}
      >
        {children}
      </span>
    </motion.div>
  )
}
