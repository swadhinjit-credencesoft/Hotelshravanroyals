import type { Metadata } from 'next'
import GallerySection from '@/components/sections/GallerySection'
import SectionLabel from '@/components/ui/SectionLabel'
import Image from 'next/image'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Photo Gallery & Virtual Tour',
  description: 'Browse high-resolution photos, guest images, and a video walkthrough of Hotel Surya Bella Casa in Purnea. See our rooms, dining, and facilities near Bus Stand. Book direct for the best rates.',
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
        <div className="max-w-[700px] mx-auto px-6">
          <SectionLabel light className="justify-center mb-6">Virtual Tour</SectionLabel>
          <h2 className="font-display text-4xl italic mb-6">Experience Hotel Surya Bella Casa</h2>
          <p className="font-serif text-ivory/70 mb-10 leading-relaxed">
            Watch our complete hotel walkthrough on YouTube — from our elegantly appointed rooms
            to our rooftop dining and banquet spaces.
          </p>
          <a
            href="https://www.youtube.com/watch?v=VOp9WYj2Ddg"
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative aspect-video rounded-lg overflow-hidden border border-gold/20 hover:border-gold/50 transition-all mb-8"
          >
            <Image
              src="https://img.youtube.com/vi/VOp9WYj2Ddg/maxresdefault.jpg"
              alt="Hotel Surya Bella Casa Purnea - Hotel Tour Video"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="700px"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-all">
              <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                <svg className="w-6 h-6 text-white ml-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
          </a>
          <a
            href="https://www.youtube.com/watch?v=VOp9WYj2Ddg"
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
            Follow us on Instagram <a href="https://www.instagram.com/hotel.bellacasaa/" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">@hotel.bellacasaa</a> and tag us to be featured.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[900px] mx-auto">
             {[
                { url: 'https://www.instagram.com/reel/DaQCHqszZCo/' },
                { url: 'https://www.instagram.com/p/DaM8qo_z7IA/' },
                { url: 'https://www.instagram.com/p/DZhtuSyzazL/' },
                { url: 'https://www.instagram.com/reel/DZROwfuza8f/' },
             ].map((post, i) => (
               <div key={i} className="overflow-hidden rounded-lg border border-gold/10 shadow-sm bg-white">
                 <blockquote
                   className="instagram-media"
                   data-instgrm-permalink={post.url}
                   data-instgrm-version="14"
                   style={{ background: '#FFF', border: 0, borderRadius: '3px', margin: '1px auto', maxWidth: '540px', minWidth: '326px', padding: 0, width: 'calc(100% - 2px)' }}
                 >
                   <a href={post.url} target="_blank" rel="noopener noreferrer">
                     View on Instagram
                   </a>
                 </blockquote>
               </div>
             ))}
          </div>
        </div>
        <Script src="//www.instagram.com/embed.js" strategy="lazyOnload" />
      </section>

    </main>
  )
}
