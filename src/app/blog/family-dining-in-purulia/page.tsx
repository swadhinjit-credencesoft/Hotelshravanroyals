import type { Metadata } from 'next'
import Link from 'next/link'
import BlogArticleLayout from '@/components/layout/BlogArticleLayout'

export const metadata: Metadata = {
  title: 'Family Dining in Purulia | Kid-Friendly Meals Near Ajodhya',
  description:
    'Find family-friendly dining in Purulia. The Divine Oasis offers a farm-fresh veg thali, spacious seating, and a safe forest setting perfect for kids near Ajodhya Hill.',
  keywords: [
    'family dining purulia',
    'restaurant for kids ajodhya',
    'family restaurant ajodhya hill',
    'family friendly resort dining',
    'veg thali for kids purulia',
    'dining with children ajodhya',
    'family lunch purulia resort',
    'kid safe dining west bengal',
  ],
  alternates: {
    canonical: 'https://thedivineoasisresort.com/blog/family-dining-in-purulia',
  },
  openGraph: {
    title: 'Family Dining in Purulia | The Divine Oasis',
    description: 'Family-friendly dining in Purulia at The Divine Oasis — spacious seating, farm-fresh veg thali, and a safe forest setting near Ajodhya Hill.',
    url: 'https://thedivineoasisresort.com/blog/family-dining-in-purulia',
    siteName: 'The Divine Oasis',
    type: 'article',
    publishedTime: '2026-07-10T00:00:00.000Z',
    modifiedTime: '2026-07-23T00:00:00.000Z',
    images: [{ url: 'https://bookonelocal.in/cdn/2026-05-13-064452634-WhatsApp Image 2026-05-11 at 15.42.14 (2).jpg', width: 1200, height: 630, alt: 'Family dining in Purulia - The Divine Oasis Ajodhya' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Family Dining in Purulia',
    description: 'Family dining in Purulia at The Divine Oasis — spacious seating, farm-fresh veg thali, and a safe forest setting near Ajodhya Hill.',
    images: ['https://bookonelocal.in/cdn/2026-05-13-064452634-WhatsApp Image 2026-05-11 at 15.42.14 (2).jpg'],
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
    headline: 'Family Dining in Purulia | Kid-Friendly Meals Near Ajodhya',
    description: 'Family-friendly dining in Purulia at The Divine Oasis — spacious seating, farm-fresh veg thali, and a safe forest setting near Ajodhya Hill.',
    image: 'https://bookonelocal.in/cdn/2026-05-13-064452634-WhatsApp Image 2026-05-11 at 15.42.14 (2).jpg',
    datePublished: '2026-07-10',
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
        name: 'Is The Divine Oasis good for dining with children?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, the resort offers family-friendly dining in Purulia with spacious seating, a mild farm-fresh veg thali, and a safe open setting near Ajodhya Hill.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can the kitchen adjust meals for kids?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, portions, spice levels, and simple preparations are easily customised for children and elderly guests.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are high chairs or kid utensils available?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The team can arrange comfortable seating and child-friendly serving on request — just mention it while booking your meal.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is the dining area safe for young kids?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The open-air dining and lawn seating areas are traffic-free and calm, making them safe and easy to supervise.',
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
        date="Jul 10, 2026"
        heroImage="https://bookonelocal.in/cdn/2026-05-13-064452634-WhatsApp Image 2026-05-11 at 15.42.14 (2).jpg"
        heroAlt="Family dining in Purulia - spacious kid-friendly dining at The Divine Oasis, Ajodhya"
        relatedArticles={[
          { title: 'Best Dining Near Ajodhya Hill', link: '/blog/best-dining-near-ajodhya-hill' },
          { title: 'Organic Farm Dining in Purulia', link: '/blog/organic-farm-dining-in-purulia' },
          { title: 'Family Resort in Ajodhya Hill', link: '/blog/family-resort-in-ajodhya-hill' },
          { title: 'Local Food Guide in Purulia', link: '/blog/local-food-guide-in-purulia' },
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
          Families who travel know the golden rule: nobody has a good trip on an empty stomach. In Purulia, family meals are best done
          calmly and freshly, and that is exactly what <strong><Link href="/" className="text-gold hover:underline">The Divine Oasis</Link></strong>
          offers. Our <strong>family dining</strong> is unhurried, spacious, and built on the farm-to-table veg thali — food that children actually
          eat and grandparents actually enjoy, served in a forest setting near <strong>Ajodhya Hill</strong>.
        </p>
        <p>
          The resort&apos;s layout helps a lot: open <strong>seating areas</strong> with room for strollers and high energy, no traffic, and a
          kitchen used to families of every size. Whether it&apos;s a quiet lunch after the <strong>Thurga Dam</strong> drive or a barbeque dinner
          with the cousins, the dining here runs at family pace.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">A Menu That Keeps Everyone Happy</h2>
        <p>
          The signature <strong>veg thali</strong> — rice, dal, seasonal vegetables, chokha-style sides, salad, and dessert — is mild, balanced,
          and easy to eat. Kids get simple, familiar flavours; adults get the real taste of Purulia. The kitchen customises
          <strong>portion sizes, spice levels, and oil</strong> on request, and can plate quick bites for fussy eaters.
        </p>
        <p>
          For families staying over multiple days, the menu turns seasonal — the <strong>organic farm</strong> decides. This is the same kitchen
          covered deeper in our <Link href="/blog/organic-farm-dining-in-purulia" className="text-gold hover:underline">farm dining guide</Link>.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Seating Made for Families</h2>
        <p>
          Tables in the open seating areas are spaced so young children can move a little without chaos, while parents keep an easy eye on
          everyone. During cooler months, the lawn becomes part of the meal — kids wander between bites, and the group gathers again for
          dessert. Evening meals pair naturally with the <strong>barbeque stand</strong> and shared <strong>snacks</strong>.
        </p>
        <p>
          Families with infants or elderly members can request seating near the service point and a more protected spot on windy days. Just
          say the word when reserving — our team listens. If you are staying on-site, the <strong>family rooms and VISTA Four Beds</strong>
          cottage keep everyone together after meals; see the
          <Link href="/blog/family-resort-in-ajodhya-hill" className="text-gold hover:underline"> family resort guide</Link>.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Planning a Family Meal Day</h2>
        <p>
          A relaxed plan: breakfast at the resort before a sunrise walk to the <strong>Ajodhya Hills &amp; Forest Reserve (0.4 km)</strong>;
          lunch back at the resort or a packed farm-thali picnic at <strong>Thurga Dam (13.8 km)</strong>; an afternoon of farm and lawn time;
          and an early family dinner so kids sleep well. Day visitors are welcome for meals with advance notice.
        </p>
        <p>
          Book your family meal when you reserve your stay. Call <a href="tel:+91990398950" className="text-gold hover:underline">+91 99039 89950</a>,
          email <a href="mailto:thedivineoasisresort@gmail.com" className="text-gold hover:underline">thedivineoasisresort@gmail.com</a>, or use
          the <Link href="https://bookone.io/The-Divine-Oasis?bookingEngine=true" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline"> booking engine</Link>.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">FAQs</h2>

        <h3 className="font-display text-lg text-forest mt-6 mb-2">Is The Divine Oasis good for dining with children?</h3>
        <p>
          Yes, the resort offers <strong>family-friendly dining in Purulia</strong> with spacious seating, a mild farm-fresh veg thali, and a
          safe open setting near Ajodhya Hill.
        </p>

        <h3 className="font-display text-lg text-forest mt-6 mb-2">Can the kitchen adjust meals for kids?</h3>
        <p>
          Yes, <strong>portions, spice levels, and simple preparations</strong> are easily customised for children and elderly guests.
        </p>

        <h3 className="font-display text-lg text-forest mt-6 mb-2">Are high chairs or kid utensils available?</h3>
        <p>
          The team can arrange <strong>comfortable seating and child-friendly serving</strong> on request — just mention it while booking
          your meal.
        </p>

        <h3 className="font-display text-lg text-forest mt-6 mb-2">Is the dining area safe for young kids?</h3>
        <p>
          The <strong>open-air dining and lawn seating areas</strong> are traffic-free and calm, making them safe and easy to supervise.
        </p>

        <p>
          Wrap your day with ideas from <Link href="/blog/things-to-do-in-purulia" className="text-gold hover:underline">things to do</Link>
          and <Link href="/blog/shopping-in-purulia" className="text-gold hover:underline">local sightseeing</Link>.
        </p>
      </BlogArticleLayout>
    </>
  )
}