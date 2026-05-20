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
    title: 'Luxury Deluxe Rooms',
    category: 'Rooms',
    description:
      'Elegant and spacious deluxe rooms with modern interiors, comfortable bedding, air conditioning, free WiFi, smart TV, and premium hospitality services for a relaxing stay.',
    duration: '24 Hours',
    image:
      'https://bookonelocal.in/cdn/IMG_6381.mp4',
    imageAlt: 'Luxury deluxe hotel room',
  },

  {
    id: 'e2',
    title: 'Premium Banquet Hall',
    category: 'Events',
    description:
      'Beautiful banquet hall for weddings, birthday parties, engagement ceremonies, business meetings, conferences, and family celebrations with elegant decoration and comfortable seating.',
    duration: 'Custom Booking',
    image:
      'https://bookonelocal.in/cdn/IMG_6238.mp4',
    imageAlt: 'Luxury banquet hall setup',
  },

  {
    id: 'e3',
    title: 'Rooftop City Views',
    category: 'Leisure',
    description:
      'Unwind on our scenic rooftop terrace with stunning panoramic views of Jaipur. Enjoy the golden city skyline, fresh air, and a relaxing atmosphere any time of day.',
    duration: 'Open Daily',
    image:
      'https://bookonelocal.in/cdn/IMG_6390.mp4',
    imageAlt: 'Rooftop terrace with city views at Hotel Shravan Royal Inn',
  },

  {
    id: 'e4',
    title: 'Family Stay Experience',
    category: 'Hospitality',
    description:
      'Perfect stay option for families with spacious rooms, peaceful environment, quality room service, safety, comfort, and convenient hotel facilities for all guests.',
    duration: '1 Night+',
    image:
      'https://bookonelocal.in/cdn/IMG_6309.mp4',
    imageAlt: 'Family hotel suite',
  },

  {
    id: 'e5',
    title: 'In-Room Premium Service',
    category: 'Hospitality',
    description:
      'Enjoy round-the-clock in-room service with premium amenities, curated room-service options, housekeeping, and personalised attention to make every moment of your stay exceptional.',
    duration: '24 Hours',
    image:
      'https://bookonelocal.in/cdn/IMG_6309.mp4',
    imageAlt: 'Premium in-room hotel service at Hotel Shravan Royal Inn',
  },
  {
    id: 'e6',
    title: 'Jaipur Comfort Location',
    category: 'Travel',
    description:
      'Conveniently located in Jaipur near major attractions, transport facilities, shopping destinations, and business areas for easy travel and comfortable accessibility.',
    duration: 'Flexible',
    image:
      'https://bookonelocal.in/cdn/IMG_6390.mp4',
    imageAlt: 'Jaipur travel and hospitality view',
  },
]
