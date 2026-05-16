import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import NewsletterSection from '@/components/sections/NewsletterSection'
import SectionLabel from '@/components/ui/SectionLabel'

export default function ContactPage() {
  return (
    <main className="bg-cream min-h-screen">
      <Navbar />
      <div className="pt-32 pb-12 px-6 md:px-10 max-w-[1600px] mx-auto text-center">
        <SectionLabel className="justify-center mb-4">Concierge</SectionLabel>
        <h1 className="font-display text-5xl md:text-7xl italic text-forest mb-8">Contact Us</h1>
      </div>
      <NewsletterSection />
      <Footer />
    </main>
  )
}
