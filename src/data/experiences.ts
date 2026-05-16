export interface Experience {
  id: string
  title: string
  category: string
  description: string
  duration: string
  image: string
  imageAlt: string
}

export const experiences: Experience[] = [
  {
    id: 'e1',
    title: 'Couples Immersion Ritual',
    category: 'Spa',
    description: 'A 3-hour journey through hot springs, aromatic steam, and signature stone massage.',
    duration: '3 hours',
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1920&q=95',
    imageAlt: 'Couple spa treatment room',
  },
  {
    id: 'e2',
    title: 'Private Yacht Charter',
    category: 'Water',
    description: 'Spend a day on the water with a captain, chef, and your chosen companions.',
    duration: 'Full day',
    image: 'https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=1920&q=95',
    imageAlt: 'Luxury sailing yacht on calm water',
  },
  {
    id: 'e3',
    title: 'Forest Foraging Walk',
    category: 'Nature',
    description: 'Join our botanist through old-growth forest trails, ending with a wild harvest feast.',
    duration: '4 hours',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=95',
    imageAlt: 'Ancient forest trail with morning light',
  },
  {
    id: 'e4',
    title: 'Sunset Horseback Ride',
    category: 'Adventure',
    description: 'Ride through coastal meadows as the light turns gold. Champagne at the clifftop.',
    duration: '2 hours',
    image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=1920&q=95',
    imageAlt: 'Horseback riding along coastal cliffs at sunset',
  },
  {
    id: 'e5',
    title: "Chef's Table Experience",
    category: 'Dining',
    description: 'Twelve courses prepared beside you. Watch the art, taste the story.',
    duration: '3.5 hours',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1920&q=95',
    imageAlt: 'Private chef table preparation',
  },
  {
    id: 'e6',
    title: 'Dawn Yoga & Breathwork',
    category: 'Wellness',
    description: 'Guided practice on the ocean terrace. Start each morning with intention.',
    duration: '90 minutes',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&q=95',
    imageAlt: 'Yoga on terrace overlooking ocean at sunrise',
  },
]
