import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SectionLabel from '@/components/ui/SectionLabel'

export default function PrivacyPage() {
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
            "@id": "https://hotelsuryabellacasa.com/privacy/#webpage",
            "url": "https://hotelsuryabellacasa.com/privacy",
            "name": "Privacy Policy | Hotel Bella Casa",
            "description": "Read the privacy policy guidelines of Hotel Bella Casa regarding data collection, storage, and customer reservation security protocols.",
            "isPartOf": {
              "@type": "WebSite",
              "@id": "https://hotelsuryabellacasa.com/#website",
              "name": "Hotel Bella Casa",
              "url": "https://hotelsuryabellacasa.com"
            }
          })
        }}
      />

      <div className="pt-32 pb-32 px-6 md:px-10 max-w-4xl mx-auto">
        <SectionLabel className="mb-6">Legal</SectionLabel>
        <h1 className="font-display text-5xl md:text-7xl italic text-forest mb-12">Privacy Policy</h1>
        
        <div className="prose prose-forest font-sans text-taupe leading-loose space-y-8">
          <section>
            <h2 className="font-serif text-2xl text-forest mb-4">Introduction</h2>
            <p>
             This Privacy Policy governs the manner in which Hotel Surya Bella Casa collects, uses, maintains, and discloses information collected from users (each, a “User”) of the Hotel Surya Bella Casa website (“Site”). This Privacy Policy applies to the Site and all products and services offered by Hotel Surya Bella Casa.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-forest mb-4">Personal Identification Information (PII)</h2>
            <p>
              Hotel Surya Bella Casa may collect personal identification information from Users in various ways, including when Users visit our website, make a reservation, submit an inquiry, subscribe to updates, fill out forms, respond to surveys, or engage with services and features available on our Site.

             Depending on the nature of the interaction, Users may be asked to provide details such as: Name Email address Phone number Mailing address Payment or billing information
             Identification details required for hotel bookings or check-ins
             We collect personal information only when voluntarily provided by Users and solely for the purpose of delivering and improving our hospitality services. Users may choose not to provide certain personal information; however, doing so may limit access to specific services, reservations, or website features.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-forest mb-4">Non-personal identification information(NPII)</h2>
            <p>
              Hotel Surya Bella Casa may collect non-personal identification information whenever Users interact with our Site. This information may include the browser type, device information, operating system, Internet service provider, IP address, and other technical details related to a User’s connection with our website.
              Such information is collected to help us analyze website usage, improve functionality, enhance user experience, and maintain the security and performance of our digital platforms.
            </p>
          </section>

         <section className="space-y-6">
  <h2 className="font-serif text-2xl text-forest mb-4">
    HOW WE USE COLLECTED INFORMATION
  </h2>

  <div className="space-y-5 text-gray-700 leading-8">

    <div className="flex items-start gap-3">
      <span className="mt-2 text-forest">•</span>
      <p>
        Hotel Surya Bella Casa may collect and use Users’ personal information for the following purposes:
      </p>
    </div>

    <div className="flex items-start gap-3">
      <span className="mt-2 text-forest">•</span>
      <p>
        The information you provide helps us respond to inquiries, booking requests, and support needs more efficiently and deliver a better guest experience.
      </p>
    </div>

    <div className="flex items-start gap-3">
      <span className="mt-2 text-forest">•</span>
      <p>
        We may use aggregated information to understand how visitors and guests use our website, services, and hospitality offerings in order to improve user experience.
      </p>
    </div>

    <div className="flex items-start gap-3">
      <span className="mt-2 text-forest">•</span>
      <p>
        Feedback and usage information may be used to enhance our website functionality, hotel services, facilities, and customer satisfaction.
      </p>
    </div>

    <div className="flex items-start gap-3">
      <span className="mt-2 text-forest">•</span>
      <p>
        Information provided during bookings or transactions may be used solely for reservation confirmation, payment processing, and service fulfillment. We do not share this information with unauthorized third parties except where necessary to complete the requested service.
      </p>
    </div>

    <div className="flex items-start gap-3">
      <span className="mt-2 text-forest">•</span>
      <p>
        We may use information to administer promotions, surveys, contests, special offers, or other website features that enhance guest engagement.
      </p>
    </div>

    <div className="flex items-start gap-3">
      <span className="mt-2 text-forest">•</span>
      <p>
        Users who choose to subscribe may receive emails regarding reservations, hotel updates, special offers, promotional campaigns, or other hospitality-related information.
      </p>
    </div>

    <div className="flex items-start gap-3">
      <span className="mt-2 text-forest">•</span>
      <p>
        Users may unsubscribe from marketing communications at any time using the unsubscribe instructions included in emails or by contacting us directly through our website.
      </p>
    </div>

    <div className="flex items-start gap-3">
      <span className="mt-2 text-forest">•</span>
      <p>
        Hotel Surya Bella Casa does not sell Users’ personal information to third-party marketers. Information may only be shared with trusted partners or service providers where necessary to operate our services, process transactions, comply with legal obligations, or improve guest experience.
      </p>
    </div>

  </div>
</section>
          <section>
            <h2 className="font-serif text-2xl text-forest mb-4">HOW WE PROTECT YOUR INFORMATION</h2>
            <p>
              We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.

            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
