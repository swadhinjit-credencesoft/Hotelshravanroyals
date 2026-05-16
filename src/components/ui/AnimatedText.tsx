'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface AnimatedTextProps {
  children: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
  className?: string
  splitBy?: 'words' | 'lines'
  delay?: number
  once?: boolean
}

export default function AnimatedText({
  children,
  as: Tag = 'p',
  className = '',
  splitBy = 'words',
  delay = 0,
  once = true,
}: AnimatedTextProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once, margin: '-60px' })

  const items = splitBy === 'words' ? children.split(' ') : children.split('\n')

  return (
    <Tag
      ref={ref as React.RefObject<HTMLHeadingElement>}
      className={`overflow-hidden ${className}`}
      style={{ perspective: '1000px' }}
    >
      {items.map((item, i) => (
        <motion.span
          key={i}
          className="inline-block"
          style={{ marginRight: splitBy === 'words' ? '0.28em' : 0, display: splitBy === 'lines' ? 'block' : 'inline-block' }}
          initial={{ opacity: 0, y: 70, rotateX: -20 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, rotateX: 0 }
              : { opacity: 0, y: 70, rotateX: -20 }
          }
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
            delay: delay + i * 0.09,
          }}
        >
          {item}
        </motion.span>
      ))}
    </Tag>
  )
}
