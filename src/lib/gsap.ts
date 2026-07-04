let initPromise: Promise<typeof import('gsap')> | null = null

export function initGsap() {
  if (!initPromise) {
    initPromise = (async () => {
      const g = await import('gsap')
      const st = await import('gsap/ScrollTrigger')
      g.gsap.registerPlugin(st.ScrollTrigger)
      return g
    })()
  }
  return initPromise
}
