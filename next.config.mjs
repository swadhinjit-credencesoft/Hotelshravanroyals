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
};

export default nextConfig;
