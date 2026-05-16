export interface GalleryImage {
  id: string
  src: string
  alt: string
  category: 'rooms' | 'outdoors' | 'food' | 'events' | 'nature'
  width: number
  height: number
}

export const galleryImages: GalleryImage[] = [
  { id: 'g1', src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=90', alt: 'Infinity pool at Unwind Karjat overlooking Sahyadri hills', category: 'outdoors', width: 1200, height: 800 },
  { id: 'g2', src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=90', alt: 'Bespoke Maharashtrian thali at our main dining hall', category: 'food', width: 1200, height: 900 },
  { id: 'g3', src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=90', alt: 'Outdoor forest wedding setup at Unwind Karjat', category: 'events', width: 1200, height: 800 },
  { id: 'g4', src: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=90', alt: 'Monsoon trekking trail in the Karjat forest', category: 'nature', width: 800, height: 1200 },
  { id: 'g5', src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=90', alt: 'Rustic luxury interior of the Red Brick Cottage', category: 'rooms', width: 1200, height: 800 },
  { id: 'g6', src: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&q=90', alt: 'The Cafe & Lounge - perfect for morning tea', category: 'food', width: 800, height: 1000 },
  { id: 'g7', src: 'https://images.unsplash.com/photo-1517594422361-5e18d0333396?w=1200&q=90', alt: 'Cozy bonfire setup for winter evenings', category: 'outdoors', width: 1200, height: 800 },
  { id: 'g8', src: 'https://images.unsplash.com/photo-1552728089-571ebdcdbe15?w=1200&q=90', alt: 'Birdwatching and nature photography in Karjat', category: 'nature', width: 1200, height: 800 },
  { id: 'g9', src: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&q=90', alt: 'Lawn Facing Room with large glass windows', category: 'rooms', width: 1200, height: 800 },
  { id: 'g10', src: 'https://images.unsplash.com/photo-1449156001437-3a1621acda2e?w=1200&q=90', alt: 'Forest Facing Room with private balcony', category: 'rooms', width: 1200, height: 800 },
]
