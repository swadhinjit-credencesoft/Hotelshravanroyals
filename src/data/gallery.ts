export interface GalleryImage {
  id: string
  src: string
  alt: string
  category: 'rooms' | 'dining' | 'exp' | 'nature' | 'events'
  width: number
  height: number
  type: 'image' | 'video'
}

export const galleryImages: GalleryImage[] = [
  // Rooms
  { id: 'g1', src: 'https://bookonelocal.in/cdn/IMG_6387.mp4', alt: 'Luxurious room view', category: 'rooms', width: 1200, height: 800, type: 'video' },
  { id: 'g2', src: 'https://bookonelocal.in/cdn/IMG_6260.mp4', alt: 'Comfortable stay', category: 'rooms', width: 1200, height: 800, type: 'video' },
  { id: 'g3', src: 'https://bookonelocal.in/cdn/IMG_6295.mp4', alt: 'Elegant suite', category: 'rooms', width: 1200, height: 800, type: 'video' },
  { id: 'g4', src: 'https://bookonelocal.in/cdn/IMG_6294.mp4', alt: 'Room ambiance', category: 'rooms', width: 1200, height: 800, type: 'video' },
  { id: 'g5', src: 'https://bookonelocal.in/cdn/IMG_6381.mp4', alt: 'Rooms overview', category: 'rooms', width: 1200, height: 800, type: 'video' },
  { id: 'g6', src: 'https://bookonelocal.in/cdn/IMG_6229.mp4', alt: 'Hotel surroundings', category: 'rooms', width: 1200, height: 800, type: 'video' },

  // Dining
  { id: 'g7', src: 'https://bookonelocal.in/cdn/IMG_6310.mp4', alt: 'Exquisite dining experience', category: 'dining', width: 1200, height: 900, type: 'video' },
  { id: 'g8', src: 'https://bookonelocal.in/cdn/IMG_6322.mp4', alt: 'Fine dining', category: 'dining', width: 1200, height: 900, type: 'video' },
  { id: 'g9', src: 'https://bookonelocal.in/cdn/IMG_6311+%281%29+%281%29.mp4', alt: 'Culinary delight', category: 'dining', width: 1200, height: 900, type: 'video' },
  { id: 'g10', src: 'https://bookonelocal.in/cdn/IMG_6222.JPG', alt: 'Dining ambiance', category: 'dining', width: 1200, height: 900, type: 'image' },

  // Experience-based content added — removed spa-specific references
  { id: 'g11', src: 'https://bookonelocal.in/cdn/IMG_6313.mp4', alt: 'Luxury experience', category: 'exp', width: 1200, height: 800, type: 'video' },
  { id: 'g12', src: 'https://bookonelocal.in/cdn/IMG_6316.mp4', alt: 'Premium retreat experience', category: 'exp', width: 1200, height: 800, type: 'video' },
  { id: 'g13', src: 'https://bookonelocal.in/cdn/IMG_6307.mp4', alt: 'Memorable guest experience', category: 'exp', width: 1200, height: 800, type: 'video' },
  // Nature
  { id: 'g14', src: 'https://bookonelocal.in/cdn/IMG_6238.mp4', alt: 'Nature walk', category: 'nature', width: 800, height: 1200, type: 'video' },
  { id: 'g15', src: 'https://bookonelocal.in/cdn/IMG_6309.mp4', alt: 'Scenic beauty', category: 'nature', width: 1200, height: 800, type: 'video' },
  { id: 'g16', src: 'https://bookonelocal.in/cdn/IMG_6390.mp4', alt: 'Natural landscape', category: 'nature', width: 1200, height: 800, type: 'video' },
  { id: 'g17', src: 'https://bookonelocal.in/cdn/IMG_6344.mp4', alt: 'Captured moments', category: 'nature', width: 1200, height: 800, type: 'video' },
  { id: 'g18', src: 'https://bookonelocal.in/cdn/IMG_6298.JPG', alt: 'Outdoor exploration', category: 'nature', width: 1200, height: 800, type: 'image' },

  // Events
  { id: 'g19', src: 'https://bookonelocal.in/cdn/IMG_6350.mp4', alt: 'Event celebration', category: 'events', width: 1200, height: 800, type: 'video' },
]
