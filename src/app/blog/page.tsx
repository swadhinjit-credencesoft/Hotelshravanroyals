import type { Metadata } from 'next';
import CinematicHero from '@/components/ui/CinematicHero';
import BlogGrid from '@/components/sections/BlogGrid';
import { blogPosts } from '@/components/sections/blogPosts';

export const metadata: Metadata = {
  title: 'Purulia Travel Blog | The Divine Oasis – Ajodhya Hill Resort',
  description: 'Read the latest travel articles, forest resort guides, and local attraction tips for Ajodhya Hill, Purulia, West Bengal, from The Divine Oasis.',
  keywords: [
    'Purulia travel blog',
    'best resorts near ajodhya hill',
    'places to visit in ajodhya hill',
    'top dining in purulia',
    'corporate offsite resort in purulia',
    'wedding venues in purulia',
    'resorts near purulia railway station',
    'things to do in purulia',
    'purulia west bengal travel guide',
    'forest resort in ajodhya hill',
  ],
  alternates: {
    canonical: 'https://thedivineoasisresort.com/blog',
  },
  openGraph: {
    title: 'Purulia Travel Blog | The Divine Oasis',
    description: 'Travel guides, local insights, and forest resort tips for Ajodhya Hill, Purulia from The Divine Oasis.',
    url: 'https://thedivineoasisresort.com/blog',
    siteName: 'The Divine Oasis',
    type: 'website',
    images: [
      {
        url: 'https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg',
        width: 1200,
        height: 630,
        alt: 'The Divine Oasis Purulia Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Purulia Travel Blog | The Divine Oasis',
    description: 'Read travel tips, food guides, and destination reviews for Ajodhya Hill and Purulia, West Bengal.',
    images: ['https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg'],
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
    "@id": "https://thedivineoasisresort.com/blog/#blog",
    "name": "Purulia Travel Blog | The Divine Oasis",
    "description": "Travel guides, local insights, and forest resort tips for Ajodhya Hill, Purulia from The Divine Oasis.",
    "url": "https://thedivineoasisresort.com/blog",
    "blogPost": blogPosts.map((post, i) => ({
      "@type": "BlogPosting",
      "@id": `https://thedivineoasisresort.com/blog/#post-${i + 1}`,
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.dateISO,
      "dateModified": post.dateModifiedISO,
      "image": post.image.startsWith('http') ? post.image : `https://thedivineoasisresort.com${post.image}`,
      "author": {
        "@type": "Organization",
        "name": "The Divine Oasis"
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
        title="The Purulia Journal"
        tagline="Discover the hidden gems, seasonal itineraries, and insider tips for your perfect forest getaway in Ajodhya."
        image='https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg'
      />
      <BlogGrid />
    </main>
  );
}