import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import GallerySection from '@/components/sections/GallerySection'
import SectionLabel from '@/components/ui/SectionLabel'
import Image from 'next/image'

export default function GalleryPage() {
  return (
    <main className="bg-cream min-h-screen">
      <Navbar />
      
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
              '/images/room1.jpeg',
              '/images/room2.jpeg'
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
        <div className="max-w-[1000px] mx-auto px-6">
          <SectionLabel light className="justify-center mb-6">Virtual Tour</SectionLabel>
          <h2 className="font-display text-4xl italic mb-12">Experience Hotel Bella Casa</h2>
          <div className="relative aspect-video w-full border border-gold/20 shadow-warm-lg">
             <iframe 
               width="100%" 
               height="100%" 
               src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&controls=1" 
               title="Hotel Bella Casa Resort Walkthrough" 
               frameBorder="0" 
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
               allowFullScreen
             ></iframe>
          </div>
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
                 <Image src={'/images/exterior.jpeg'} alt="Guest photo" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-sans text-xs">View on Instagram</span>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
