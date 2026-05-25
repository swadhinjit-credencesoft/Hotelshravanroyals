export interface GalleryImage {
  id: string
  src: string
  alt: string
  category: 'rooms' | 'outdoors' | 'food' | 'events' | 'nature'
  width: number
  height: number
}

export const galleryImages: GalleryImage[] = [
  { id: 'g1', src: '/images/exterior3.jpeg', alt: 'Infinity pool at Unwind Karjat overlooking Sahyadri hills', category: 'outdoors', width: 1200, height: 800 },
  { id: 'g2', src: '/images/exterior4.jpeg', alt: 'Bespoke Maharashtrian thali at our main dining hall', category: 'outdoors', width: 1200, height: 900 },
  { id: 'g3', src: '/images/exterior5.jpeg', alt: 'Outdoor forest wedding setup at Unwind Karjat', category: 'nature', width: 1200, height: 800 },
  { id: 'g4', src: '/images/exterior6.jpeg', alt: 'Monsoon trekking trail in the Karjat forest', category: 'nature', width: 800, height: 1200 },
  { id: 'g5', src: '/images/exterior7.jpeg', alt: 'Rustic luxury interior of the Red Brick Cottage', category: 'rooms', width: 1200, height: 800 },
  { id: 'g6', src: '/images/exterior8.jpeg', alt: 'The Cafe & Lounge - perfect for morning tea', category: 'outdoors', width: 800, height: 1000 },
  { id: 'g7', src: '/images/room1.jpeg', alt: 'Cozy bonfire setup for winter evenings', category: 'rooms', width: 1200, height: 800 },
  { id: 'g8', src: '/images/room2.jpeg', alt: 'Birdwatching and nature photography in Karjat', category: 'rooms', width: 1200, height: 800 },
  { id: 'g9', src: '/images/exterior.jpeg', alt: 'Lawn Facing Room with large glass windows', category: 'food', width: 1200, height: 800 },
  { id: 'g10', src: '/images/exterior2.jpeg', alt: 'Forest Facing Room with private balcony', category: 'food', width: 1200, height: 800 },
]
