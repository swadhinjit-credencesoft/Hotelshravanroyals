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
  {
    id: 'e2',
    title: 'The Royal Ballroom',
    category: 'Corporate',
    description: 'Where legacy meets strategy. A state-of-the-art sanctuary for high-level summits and board retreats.',
    capacity: 'Up to 40 guests',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1200&q=95',
    features: ['Discreet fiber connectivity', 'Private terrace for breakouts', 'Dedicated event concierge'],
  },
  {
    id: 'e3',
    title: 'The Shoreline Pavilion',
    category: 'Private',
    description: 'An intimate waterfront setting for family legacy celebrations and milestone anniversaries.',
    capacity: 'Up to 60 guests',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=95',
    features: ['Direct beach access', 'Wood-fired coastal grill', 'Champagne deck at sunset'],
  },
];
