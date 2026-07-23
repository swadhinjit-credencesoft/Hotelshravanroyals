/**
 * UTM parameter persistence utility
 * Captures UTM params from the visitor's landing URL and appends them
 * to all external BookOne/HotelMate redirect URLs so attribution is preserved.
 */

export interface UTMParams {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
  gclid?: string
  fbclid?: string
}

/**
 * Read UTM and click-ID parameters from the current page URL.
 * Safe to call on SSR (returns empty object).
 */
export function getUTMParams(): UTMParams {
  if (typeof window === 'undefined') return {}

  const params = new URLSearchParams(window.location.search)
  const result: UTMParams = {}

  const keys: (keyof UTMParams)[] = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_term',
    'utm_content',
    'gclid',
    'fbclid',
  ]

  for (const key of keys) {
    const value = params.get(key)
    if (value) result[key] = value
  }

  // Also check sessionStorage for UTMs captured on a previous page load
  // (important for multi-page journeys like landing page → rooms → booking)
  try {
    const stored = sessionStorage.getItem('utm_params')
    if (stored) {
      const storedParams: UTMParams = JSON.parse(stored)
      for (const key of keys) {
        if (!result[key] && storedParams[key]) {
          result[key] = storedParams[key]
        }
      }
    }
  } catch {
    // sessionStorage may be blocked in private browsing
  }

  return result
}

/**
 * Persist the current page's UTM params to sessionStorage so they
 * survive navigation to other pages on the same site.
 * Call this once on page load (e.g. in a provider component).
 */
export function persistUTMParams(): void {
  if (typeof window === 'undefined') return
  const params = new URLSearchParams(window.location.search)
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid']
  const captured: Record<string, string> = {}

  for (const key of utmKeys) {
    const value = params.get(key)
    if (value) captured[key] = value
  }

  if (Object.keys(captured).length > 0) {
    try {
      sessionStorage.setItem('utm_params', JSON.stringify(captured))
    } catch {
      // Ignore storage errors
    }
  }
}

/**
 * Append UTM params to a URL string.
 * Existing params in the URL are preserved; UTMs are only added if not already present.
 */
export function appendUTMToURL(url: string, utmParams?: UTMParams): string {
  const params = utmParams ?? getUTMParams()
  if (Object.keys(params).length === 0) return url

  try {
    const parsed = new URL(url)
    for (const [key, value] of Object.entries(params)) {
      if (value && !parsed.searchParams.has(key)) {
        parsed.searchParams.set(key, value as string)
      }
    }
    return parsed.toString()
  } catch {
    // If URL parsing fails, return original URL
    return url
  }
}
