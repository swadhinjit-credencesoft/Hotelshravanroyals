'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  life: number
  maxLife: number
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>(0)
  const particles = useRef<Particle[]>([])

  useEffect(() => {
    // Disable on mobile
    if (window.innerWidth < 1024) return

    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const setSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setSize()
    window.addEventListener('resize', setSize)

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -Math.random() * 0.4 - 0.1,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
      life: 0,
      maxLife: Math.random() * 300 + 200,
    })

    // Seed 35 particles
    for (let i = 0; i < 35; i++) {
      const p = createParticle()
      p.life = Math.random() * p.maxLife
      particles.current.push(p)
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.current.forEach((p, i) => {
        p.life++
        p.x += p.vx
        p.y += p.vy

        const progress = p.life / p.maxLife
        const alpha = p.opacity * Math.sin(progress * Math.PI)

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200, 169, 110, ${alpha})`
        ctx.fill()

        // Subtle glow
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2)
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2.5)
        grad.addColorStop(0, `rgba(200, 169, 110, ${alpha * 0.3})`)
        grad.addColorStop(1, 'rgba(200, 169, 110, 0)')
        ctx.fillStyle = grad
        ctx.fill()

        if (p.life >= p.maxLife) {
          particles.current[i] = createParticle()
        }
      })

      rafRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', setSize)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 2 }}
      aria-hidden="true"
    />
  )
}
