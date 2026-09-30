/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';

const nextConfig = {
  output: 'export',
  // Pin the tracing root to this project (avoids stray D:\package-lock.json
  // being picked as the inferred workspace root)
  outputFileTracingRoot: path.dirname(fileURLToPath(import.meta.url)),
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
  // NOTE: Security headers are NOT applied here because "output: export"
  // cannot emit HTTP headers. They are configured in public/.htaccess instead.
};

export default nextConfig;
