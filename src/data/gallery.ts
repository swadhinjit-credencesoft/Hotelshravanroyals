export interface GalleryImage {
  id: string
  src: string
  alt: string
  category: 'rooms' | 'outdoors' | 'dining' | 'events' | 'nature'
  width: number
  height: number
}

export const galleryImages: GalleryImage[] = [
  { id: 'g1', src: 'https://bookonelocal.in/cdn/2026-04-09-070105794-1000080272.jpg', alt: 'Spacious Super Deluxe Room with modern amenities', category: 'rooms', width: 1200, height: 800 },
  { id: 'g2', src: 'https://bookonelocal.in/cdn/2026-04-09-070306938-1000080271.jpg', alt: 'Comfortable Deluxe AC Room at Hotel Bella Casa', category: 'rooms', width: 1200, height: 800 },
  { id: 'g3', src: 'https://bookonelocal.in/cdn/2026-04-09-070330986-1000080270.jpg', alt: 'Well-ventilated Deluxe Non AC Room', category: 'rooms', width: 1200, height: 800 },
  { id: 'g4', src: 'https://bookonelocal.in/cdn/2026-04-09-070349660-1000080268.jpg', alt: 'Standard Non AC Room for budget-friendly stays', category: 'rooms', width: 1200, height: 800 },
   { id: 'g5', src: 'https://bookonelocal.in/cdn/IMG_3698.avif', alt: 'Standard Non AC Room for budget-friendly stays', category: 'rooms', width: 1200, height: 800 },
   { id: 'g6', src: 'https://bookonelocal.in/cdn/IMG_3703.avif', alt: 'Standard Non AC Room for budget-friendly stays', category: 'rooms', width: 1200, height: 800 },
   { id: 'g7', src: 'https://bookonelocal.in/cdn/IMG_3693.avif', alt: 'Standard Non AC Room for budget-friendly stays', category: 'rooms', width: 1200, height: 800 },
   { id: 'g8', src: 'https://bookonelocal.in/cdn/IMG_3701.avif', alt: 'Standard Non AC Room for budget-friendly stays', category: 'rooms', width: 1200, height: 800 },
   { id: 'g9', src: 'https://bookonelocal.in/cdn/IMG_3739.avif', alt: 'Standard Non AC Room for budget-friendly stays', category: 'dining', width: 1200, height: 800 },
   { id: 'g10', src: 'https://bookonelocal.in/cdn/IMG_3788.avif', alt: 'Standard Non AC Room for budget-friendly stays', category: 'dining', width: 1200, height: 800 },
   { id: 'g11', src: 'https://bookonelocal.in/cdn/IMG_3763.avif', alt: 'Standard Non AC Room for budget-friendly stays', category: 'dining', width: 1200, height: 800 },
   { id: 'g12', src: 'https://bookonelocal.in/cdn/IMG_3766.avif', alt: 'Standard Non AC Room for budget-friendly stays', category: 'dining', width: 1200, height: 800 },
   { id: 'g13', src: 'https://bookonelocal.in/cdn/IMG_3753.avif', alt: 'Standard Non AC Room for budget-friendly stays', category: 'dining', width: 1200, height: 800 },
   { id: 'g14', src: 'https://bookonelocal.in/cdn/IMG_3736.avif', alt: 'Standard Non AC Room for budget-friendly stays', category: 'dining', width: 1200, height: 800 },
   { id: 'g15', src: 'https://bookonelocal.in/cdn/IMG_3791.avif', alt: 'Standard Non AC Room for budget-friendly stays', category: 'dining', width: 1200, height: 800 },
   { id: 'g16', src: 'https://bookonelocal.in/cdn/IMG_3815.avif', alt: 'Standard Non AC Room for budget-friendly stays', category: 'outdoors', width: 1200, height: 800 },
    { id: 'g17', src: 'https://bookonelocal.in/cdn/IMG_3745.avif', alt: 'Standard Non AC Room for budget-friendly stays', category: 'dining', width: 1200, height: 800 },
]
