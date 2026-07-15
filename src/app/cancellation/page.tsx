import type { Metadata } from 'next'
import SectionLabel from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Cancellation & Refund Policy | Hotel Surya Bella Casa',
  description: 'Read the cancellation and refund policy of Hotel Surya Bella Casa, Purnea. Learn about booking amendments, refund timelines, and no-show policy for direct reservations.',
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/cancellation',
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function CancellationPage() {
  return (
    <main className="bg-cream min-h-screen">
      
      
      {/* WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://hotelsuryabellacasa.com/cancellation/#webpage",
            "url": "https://hotelsuryabellacasa.com/cancellation",
            "name": "Cancellation & Refund Policy | Hotel Surya Bella Casa",
            "description": "Read the cancellation and refund policy guidelines of Hotel Surya Bella Casa regarding direct booking reservation amendments, monsoon policies, and refunds.",
            "isPartOf": {
              "@type": "WebSite",
              "@id": "https://hotelsuryabellacasa.com/#website",
              "name": "Hotel Surya Bella Casa",
              "url": "https://hotelsuryabellacasa.com"
            }
          })
        }}
      />

      <div className="pt-32 pb-32 px-6 md:px-10 max-w-4xl mx-auto">
        <SectionLabel className="mb-6">Legal</SectionLabel>
        <h1 className="font-display text-5xl md:text-7xl italic text-forest mb-12">Cancellation Policy</h1>
        
        <div className="prose prose-forest font-sans text-taupe leading-loose space-y-8">
         <section className="space-y-6">
  <h2 className="font-serif text-2xl text-forest mb-4">
    Cancellation & Amendment Charges
  </h2>

  <div className="space-y-5 text-gray-700 leading-8">

    <div className="flex gap-3">
      <span className="text-forest leading-8">•</span>
      <p className="flex-1">
        Cancellation made before 48 hours of the scheduled check-in time will incur a cancellation charge of 10% of the booking amount.
      </p>
    </div>

    <div className="flex gap-3">
      <span className="text-forest leading-8">•</span>
      <p className="flex-1">
        Cancellation made between 48 hours and 24 hours prior to the scheduled check-in time will incur a cancellation charge of 50% of the booking amount.
      </p>
    </div>

    <div className="flex gap-3">
      <span className="text-forest leading-8">•</span>
      <p className="flex-1">
        Cancellation made within 24 hours of the scheduled check-in time will incur 100% cancellation charges.
      </p>
    </div>

    <div className="flex gap-3">
      <span className="text-forest leading-8">•</span>
      <p className="flex-1">
        Cancellation requests will be considered valid only if processed through the same website, platform, or booking channel used for the original reservation.
      </p>
    </div>

    <div className="flex gap-3">
      <span className="text-forest leading-8">•</span>
      <p className="flex-1">
        The exact time of cancellation recorded by the booking channel will be used to calculate the applicable refund amount.
      </p>
    </div>

    <div className="flex gap-3">
      <span className="text-forest leading-8">•</span>
      <p className="flex-1">
        Failure of the guest to arrive at the hotel without prior cancellation will be treated as a “No Show” and the full booking amount shall be chargeable.
      </p>
    </div>

    <div className="flex gap-3">
      <span className="text-forest leading-8">•</span>
      <p className="flex-1">
        Bookings may be amended only once and must be requested at least 48 hours prior to the scheduled check-in time.
      </p>
    </div>

    <div className="flex gap-3">
      <span className="text-forest leading-8">•</span>
      <p className="flex-1">
        Once a booking has been amended, it shall not be eligible for cancellation.
      </p>
    </div>

  </div>
</section>
     <section className="space-y-6">
  <h2 className="font-serif text-2xl text-forest mb-4">
    General Terms & Conditions
  </h2>

  <div className="space-y-5 text-gray-700 leading-8">

    <div className="flex gap-3">
      <span className="text-forest leading-8">•</span>
      <p className="flex-1">
        Early check-in or late check-out is subject to room availability and may be chargeable as per hotel policy.
      </p>
    </div>

    <div className="flex gap-3">
      <span className="text-forest leading-8">•</span>
      <p className="flex-1">
        Standard Check-In Time is 1:00 PM and Check-Out Time is 12:00 Noon.
      </p>
    </div>

    <div className="flex gap-3">
      <span className="text-forest leading-8">•</span>
      <p className="flex-1">
        Refund or cancellation will not be applicable for amended bookings.
      </p>
    </div>

    <div className="flex gap-3">
      <span className="text-forest leading-8">•</span>
      <p className="flex-1">
        Guests are required to present a valid government-issued photo identity proof with address at the time of check-in, such as a Driving License, Voter ID Card, or Passport.
      </p>
    </div>

    <div className="flex gap-3">
      <span className="text-forest leading-8">•</span>
      <p className="flex-1">
        PAN Card shall not be accepted as a valid identity proof for check-in purposes.
      </p>
    </div>

    <div className="flex gap-3">
      <span className="text-forest leading-8">•</span>
      <p className="flex-1">
        Advance booking rates and rates during the stay may differ. The tariff applicable at the time of billing at Hotel Surya Bella Casa shall be considered final.
      </p>
    </div>

    <div className="flex gap-3">
      <span className="text-forest leading-8">•</span>
      <p className="flex-1">
        The Credit Card holder used for booking must be one of the staying guests or travelers.
      </p>
    </div>

    <div className="flex gap-3">
      <span className="text-forest leading-8">•</span>
      <p className="flex-1">
        Hotel Surya Bella Casa reserves the right to cancel or modify reservations if fraudulent, inappropriate, or suspicious activities are identified, or if the reservation appears to contain errors or incorrect information.
      </p>
    </div>

    <div className="flex gap-3">
      <span className="text-forest leading-8">•</span>
      <p className="flex-1">
        Extension of the check-out date mentioned during check-in or advance booking is subject to room availability and management approval.
      </p>
    </div>

    <div className="flex gap-3">
      <span className="text-forest leading-8">•</span>
      <p className="flex-1">
        Hotel Surya Bella Casa reserves the right to deny accommodation in accordance with hotel policies and applicable regulations.
      </p>
    </div>

    <div className="flex gap-3">
      <span className="text-forest leading-8">•</span>
      <p className="flex-1">
        Charges on credit or debit cards may appear under the hotel or parent hospitality group name during payment processing.
      </p>
    </div>

    <div className="flex gap-3">
      <span className="text-forest leading-8">•</span>
      <p className="flex-1">
        For any queries related to reservations, cancellations, amendments, or booking assistance, guests are requested to contact Hotel Surya Bella Casa through the official contact details provided on the website.
      </p>
    </div>

  </div>
</section>
   </div>
      </div>
    </main>
  )
}
