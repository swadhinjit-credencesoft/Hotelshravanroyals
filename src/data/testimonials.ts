export interface Testimonial {
  id: string
  name: string
  country: string
  rating: number
  text: string
  stayType: string
  avatar: string
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Ananya Singh',
    country: 'France',
    rating: 5,
    text: "We have stayed at Aman, Six Senses, and Four Seasons. Unwind Karjat surpasses them all in intimacy and service. Our butler remembered my husband's preferred drink from a year prior.",
    stayType: 'Anniversary Villa',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&q=80',
  },
  {
    id: 't2',
    name: 'James Whitmore',
    country: 'United Kingdom',
    rating: 5,
    text: 'Three nights became two weeks. The forest suite is a complete world — I left not wanting to return to ordinary life.',
    stayType: 'Forest Suite',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80',
  },
  {
    id: 't3',
    name: 'Priya Kapoor',
    country: 'India',
    rating: 5,
    text: 'The spa alone is worth the journey. The immersion ritual left me genuinely transformed. Every detail — the temperature, the scent, the silence — was curated with intention.',
    stayType: 'Spa Retreat Package',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80',
  },
  {
    id: 't4',
    name: 'David Chen',
    country: 'Singapore',
    rating: 5,
    text: "The chef's table was the finest dining experience of my life. Twelve courses, each a conversation between land and sea. We wept at the dessert. Genuinely.",
    stayType: 'Culinary Getaway',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80',
  },
]
