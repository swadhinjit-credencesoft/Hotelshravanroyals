'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  href?: string
  target?: string
  rel?: string
  as?: 'button' | 'a'
  type?: 'button' | 'submit'
  disabled?: boolean
  id?: string
  'aria-label'?: string
}

export default function MagneticButton({
  children,
  className = '',
  onClick,
  href,
  target,
  rel,
  as: Tag = 'button',
  type = 'button',
  disabled,
  id,
  'aria-label': ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 15 })
  const springY = useSpring(y, { stiffness: 150, damping: 15 })

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const distX = (e.clientX - centerX) * 0.35
    const distY = (e.clientY - centerY) * 0.35
    x.set(distX)
    y.set(distY)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  const commonProps = {
    ref: ref as React.RefObject<HTMLButtonElement>,
    id,
    className,
    onClick,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    'aria-label': ariaLabel,
    style: { x: springX, y: springY },
  }

  if (Tag === 'a') {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        id={id}
        className={className}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        aria-label={ariaLabel}
        style={{ x: springX, y: springY }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      {...commonProps}
    >
      {children}
    </motion.button>
  )
}
