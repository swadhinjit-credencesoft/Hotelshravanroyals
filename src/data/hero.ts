export interface HeroSlide {
  id: string
  tagline: string
  headline: string
  subheadline: string
  image: string
  imageAlt: string
  primaryCta: string
  primaryHref: string
  secondaryCta: string
  secondaryHref: string
}

export const heroSlides: HeroSlide[] = [
  {
    id: 's1',
    tagline: 'Forest Resort at Ajodhya Hill, Purulia — Book Direct & Save',
    headline: 'The Divine Oasis | Hilltop Forest Resort in Purulia',
    subheadline: 'Looking for a serene forest retreat in West Bengal? The Divine Oasis sits atop Ajodhya Hill, minutes from the Ajodhya Hills & Forest Reserve. Stay in premium mud cottages and luxury suites surrounded by nature. Book direct for best rates.',
    image: 'https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg',
    imageAlt: 'The Divine Oasis - Ajodhya Hill Forest Resort, Purulia',
    primaryCta: 'Book Direct',
    primaryHref: 'https://bookone.io/The-Divine-Oasis?bookingEngine=true',
    secondaryCta: 'View All Cottages',
    secondaryHref: '/rooms',
  },
  {
    id: 's2',
    tagline: 'Mud Cottages, Luxury Suites & Family Rooms at Ajodhya',
    headline: 'Premium Cottages with Forest Views',
    subheadline: 'Choose from Premium Deluxe Mud Cottages, a Luxury Suite Cottage, Vista Four Beds, and Vista Pod Cottages. Every stay comes with geyser, flat-screen TV, room service, and complimentary Wi-Fi — all wrapped in forest serenity.',
    image: 'https://bookonelocal.in/cdn/2026-05-13-063018320-WhatsApp Image 2026-05-11 at 15.53.21.jpg',
    imageAlt: 'Luxury Suite Cottage at The Divine Oasis Ajodhya Hill',
    primaryCta: 'Explore Cottages',
    primaryHref: '/rooms',
    secondaryCta: 'Book Now',
    secondaryHref: 'https://bookone.io/The-Divine-Oasis?bookingEngine=true',
  },
  {
    id: 's3',
    tagline: 'Near Ajodhya Hills, Thurga Dam & Deulghata Temples',
    headline: 'Hilltop Location — Surrounded by Nature',
    subheadline: 'Located at Hilltop, Ajodhya, just 0.4 km from the Ajodhya Hills & Forest Reserve. Explore Thurga Dam (13.8 km), Deulghata Temples (33.7 km), and Barabhum (38.5 km). Purulia Junction is 42.6 km away.',
    image: 'https://bookonelocal.in/cdn/2026-05-13-064437235-WhatsApp Image 2026-05-11 at 15.42.11 (1).jpg',
    imageAlt: 'The Divine Oasis resort location at Ajodhya Hill, Purulia',
    primaryCta: 'Get Directions',
    primaryHref: '/contact',
    secondaryCta: 'Book Now',
    secondaryHref: 'https://bookone.io/The-Divine-Oasis?bookingEngine=true',
  },
  {
    id: 's4',
    tagline: 'Organic Farm Dining, Barbeque Evenings & Family Rooms',
    headline: 'Farm-to-Table Dining & Open-Air Moments',
    subheadline: 'Savour organic farm-to-table meals, veg thali, barbeque under the open sky, and drinks with hors d\'oeuvres at our scenic seating areas. Perfect for families, couples, and groups escaping city life in Purulia.',
    image: 'https://bookonelocal.in/cdn/2026-05-13-064448375-WhatsApp Image 2026-05-11 at 15.42.13.jpg',
    imageAlt: 'Organic farm dining and seating at The Divine Oasis Ajodhya Hill',
    primaryCta: 'Book Now',
    primaryHref: 'https://bookone.io/The-Divine-Oasis?bookingEngine=true',
    secondaryCta: 'Contact Us',
    secondaryHref: '/contact',
  },
]

export const heroStats = [
  { value: '0.4 Km', label: 'From Ajodhya Hill & Forest Reserve' },
  { value: '4', label: 'Cottage Categories' },
  { value: '24/7', label: 'Guest Support & Care' },
]