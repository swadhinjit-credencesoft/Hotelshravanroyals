import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SectionLabel from '@/components/ui/SectionLabel'

export default function TermsPage() {
  return (
    <main className="bg-cream min-h-screen">
      <Navbar />
      
      {/* WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://hotelbellacasa.com/terms/#webpage",
            "url": "https://hotelbellacasa.com/terms",
            "name": "Terms of Service & Booking Conditions | Hotel Bella Casa",
            "description": "Review the official terms of service, check-in schedules, lodging policies, and cancellation conditions for resort reservations at Hotel Bella Casa.",
            "isPartOf": {
              "@type": "WebSite",
              "@id": "https://hotelbellacasa.com/#website",
              "name": "Hotel Bella Casa",
              "url": "https://hotelbellacasa.com"
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
              All reservations are subject to availability and the specific terms of the room selected. A valid payment method is required to secure your reservation.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-forest mb-4">Cancellation &amp; No-Show</h2>
            <p>
              To respect our scheduling, cancellations must be made at least 48 hours prior to check-in (12:00 PM) for a full refund. Cancellations made within the 48-hour window will be subject to a 100% room reservation fee.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-forest mb-4">Hotel Conduct</h2>
            <p>
              Hotel Bella Casa is committed to providing a comfortable and private stay. We ask all guests to respect the comfort of other guests and follow the hotel&apos;s policies during their stay.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-forest mb-4">Liability</h2>
            <p>
              The inn takes every precaution to ensure guest safety; however, we are not liable for the loss of personal property or injuries sustained during self-guided explorations.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
