'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Lenis from '@studio-freight/lenis'

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  // On every route change: scroll to top, unless a hash is present (e.g.
  // /events#enquiry) in which case scroll to that element after mount.
  useEffect(() => {
    const lenis = lenisRef.current
    if (!lenis) return

    const hash = window.location.hash
    if (hash) {
      const target = document.querySelector(hash)
      if (target) {
        requestAnimationFrame(() => {
          lenis.scrollTo(target as HTMLElement, { offset: -140, duration: 1.2 })
        })
        return
      }
    }
    lenis.scrollTo(0, { immediate: true })
  }, [pathname])

  return <>{children}</>
}
