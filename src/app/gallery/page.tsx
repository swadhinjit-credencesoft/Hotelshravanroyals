import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import GallerySection from '@/components/sections/GallerySection'
import SectionLabel from '@/components/ui/SectionLabel'

export default function GalleryPage() {
  return (
    <main className="bg-cream min-h-screen">
      <Navbar />
      <div className="pt-32 pb-12 px-6 md:px-10 max-w-[1600px] mx-auto">
        <SectionLabel className="mb-4">Visual Stories</SectionLabel>
        <h1 className="font-display text-5xl md:text-7xl italic text-forest mb-8">The Collection</h1>
      </div>
      <GallerySection />
      <Footer />
    </main>
  )
}
