import { MetadataRoute } from 'next'

// Required for Next.js static export (output: 'export')
export const dynamic = 'force-static'

const BASE_URL = 'https://hotelsuryabellacasa.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Allow all bots to crawl the full site
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
      {
        // Explicit full access for Googlebot
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        // Explicit full access for Googlebot-Image
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
      {
        // Explicit full access for Googlebot-Mobile
        userAgent: 'Googlebot-Mobile',
        allow: '/',
      },
      {
        // Explicit full access for Google Inspection Tool
        userAgent: 'Google-InspectionTool',
        allow: '/',
      },
      {
        // Allow AdsBot for ad quality checks
        userAgent: 'AdsBot-Google',
        allow: '/',
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  }
}
