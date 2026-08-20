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
    tagline: 'Stay • Dine • Unwind',
    headline: 'A Little Away From Everything.',
    subheadline: 'A private boutique retreat in Karjat, created for good food, easy days and time well spent.',
    image: 'https://bookonelocal.in/cdn/unwindhomeherovideo.mp4',
    imageAlt: 'Unwind Karjat pool and lawns at golden hour',
    primaryCta: 'Explore Unwind',
    primaryHref: '/rooms',
    secondaryCta: 'Plan Your Stay',
    secondaryHref: 'https://bookone.io/Unwind-Karjat?bookingEngine=true',
  },
  {
    id: 's2',
    tagline: 'Good Food Is Part of the Stay',
    headline: 'Come Hungry. Leave Happy.',
    subheadline: 'Our in-house restaurant is relaxed, generous and made for meals that turn into long conversations.',
    image: 'https://bookonelocal.in/cdn/unwindhomeherovideo.mp4',
    imageAlt: 'Freshly prepared food at the in-house restaurant',
    primaryCta: 'Explore Dining',
    primaryHref: '/dining',
    secondaryCta: 'Plan Your Stay',
    secondaryHref: 'https://bookone.io/Unwind-Karjat?bookingEngine=true',
  },
  {
    id: 's3',
    tagline: 'Your Day, Your Pace',
    headline: 'Something to Do. Or Nothing at All.',
    subheadline: 'Take a dip in the pool, play a game on the lawn, join the music — or simply find a quiet corner.',
    image: 'https://bookonelocal.in/cdn/unwindhomeherovideo.mp4',
    imageAlt: 'Pool, lawns and open spaces at Unwind Karjat',
    primaryCta: 'Explore Experiences',
    primaryHref: '/experiences',
    secondaryCta: 'Book a Stay',
    secondaryHref: 'https://bookone.io/Unwind-Karjat?bookingEngine=true',
  },
  {
    id: 's4',
    tagline: 'Events & Celebrations',
    headline: "Bring Your People. We'll Handle the Rest.",
    subheadline: 'Birthdays, family get-togethers, corporate offsites and private celebrations — all in one relaxed place.',
    image: 'https://bookonelocal.in/cdn/unwindhomeherovideo.mp4',
    imageAlt: 'Celebrations and gatherings on the Unwind lawns',
    primaryCta: 'Plan Your Event',
    primaryHref: '/events',
    secondaryCta: 'Book a Stay',
    secondaryHref: 'https://bookone.io/Unwind-Karjat?bookingEngine=true',
  },
]

export const heroStats = [
  { value: '1.5h', label: 'From Mumbai & Pune' },
  { value: '4', label: 'room categories ' },
  { value: '2+', label: 'Year open' },
]
