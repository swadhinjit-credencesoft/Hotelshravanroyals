/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
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
};

export default nextConfig;
