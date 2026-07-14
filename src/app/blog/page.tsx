import type { Metadata } from 'next';
import CinematicHero from '@/components/ui/CinematicHero';
import BlogGrid from '@/components/sections/BlogGrid';
import { blogPosts } from '@/components/sections/blogPosts';

export const metadata: Metadata = {
  title: 'Purnia Travel Blog',
  description: 'Read the latest travel articles, hotel booking guides, and local attraction tips for Purnia, Bihar, from Hotel Surya Bella Casa.',
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/blog',
  },
  openGraph: {
    title: 'Purnia Travel Blog | Hotel Surya Bella Casa',
    description: 'Travel guides, local insights, and hotel tips for Purnia, Bihar from Hotel Surya Bella Casa.',
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
    title: 'Purnia Travel Blog | Hotel Surya Bella Casa',
    description: 'Read travel tips, food guides, and destination reviews for Purnia, Bihar.',
    images: ['https://bookonelocal.in/cdn/IMG_3815.avif'],
  },
};

export default function BlogPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://hotelsuryabellacasa.com/blog/#blog",
    "name": "Purnia Travel Blog | Hotel Surya Bella Casa",
    "description": "Travel guides, local insights, and hotel tips for Purnia, Bihar from Hotel Surya Bella Casa.",
    "url": "https://hotelsuryabellacasa.com/blog",
    "blogPost": blogPosts.map((post, i) => ({
      "@type": "BlogPosting",
      "@id": `https://hotelsuryabellacasa.com/blog/#post-${i + 1}`,
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date,
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
        title="The Purnia Journal"
        tagline="Discover the hidden gems, seasonal itineraries, and insider tips for your perfect getaway."
        image='https://bookonelocal.in/cdn/IMG_3815.avif'
      />
      <BlogGrid />
    </main>
  );
}
