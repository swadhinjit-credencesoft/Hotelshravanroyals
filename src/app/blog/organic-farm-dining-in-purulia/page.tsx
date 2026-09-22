import type { Metadata } from 'next'
import Link from 'next/link'
import BlogArticleLayout from '@/components/layout/BlogArticleLayout'

export const metadata: Metadata = {
  title: 'Organic Farm Dining in Purulia | Farm-to-Table at Ajodhya',
  description: 'Discover organic farm-to-table dining in Purulia. Fresh produce, a signature veg thali, and open-air meals at The Divine Oasis organic farm near Ajodhya Hill.',
  keywords: [
    'organic farm dining purulia',
    'farm to table purulia',
    'veg thali ajodhya',
    'organic restaurant purulia',
    'farm fresh dining ajodhya hill',
    'veg restaurant in purulia',
    'organic food purulia',
    'dining at the divine oasis purulia',
  ],
  alternates: { canonical: 'https://thedivineoasisresort.com/blog/organic-farm-dining-in-purulia' },
  openGraph: {
    title: 'Organic Farm Dining in Purulia | The Divine Oasis',
    description: 'Experience organic farm-to-table dining in Purulia. Fresh vegetables from the on-site farm, a signature veg thali, and open-air forest meals at The Divine Oasis.',
    url: 'https://thedivineoasisresort.com/blog/organic-farm-dining-in-purulia',
    siteName: 'The Divine Oasis',
    type: 'article',
    publishedTime: '2026-02-20T00:00:00.000Z',
    modifiedTime: '2026-07-23T00:00:00.000Z',
    images: [{ url: 'https://bookonelocal.in/cdn/2026-05-13-064504242-WhatsApp Image 2026-05-11 at 15.42.12.jpg', width: 1200, height: 630, alt: 'Organic farm dining in Purulia - The Divine Oasis' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Organic Farm Dining in Purulia',
    description: 'Farm-to-table dining in Purulia at The Divine Oasis — organic vegetables, veg thali, and open-air meals on Ajodhya Hill.',
    images: ['https://bookonelocal.in/cdn/2026-05-13-064504242-WhatsApp Image 2026-05-11 at 15.42.12.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
}

export default function BlogPost() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Organic Farm Dining in Purulia | Farm-to-Table at Ajodhya",
    "description": "Discover organic farm-to-table dining in Purulia at The Divine Oasis — fresh produce, a signature veg thali, and open-air forest meals.",
    "image": "https://bookonelocal.in/cdn/2026-05-13-064504242-WhatsApp Image 2026-05-11 at 15.42.12.jpg",
    "datePublished": "2026-02-20",
    "dateModified": "2026-07-23",
    "author": { "@type": "Organization", "name": "The Divine Oasis" },
    "publisher": { "@type": "Organization", "name": "The Divine Oasis" }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does The Divine Oasis have an organic farm?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, The Divine Oasis runs an organic farm on Ajodhya Hill, Purulia, where seasonal vegetables used in the kitchen are grown.",
        },
      },
      {
        "@type": "Question",
        name: "What is served in the signature veg thali?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The veg thali features fresh seasonal vegetables from the organic farm, rice, dal, local curries, chokha-style dishes, salad, and a dessert - an authentic taste of Purulia.",
        },
      },
      {
        "@type": "Question",
        name: "Is farm dining vegetarian only?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The farm concept focuses on vegetarian thali and fresh produce, while the resort can plan optional barbeque and non-vegetarian spreads for events on request.",
        },
      },
      {
        "@type": "Question",
        name: "Can guests visit the organic farm?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, guests can walk through the organic farm, see seasonal crops, and even watch produce go from the field to the kitchen.",
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BlogArticleLayout
        metadata={metadata}
        schema={schema}
        category="Restaurant & Dining"
        date="Feb 20, 2026"
        heroImage="https://bookonelocal.in/cdn/2026-05-13-064504242-WhatsApp Image 2026-05-11 at 15.42.12.jpg"
        heroAlt="Organic farm dining at The Divine Oasis - farm-to-table dining in Purulia"
        relatedArticles={[
          { title: 'Best Dining Near Ajodhya Hill', link: '/blog/best-dining-near-ajodhya-hill' },
          { title: 'Local Food Guide in Purulia', link: '/blog/local-food-guide-in-purulia' },
          { title: 'Family Dining in Purulia', link: '/blog/family-dining-in-purulia' },
          { title: 'Best Dinner Place in Purulia', link: '/blog/best-dinner-place-in-purulia' },
        ]}
        serviceLinks={[
          { label: 'Dining', link: '/dining' },
          { label: 'Rooms', link: '/rooms' },
          { label: 'Gallery', link: '/gallery' },
          { label: 'Contact', link: '/contact' },
          { label: 'Book Now', link: 'https://bookone.io/The-Divine-Oasis?bookingEngine=true' },
        ]}
      >
        <p>
          Food is where a holiday truly sinks in. And in Purulia, the most memorable meals are the ones that come straight
          from the earth. <strong>Organic farm dining</strong> at <strong><Link href="/" className="text-gold hover:underline">The Divine Oasis</Link></strong> turns a
          simple lunch into the highlight of your Ajodhya Hill stay — vegetables harvested from the on-site organic farm,
          cooked simply, and served in the open air with the forest for company.
        </p>
        <p>
          The concept is deliberately unhurried. Our kitchen works with what the farm gives it each season, so the menu
          changes through the year. The signature <strong>Veg Thali</strong> brings together rice, dal, seasonal sabzi, local
          chokha-style sides, salad, and a dessert — a complete, satisfying plate that needs nothing else. For a deeper
          dive into regional dishes, see our <Link href="/blog/local-food-guide-in-purulia" className="text-gold hover:underline">Purulia food guide</Link>.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">From Farm to Table in Purulia</h2>
        <p>
          Purulia is largely an agrarian district, and villages around <strong>Ajodhya Hill</strong> still grow much of what goes
          into local kitchens — vegetables, mustard, paddy, and oilseeds. The Divine Oasis connects this tradition to its own
          guests through a small <strong>organic farm</strong> on the resort grounds. Guests can walk the rows with our staff, see what
          is flowering, and even request that a particular vegetable appears in that evening&apos;s meal.
        </p>
        <p>
          This farm-to-table loop keeps the food fresh and the carbon footprint small. It also makes dining here different from a
          standard restaurant meal: you taste the season rather than a fixed menu that runs all year.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">The Signature Veg Thali Experience</h2>
        <p>
          The heart of the farm dining experience is the <strong>Veg Thali</strong>. Served in the open seating area, it typically
          includes steamed rice, dal, two seasonal vegetables, a leafy green preparation, chokha or bharta, papad, salad, and a
          local sweet. Everything is cooked fresh for each guest — no reheated buffets, no shortcuts.
        </p>
        <p>
          For groups, the kitchen prepares <strong>family-style servings</strong> so everyone at the table eats together, the way
          Bengali bhoj gatherings do. Families travelling with kids will find the thali easy to customise; read our
          <Link href="/blog/family-dining-in-purulia" className="text-gold hover:underline"> family dining guide</Link> for tips.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Open-Air Dining with Forest Views</h2>
        <p>
          On Ajodhya Hill, the setting is as much a part of the meal as the food. Our <strong>seating areas</strong> sit under
          tree cover, offer good breeze during the day, and are comfortably lit as evening falls. Whether you eat breakfast
          before a trek to the forest reserve (0.4 km away) or a relaxed dinner after a trip to <strong>Thurga Dam (13.8 km)</strong>,
          the open-air dining hall keeps you connected to the hillside.
        </p>
        <p>
          Evenings can be paired with the <strong>barbeque stand</strong> and <strong>drinks &amp; hors d&apos;oeuvres</strong> — a warm,
          communal way to round off a day of sightseeing. Book a table with the resort when you reserve your cottage so the kitchen
          can plan around your group size.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Plan Your Farm Dining Booking</h2>
        <p>
          Organic farm dining is available to resort guests, typically with lunch and dinner services planned daily. For day
          visitors and event groups (weddings, birthdays, corporate offsites), the kitchen can arrange a larger farm-thali spread with
          advance notice. Tell us your date and headcount when you
          <Link href="https://bookone.io/The-Divine-Oasis?bookingEngine=true" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline"> book your stay</Link>,
          or call <a href="tel:+91990398950" className="text-gold hover:underline">+91 99039 89950</a>.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">FAQs</h2>

        <h3 className="font-display text-lg text-forest mt-6 mb-2">Does The Divine Oasis have an organic farm?</h3>
        <p>
          Yes, The Divine Oasis runs an <strong>organic farm</strong> on Ajodhya Hill, Purulia, where seasonal vegetables used in the
          kitchen are grown.
        </p>

        <h3 className="font-display text-lg text-forest mt-6 mb-2">What is served in the signature veg thali?</h3>
        <p>
          The <strong>veg thali</strong> features fresh seasonal vegetables from the organic farm, rice, dal, local curries,
          chokha-style dishes, salad, and a dessert — an authentic taste of Purulia.
        </p>

        <h3 className="font-display text-lg text-forest mt-6 mb-2">Is farm dining vegetarian only?</h3>
        <p>
          The farm concept focuses on <strong>veg thali</strong> and fresh produce, while the resort can plan optional barbeque and
          non-vegetarian spreads for events on request.
        </p>

        <h3 className="font-display text-lg text-forest mt-6 mb-2">Can guests visit the organic farm?</h3>
        <p>
          Yes, guests can walk through the <strong>organic farm</strong>, see seasonal crops, and watch produce travel from the
          field to the kitchen.
        </p>

        <p>
          Pair your meal with our guides to <Link href="/blog/things-to-do-in-purulia" className="text-gold hover:underline">things to do in Purulia</Link> and
          <Link href="/blog/best-dining-near-ajodhya-hill" className="text-gold hover:underline"> best dining near Ajodhya</Link> to plan the full day.
        </p>
      </BlogArticleLayout>
    </>
  )
}