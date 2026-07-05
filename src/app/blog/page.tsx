'use client';

import CinematicHero from '@/components/ui/CinematicHero';
import SectionLabel from '@/components/ui/SectionLabel';
import GoldDivider from '@/components/ui/GoldDivider';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    id: 'b1',
    title: 'Best Hotels in Purnea Near Bus Stand | Hotel Guide 2026',
    excerpt: 'Looking for the best hotel in Purnea near Bus Stand? Compare deluxe AC rooms, budget stays, family rooms, and luxury options at Hotel Surya Bella Casa.',
    date: 'Mar 15, 2026',
    category: 'Hotel Guide',
    image: '/blog1.png',
    link: '/rooms',
  },
  {
    id: 'b2',
    title: 'Rooftop Restaurant in Purnea | Best Family Dining Near Bus Stand',
    excerpt: 'Discover the best rooftop restaurant in Purnea near Bus Stand. Multi cuisine dining at Hotel Surya Bella Casa — Indian, Tandoor, Mughlai, Asian & Continental.',
    date: 'Feb 20, 2026',
    category: 'Restaurant & Dining',
    image: '/images/exterior7.jpeg',
    link: '/dining',
  },
  {
    id: 'b3',
    title: 'Banquet Hall & Wedding Venue in Purnea | Marriage Hall Near Bus Stand',
    excerpt: 'Plan your wedding at the best banquet hall in Purnea near Bus Stand. Wedding venue, marriage hall, conference hall for events and parties at Hotel Surya Bella Casa.',
    date: 'Jan 10, 2026',
    category: 'Events & Weddings',
    image: '/images/exterior8.jpeg',
    link: '/events',
  },
  {
    id: 'b4',
    title: 'Business Hotel in Purnea | Corporate Stay Near Bus Stand for Professionals',
    excerpt: 'Best business hotel in Purnea near Bus Stand with conference hall, meeting room, high-speed WiFi. Ideal for corporate travelers and office visitors.',
    date: 'Dec 5, 2025',
    category: 'Business Travel',
    image: '/images/exterior.jpeg',
    link: '/business-hotel-in-purnia',
  },
  {
    id: 'b5',
    title: 'Family Hotel in Purnea | Safe Family Stay Near Bus Stand & Vikass Market',
    excerpt: 'Best family hotel in Purnea near Bus Stand and Vikass Market. Spacious family rooms, safe environment, elevator access, 24/7 staff assistance.',
    date: 'Nov 18, 2025',
    category: 'Family Stay',
    image: '/images/exterior3.jpeg',
    link: '/family-hotel-in-purnia',
  },
  {
    id: 'b6',
    title: 'Places to Visit in Purnea | Nearby Attractions & Things to Do Near Bus Stand',
    excerpt: 'Explore places to visit in Purnea near Hotel Surya Bella Casa. Maa Puran Devi Temple, Purnea Court, shopping markets, and local attractions near Bus Stand.',
    date: 'Oct 22, 2025',
    category: 'Travel Guide',
    image: '/images/exterior5.jpeg',
    link: '/experiences',
  },
];

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
      "image": `https://hotelsuryabellacasa.com${post.image}`,
      "author": {
        "@type": "Organization",
        "name": "Hotel Surya Bella Casa"
      }
    }))
  }

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
        image='/bloghero.png'
      />

      <section className="py-32">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="text-center mb-24">
             <SectionLabel className="justify-center mb-6">Latest Articles</SectionLabel>
             <h2 className="font-display text-4xl md:text-6xl italic text-forest">Travel & Insights</h2>
             <GoldDivider className="justify-center mt-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
             {blogPosts.map((post, i) => (
                <motion.article 
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="group"
                >
                  <Link href={post.link} className="block">
                    <div className="relative aspect-[4/3] overflow-hidden border border-gold/10 mb-6">
                       <Image
                         src={post.image}
                         alt={post.title}
                         fill
                         className="object-cover transition-transform duration-1000 group-hover:scale-105"
                       />
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                       <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold">
                         {post.category}
                       </span>
                       <span className="w-1 h-1 rounded-full bg-gold/50" />
                       <span className="font-sans text-[10px] text-taupe/60 tracking-wider">
                         {post.date}
                       </span>
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl italic text-forest mb-4 group-hover:text-gold transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="font-serif text-base text-taupe leading-relaxed italic">
                      {post.excerpt}
                    </p>
                  </Link>
                </motion.article>
             ))}
          </div>
        </div>
      </section>

    </main>
  );
}
