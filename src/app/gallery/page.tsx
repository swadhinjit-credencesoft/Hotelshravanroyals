import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import GallerySection from '@/components/sections/GallerySection'
import SectionLabel from '@/components/ui/SectionLabel'

export default function GalleryPage() {
  return (
    <main className="bg-cream min-h-screen" id="main-content">
      <Navbar />
      
      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "Unwind Karjat Photo Collection",
            "description": "Photos of Unwind Karjat — the pool, open lawns, rooms, dining and celebrations in Karjat.",
            "image": [
              'https://unwindkarjat.com/images/room1.jpeg',
              'https://unwindkarjat.com/images/room2.jpeg',
              'https://unwindkarjat.com/images/resort-exterior.png',
              'https://unwindkarjat.com/images/cottage-exterior.png',
              'https://unwindkarjat.com/images/pool.png',
              'https://unwindkarjat.com/images/dining.png'
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
      {/* <section className="py-24 bg-forest text-ivory text-center border-y border-gold/10">
        <div className="max-w-[1000px] mx-auto px-6">
          <SectionLabel light className="justify-center mb-6">Virtual Tour</SectionLabel>
          <h2 className="font-display text-4xl italic mb-12">Experience Unwind Karjat</h2>
          <div className="relative aspect-video w-full border border-gold/20 shadow-warm-lg">
             <iframe 
               width="100%" 
               height="100%" 
               src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&controls=1" 
               title="Unwind Karjat Resort Walkthrough" 
               frameBorder="0" 
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
               allowFullScreen
             ></iframe>
          </div>
        </div>
      </section> */}

      {/* UGC / Guest Photos Section */}
      <section className="py-24 bg-cream text-center">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <h2 className="font-display text-4xl md:text-5xl italic text-forest mb-6">Through Your Lens</h2>
          <p className="font-serif text-lg text-taupe mb-12">
            Share your favorite memories with us. Tag us to be featured. <br />
            <a href="https://www.instagram.com/unwind_karjat?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="text-gold font-sans uppercase tracking-widest text-[11px] hover:text-forest transition-colors mt-4 inline-block">@unwindkarjat</a>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
