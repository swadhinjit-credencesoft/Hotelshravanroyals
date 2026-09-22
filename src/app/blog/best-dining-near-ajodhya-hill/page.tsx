import type { Metadata } from 'next'
import Link from 'next/link'
import BlogArticleLayout from '@/components/layout/BlogArticleLayout'

export const metadata: Metadata = {
  title: 'Best Dining Near Ajodhya Hill | Top Rated Forest Restaurant',
  description:
    'Looking for the best dining near Ajodhya Hill? The Divine Oasis serves farm-fresh multi-cuisine food, a signature veg thali, and barbeque evenings above Purulia.',
  keywords: [
    'best dining near ajodhya',
    'restaurant in ajodhya hill',
    'restaurant near ajodhya hills',
    'dining purulia resort',
    'best restaurant purulia',
    'farm restaurant ajodhya',
    'restaurant near forest reserve purulia',
    'dining options in ajodhya',
  ],
  alternates: {
    canonical: 'https://thedivineoasisresort.com/blog/best-dining-near-ajodhya-hill',
  },
  openGraph: {
    title: 'Best Dining Near Ajodhya Hill | The Divine Oasis',
    description: 'The best dining near Ajodhya Hill, Purulia — farm-fresh thali, multi-cuisine plates, and barbeque evenings at The Divine Oasis.',
    url: 'https://thedivineoasisresort.com/blog/best-dining-near-ajodhya-hill',
    siteName: 'The Divine Oasis',
    type: 'article',
    publishedTime: '2026-07-15T00:00:00.000Z',
    modifiedTime: '2026-07-23T00:00:00.000Z',
    images: [{ url: 'https://bookonelocal.in/cdn/2026-05-13-064437235-WhatsApp Image 2026-05-11 at 15.42.11 (1).jpg', width: 1200, height: 630, alt: 'Best dining near Ajodhya Hill - The Divine Oasis Purulia' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Dining Near Ajodhya Hill',
    description: 'Top dining near Ajodhya Hill at The Divine Oasis — farm-fresh thali, multi-cuisine dishes, and barbeque evenings in Purulia.',
    images: ['https://bookonelocal.in/cdn/2026-05-13-064437235-WhatsApp Image 2026-05-11 at 15.42.11 (1).jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

export default function BlogPost() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Best Dining Near Ajodhya Hill | Top Rated Forest Restaurant',
    description: 'The best dining near Ajodhya Hill, Purulia — farm-fresh thali, multi-cuisine plates, and barbeque evenings at The Divine Oasis.',
    image: 'https://bookonelocal.in/cdn/2026-05-13-064437235-WhatsApp Image 2026-05-11 at 15.42.11 (1).jpg',
    datePublished: '2026-07-15',
    dateModified: '2026-07-23',
    author: { '@type': 'Organization', name: 'The Divine Oasis' },
    publisher: { '@type': 'Organization', name: 'The Divine Oasis' },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where can I eat near Ajodhya Hill?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Divine Oasis offers the best dining near Ajodhya Hill, with farm-fresh veg thali, multi-cuisine dishes, and barbeque evenings just 0.4 km from the forest reserve.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are walk-in guests allowed for meals?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, meal reservations are available for day visitors with advance notice so the kitchen can plan fresh portions.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is the dining vegetarian?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The core dining experience is the vegetarian farm thali; non-vegetarian and barbeque spreads can be arranged for groups and events on request.',
        },
      },
      {
        '@type': 'Question',
        name: 'What cuisines are served?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The menu blends Bengali and North Indian home-style cooking, regional specialities, and simple continental plates — always anchored by fresh farm produce.',
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
        date="Jul 15, 2026"
        heroImage="https://bookonelocal.in/cdn/2026-05-13-064437235-WhatsApp Image 2026-05-11 at 15.42.11 (1).jpg"
        heroAlt="Best dining near Ajodhya Hill - open-air dining at The Divine Oasis, Purulia"
        relatedArticles={[
          { title: 'Organic Farm Dining in Purulia', link: '/blog/organic-farm-dining-in-purulia' },
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
          Ask anyone who has driven to Ajodhya Hill what they remember, and the food comes up quickly — partly because options are few on
          the hill, and partly because a good meal after a day of trekking tastes twice as good. When it comes to the
          <strong><Link href="/blog/best-dining-near-ajodhya-hill" className="text-gold hover:underline"> best dining near Ajodhya Hill</Link></strong>,
          <strong><Link href="/" className="text-gold hover:underline">The Divine Oasis</Link></strong> sets a high benchmark with cuisine that
          comes straight from the resort&apos;s own <strong>organic farm</strong>.
        </p>
        <p>
          The dining room is open to the hillside air, seating is relaxed, and the menu is built around what is fresh that day. It is the
          kind of place where breakfast, lunch, and dinner all feel like set pieces of your day rather than afterthoughts.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Farm-Fresh, Multi-Cuisine Menu</h2>
        <p>
          The heart of the kitchen is the <strong>veg thali</strong>: rice, dal, seasonal vegetables from the farm, chokha-style preparations,
          salad, and dessert. Around it, our chefs plate Bengali home-style curries, North Indian classics, regional specialities, and simple
          continental dishes. It&apos;s a menu that satisfies a Kolkata family, a couples&apos; weekend, and a corporate meal equally well.
        </p>
        <p>
          Non-vegetarian preparations and barbeque platters are arranged for groups and events with prior notice — a popular choice for the
          <Link href="/blog/best-dinner-place-in-purulia" className="text-gold hover:underline"> nightly barbeque dinner</Link> under the ajodhya sky.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Dining Ambience on the Hill</h2>
        <p>
          Meals happen in open and covered <strong>seating areas</strong> that catch the hill breeze, with views of the forest ridge. Mornings
          are bright and quiet; evenings soften into golden light before the <strong>barbeque stand</strong> comes alive with smoke and warmth.
          For groups, <strong>drinks &amp; hors d&apos;oeuvres</strong> work beautifully as a pre-dinner ritual in the shared lawn.
        </p>
        <p>
          Children and elderly guests are well looked after — seating is stable, food can be customised, and nothing is rushed. More on that
          in our <Link href="/blog/family-dining-in-purulia" className="text-gold hover:underline">family dining guide</Link>.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">A Dining Day at The Divine Oasis</h2>
        <p>
          A typical day here runs on food: an early breakfast before the <strong>Matha Buru</strong> sunrise trek in the
          <strong>Ajodhya Hills &amp; Forest Reserve (0.4 km)</strong>; a packed farm-thali lunch if you are heading to
          <strong>Thurga Dam (13.8 km)</strong>; and a long, unhurried dinner back at the resort with seasonal specials. Between meals,
          the kitchen happily packs fruit and snacks for the road.
        </p>
        <p>
          Day visitors are welcome for lunch or dinner with <strong>advance reservation</strong>, so the kitchen can plan fresh portions. Route
          details for combining meals with sightseeing are in our
          <Link href="/blog/things-to-do-in-purulia" className="text-gold hover:underline"> activities guide</Link>.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Reserve Your Table</h2>
        <p>
          Whether you are staying at the resort or driving up for the day, book your meal when you confirm your plans. For stays, mention any
          dietary needs (pure veg, jain, low-oil, kid portions) at booking. Day visitors can reserve a table by calling
          <a href="tel:+91990398950" className="text-gold hover:underline"> +91 99039 89950</a> or through the resort email
          <a href="mailto:thedivineoasisresort@gmail.com" className="text-gold hover:underline"> thedivineoasisresort@gmail.com</a>.
        </p>
        <p>
          Planning an overnight? <Link href="https://bookone.io/The-Divine-Oasis?bookingEngine=true" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline"> Book a cottage</Link>
          and your meals follow naturally.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">FAQs</h2>

        <h3 className="font-display text-lg text-forest mt-6 mb-2">Where can I eat near Ajodhya Hill?</h3>
        <p>
          <strong>The Divine Oasis</strong> offers the best dining near Ajodhya Hill, with farm-fresh veg thali, multi-cuisine dishes, and
          barbeque evenings just <strong>0.4 km from the forest reserve</strong>.
        </p>

        <h3 className="font-display text-lg text-forest mt-6 mb-2">Are walk-in guests allowed for meals?</h3>
        <p>
          Yes, meal reservations are available for <strong>day visitors with advance notice</strong> so the kitchen can plan fresh portions.
        </p>

        <h3 className="font-display text-lg text-forest mt-6 mb-2">Is the dining vegetarian?</h3>
        <p>
          The core dining experience is the <strong>vegetarian farm thali</strong>; non-vegetarian and barbeque spreads can be arranged for
          groups and events on request.
        </p>

        <h3 className="font-display text-lg text-forest mt-6 mb-2">What cuisines are served?</h3>
        <p>
          The menu blends <strong>Bengali and North Indian home-style cooking</strong>, regional specialities, and simple continental plates —
          always anchored by fresh farm produce.
        </p>

        <p>
          Explore flavours further in our <Link href="/blog/local-food-guide-in-purulia" className="text-gold hover:underline">Purulia food
          guide</Link> and <Link href="/blog/fine-dining-in-purulia" className="text-gold hover:underline">fine dining</Link> overview.
        </p>
      </BlogArticleLayout>
    </>
  )
}