import type { Metadata } from 'next';
import CinematicHero from '@/components/ui/CinematicHero';
import BlogGrid from '@/components/sections/BlogGrid';
import { blogPosts } from '@/components/sections/blogPosts';

export const metadata: Metadata = {
  title: 'Purnea Travel Blog | Hotel Surya Bella Casa',
  description: 'Read the latest travel articles, hotel booking guides, and local attraction tips for Purnea, Bihar, from Hotel Surya Bella Casa.',
  keywords: [
    'Purnea travel blog',
    'best hotels in purnea',
    'places to visit in purnea',
    'top restaurants in purnea',
    'business travel guide to purnea',
    'wedding venues in purnea',
    'hotels near purnea bus stand',
    'things to do in purnea',
    'purnea bihar travel guide',
    'family stay in purnea',
  ],
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/blog',
  },
  openGraph: {
    title: 'Purnea Travel Blog | Hotel Surya Bella Casa',
    description: 'Travel guides, local insights, and hotel tips for Purnea, Bihar from Hotel Surya Bella Casa.',
    url: 'https://hotelsuryabellacasa.com/blog',
    siteName: 'Hotel Surya Bella Casa',
    type: 'website',
    images: [
      {
        url: 'https://bookonelocal.in/cdn/IMG_3815.avif',
        width: 1200,
        height: 630,
        alt: 'Hotel Surya Bella Casa Purnea Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Purnea Travel Blog | Hotel Surya Bella Casa',
    description: 'Read travel tips, food guides, and destination reviews for Purnea, Bihar.',
    images: ['https://bookonelocal.in/cdn/IMG_3815.avif'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function BlogPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://hotelsuryabellacasa.com/blog/#blog",
    "name": "Purnea Travel Blog | Hotel Surya Bella Casa",
    "description": "Travel guides, local insights, and hotel tips for Purnea, Bihar from Hotel Surya Bella Casa.",
    "url": "https://hotelsuryabellacasa.com/blog",
    "blogPost": blogPosts.map((post, i) => ({
      "@type": "BlogPosting",
      "@id": `https://hotelsuryabellacasa.com/blog/#post-${i + 1}`,
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.dateISO,
      "dateModified": post.dateModifiedISO,
      "image": post.image.startsWith('http') ? post.image : `https://hotelsuryabellacasa.com${post.image}`,
      "author": {
        "@type": "Organization",
        "name": "Hotel Surya Bella Casa"
      }
    }))
  };

  return (
    <main className="bg-cream min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <CinematicHero 
        label="Stories & Guides"
        title="The Purnea Journal"
        tagline="Discover the hidden gems, seasonal itineraries, and insider tips for your perfect getaway."
        image='https://bookonelocal.in/cdn/IMG_3815.avif'
      />
      <BlogGrid />
    </main>
  );
}
