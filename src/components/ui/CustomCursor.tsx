'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { stiffness: 500, damping: 28 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-gold rounded-full pointer-events-none z-[9999] mix-blend-difference hidden lg:block"
        style={{
          x: x,
          y: y,
          translateX: '-50%',
          translateY: '-50%',
          scale: isHovered ? 2.5 : 1,
        }}
        transition={{ type: 'spring', ...springConfig }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-gold rounded-full pointer-events-none z-[9999] hidden lg:block"
        style={{
          x: x,
          y: y,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
}
