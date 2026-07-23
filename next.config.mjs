/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'bookonelocal.in',
      },
      {
        protocol: 'https',
        hostname: '**.instagram.com',
      },
    ],
  },
  // Improve performance for static export
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Enable compression
  compress: true,
  // Disable x-powered-by header
  poweredByHeader: false,
  // Strict mode for React
  reactStrictMode: true,
  // Security headers
  headers: async () => [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self), interest-cohort=()',
          },
          // NOTE: Strict-Transport-Security (HSTS) is not effective with
          // `output: 'export'` since it requires a server to set the header.
          // Configure HSTS at your hosting provider (e.g. Netlify, Vercel, Cloudflare)
          // instead: max-age=63072000; includeSubDomains; preload
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://www.instagram.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "img-src 'self' data: blob: https: http:",
              "font-src 'self' https://fonts.gstatic.com",
              "media-src 'self' https://bookonelocal.in https://*.bookonelocal.in",
              "connect-src 'self' https://api.thehotelmate.co https://www.google-analytics.com https://www.googletagmanager.com",
              "frame-src https://www.google.com https://www.youtube.com https://www.instagram.com https://bookone.io https://*.bookone.io",
              "frame-ancestors 'self' https://bookone.io https://*.google.com",
            ].join('; '),
          },
        ],
      },
  ],
};

export default nextConfig;
