import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SectionLabel from '@/components/ui/SectionLabel'

export default function TermsPage() {
  return (
    <main className="bg-cream min-h-screen" id="main-content">
      <Navbar />
      
      {/* WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://unwindkarjat.com/terms/#webpage",
            "url": "https://unwindkarjat.com/terms",
            "name": "Terms of Service & Booking Conditions",
            "description": "Review the official terms of service, check-in schedules, lodging policies, and cancellation conditions for resort reservations at Unwind Karjat.",
            "isPartOf": {
              "@type": "WebSite",
              "@id": "https://unwindkarjat.com/#website",
              "name": "Unwind Karjat",
              "url": "https://unwindkarjat.com"
            }
          })
        }}
      />

      <div className="pt-32 pb-32 px-6 md:px-10 max-w-4xl mx-auto">
        <SectionLabel className="mb-6">Legal</SectionLabel>
        <h1 className="font-display text-5xl md:text-7xl italic text-forest mb-12">Terms &amp; Conditions</h1>
        
        <div className="prose prose-forest font-sans text-taupe leading-loose space-y-8">
          <section>
            <h2 className="font-serif text-2xl text-forest mb-4">Reservation Policy</h2>
            <p>
              All reservations are subject to availability and the specific terms of the package selected. A booking is confirmed once the reservation details and payment are received.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-forest mb-4">Cancellation &amp; No-Show</h2>
            <p>
              For full details, please see our <a href="/cancellation" className="text-gold underline">cancellation policy</a>. In short, cancellations made at least 48 hours before check-in receive a full refund, and no-shows forfeit the booking amount.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-forest mb-4">Guest Conduct</h2>
            <p>
              We ask all guests to respect the property, the grounds and the privacy of other guests, so that everyone can enjoy their stay.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-forest mb-4">Liability</h2>
            <p>
              Unwind Karjat takes every precaution to ensure guest safety; however, we are not liable for the loss of personal property or injuries sustained during activities on the property.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
