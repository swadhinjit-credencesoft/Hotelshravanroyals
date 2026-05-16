import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import DiningSection from '@/components/sections/DiningSection'
import CinematicHero from '@/components/ui/CinematicHero'
import SectionLabel from '@/components/ui/SectionLabel'

export default function DiningPage() {
  return (
    <main className="bg-cream min-h-screen">
      <Navbar />
      <CinematicHero 
        label="Culinary Excellence"
        title="A Symphony for the Senses"
        tagline="From wood-fired coastal grills to twelve-course forest immersions, every plate tells a story of the land."
        image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=2400&q=95"
      />
      
      <section className="py-32 bg-cream text-center">
        <div className="max-w-4xl mx-auto px-6">
           <SectionLabel className="justify-center mb-8">The Philosophy</SectionLabel>
           <h2 className="font-serif text-3xl md:text-5xl italic text-forest mb-8">
             &ldquo;The estate is our larder. The horizon is our clock.&rdquo;
           </h2>
           <p className="font-sans text-lg text-taupe leading-relaxed">
             Our Executive Chef works in concert with our resident botanist and local fisherman to ensure that every ingredient is harvested at the peak of its expression. We do not follow trends; we follow the seasons.
           </p>
        </div>
      </section>

      <DiningSection />
      <Footer />
    </main>
  )
}
