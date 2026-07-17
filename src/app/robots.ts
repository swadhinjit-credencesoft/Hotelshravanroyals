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
        disallow: ['/api/', '/_next/', '/admin/'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  }
}
