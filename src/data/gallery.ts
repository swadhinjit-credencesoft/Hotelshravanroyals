export interface GalleryImage {
  id: string
  src: string
  alt: string
  category: 'rooms' | 'outdoors' | 'food' | 'events' | 'nature'
  width: number
  height: number
}

export const galleryImages: GalleryImage[] = [
  { id: 'g1', src: '/images/reception.png', alt: 'Welcoming reception and check-in lobby at Hotel Bella Casa', category: 'outdoors', width: 1200, height: 800 },
  { id: 'g2', src: '/images/dining.png', alt: 'Our clean, pure vegetarian dining hall serving local and multi-cuisine dishes', category: 'food', width: 1200, height: 900 },
  { id: 'g3', src: 'https://bookonelocal.in/cdn/2026-04-09-070105794-1000080272.jpg', alt: 'Spacious Super Deluxe Room with modern amenities', category: 'rooms', width: 1200, height: 800 },
  { id: 'g4', src: '/images/lounge.png', alt: 'Cozy lounge area for visitors and corporate meetings', category: 'outdoors', width: 800, height: 1200 },
  { id: 'g5', src: 'https://bookonelocal.in/cdn/2026-04-09-070306938-1000080271.jpg', alt: 'Comfortable Deluxe AC Room at Hotel Bella Casa', category: 'rooms', width: 1200, height: 800 },
  { id: 'g6', src: '/images/bedroom.png', alt: 'Beautifully arranged standard rooms with premium linens', category: 'rooms', width: 800, height: 1000 },
  { id: 'g7', src: 'https://bookonelocal.in/cdn/2026-04-09-070330986-1000080270.jpg', alt: 'Well-ventilated Deluxe Non AC Room', category: 'rooms', width: 1200, height: 800 },
  { id: 'g8', src: 'https://bookonelocal.in/cdn/2026-04-09-070349660-1000080268.jpg', alt: 'Standard Non AC Room for budget-friendly stays', category: 'rooms', width: 1200, height: 800 },
  { id: 'g9', src: '/images/bathroom.png', alt: 'Clean and modern bathroom facilities in all rooms', category: 'rooms', width: 1200, height: 800 },
  { id: 'g10', src: '/images/exterior2.jpeg', alt: 'Street view of Hotel Bella Casa Purnia', category: 'outdoors', width: 1200, height: 800 },
]
