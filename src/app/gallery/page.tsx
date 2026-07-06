import type { Metadata } from 'next'
import GallerySection from '@/components/sections/GallerySection'
import SectionLabel from '@/components/ui/SectionLabel'
import Image from 'next/image'
import { siteConfig } from '@/data/site'

export const metadata: Metadata = {
  title: 'Photo Gallery & Virtual Tour | Hotel Surya Bella Casa Purnea',
  description: 'Browse high-resolution photos, guest images, and a video walkthrough of Hotel Surya Bella Casa in Purnea. See our rooms, dining, and facilities near Bus Stand.',
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/gallery',
  },
}

export default function GalleryPage() {
  return (
    <main className="bg-cream min-h-screen">
      
      
      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "Hotel Surya Bella Casa Photo Collection",
            "description": "High-resolution photos of our clean accommodations, dining options, and hospitable atmosphere in Purnia, Bihar.",
            "image": [
              "https://hotelsuryabellacasa.com/images/room1.jpeg",
              "https://hotelsuryabellacasa.com/images/room2.jpeg"
            ]
          })
        }}
      />

      <div className="pt-32 pb-12 px-6 md:px-10 max-w-[1600px] mx-auto text-center">
        <SectionLabel className="justify-center mb-4">Visual Stories</SectionLabel>
        <h1 className="font-display text-5xl md:text-7xl italic text-forest mb-8">The Collection</h1>
      </div>

      <GallerySection />

      {/* Video Walkthrough Section */}
      <section className="py-24 bg-forest text-ivory text-center border-y border-gold/10">
        <div className="max-w-[600px] mx-auto px-6">
          <SectionLabel light className="justify-center mb-6">Virtual Tour</SectionLabel>
          <h2 className="font-display text-4xl italic mb-6">Experience Hotel Surya Bella Casa</h2>
          <p className="font-serif text-ivory/70 mb-10 leading-relaxed">
            Watch our complete hotel walkthrough on YouTube — from our elegantly appointed rooms
            to our rooftop dining and banquet spaces.
          </p>
          <a
            href={siteConfig.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-sans text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-sm transition-all shadow-lg group"
          >
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            Watch on YouTube
          </a>
        </div>
      </section>

      {/* UGC / Guest Photos Section */}
      <section className="py-24 bg-cream text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="font-display text-4xl md:text-5xl italic text-forest mb-6">Through Your Lens</h2>
          <p className="font-serif text-lg text-taupe mb-12">
            Share your favorite memories with us. Tag us to be featured. <br />
            <span className="text-gold font-sans uppercase tracking-widest text-[11px] mt-4 inline-block">Tag us to be featured</span>
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {/* Simulating IG posts */}
             {[1, 2, 3, 4].map(num => (
               <div key={num} className="relative aspect-square overflow-hidden group cursor-pointer border border-gold/10">
                 <Image src={'/images/exterior.jpeg'} alt="Hotel Surya Bella Casa Purnea Photo Gallery - Best Hotel Near Bus Stand" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-sans text-xs">View on Instagram</span>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

    </main>
  )
}
