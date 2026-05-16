'use client'

import { motion, useScroll, useTransform } from 'framer-motion'

export default function ScrollIndicator() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 120], [1, 0])

  return (
    <motion.div
      style={{ opacity }}
      className="flex flex-col items-center gap-3 select-none"
      aria-hidden="true"
    >
      {/* Mouse icon */}
      <div className="relative w-6 h-9 border border-ivory/50 rounded-full flex justify-center">
        <motion.div
          className="absolute top-1.5 w-0.5 bg-gold rounded-full"
          animate={{
            height: ['0px', '14px', '0px'],
            top: ['6px', '6px', '20px'],
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* SCROLL text rotated */}
      <motion.span
        className="font-sans text-[9px] tracking-[0.3em] uppercase text-ivory/50"
        style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        Scroll
      </motion.span>
    </motion.div>
  )
}
