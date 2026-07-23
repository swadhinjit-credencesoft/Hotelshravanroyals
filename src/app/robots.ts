import { MetadataRoute } from 'next'

// Required for Next.js static export (output: 'export')
export const dynamic = 'force-static'

const BASE_URL = 'https://hotelsuryabellacasa.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/search?',
          '/*.json$',
          '/404',
          '/500',
        ],
      },
      {
        userAgent: 'GPTBot',
        disallow: '/',
      },
      {
        userAgent: 'CCBot',
        disallow: '/',
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  }
}
