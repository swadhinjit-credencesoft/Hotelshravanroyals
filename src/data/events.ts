export interface EstateEvent {
  id: string;
  title: string;
  category: 'Weddings' | 'Corporate' | 'Private';
  description: string;
  capacity: string;
  image: string;
  features: string[];
}

export const estateEvents: EstateEvent[] = [
  {
    id: 'e1',
    title: 'The Forest Altar',
    category: 'Weddings',
    description: 'A cathedral of ancient oaks providing a living canopy for your most sacred vows. Open-air elegance at its peak.',
    capacity: 'Up to 120 guests',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=95',
    features: ['Private forest trail access', 'Custom floral installations', 'Acoustic-optimized clearing'],
  },
 
];
