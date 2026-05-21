'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CinematicHero from '@/components/ui/CinematicHero';
import SectionLabel from '@/components/ui/SectionLabel';
import GoldDivider from '@/components/ui/GoldDivider';
import { motion } from 'framer-motion';
import Image from 'next/image';
// import Link from 'next/link';

const blogPosts = [
  {
    id: 'b1',
    title: 'Best things to do in Karjat (All Seasons)',
    excerpt: 'From pristine waterfalls to historic treks, discover the ultimate guide to exploring Karjat year-round.',
    date: 'Oct 12, 2024',
    category: 'Travel & Destination',
    image: '/blog1.png',
  },
  {
    id: 'b2',
    title: 'Karjat in Monsoon: What to Expect',
    excerpt: 'Experience the magic of the Sahyadris coming alive with lush greenery and cascading waterfalls.',
    date: 'Sep 28, 2024',
    category: 'Travel & Destination',
    image: '/images/exterior7.jpeg',
  },
  {
    id: 'b3',
    title: 'How to Plan a Corporate Retreat Near Mumbai',
    excerpt: 'A comprehensive checklist for organizing a successful offsite that blends strategy with serenity.',
    date: 'Aug 15, 2024',
    category: 'Hospitality & Events',
    image: '/images/exterior8.jpeg',
  },
];

export default function BlogPage() {
  return (
    <main className="bg-cream min-h-screen">
      <Navbar />
      <CinematicHero 
        label="Stories & Guides"
        title="The Karjat Journal"
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
                 <div>
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
                 </div>
               </motion.article>
             ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
