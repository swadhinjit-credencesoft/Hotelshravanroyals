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
    title: 'Rooftop Restaurant',
    category: 'Dining',
    description:
      'Enjoy delicious food and refreshing beverages at our rooftop restaurant with peaceful ambiance, stylish seating, and beautiful city views during day and night.',
    duration: '2 Hours',
    image:
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1920&q=95',
    imageAlt: 'Luxury rooftop restaurant',
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
    title: 'Fine Dining Experience',
    category: 'Dining',
    description:
      'Enjoy delicious multi-cuisine dishes with elegant ambiance, premium seating, quality service, and a memorable dining experience perfect for families, couples, and guests.',
    duration: '2 Hours',
    image:
      'https://bookonelocal.in/cdn/IMG_6310.mp4',
    imageAlt: 'Luxury fine dining restaurant setup',
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
