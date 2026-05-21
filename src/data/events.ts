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
    id: 'e4',
    title: 'Business Conferences',
    category: 'Corporate',
    description: 'Host large-scale industry events with world-class amenities, premium catering, and seamless execution.',
    capacity: 'Up to 200 guests',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=95',
    features: ['Advanced AV systems', 'Keynote stage', 'Networking lounges'],
  },
  {
    id: 'e5',
    title: 'Team Meetings',
    category: 'Corporate',
    description: 'Intimate spaces designed for focused collaboration, ideation, and bringing your core team closer together.',
    capacity: 'Up to 20 guests',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=95',
    features: ['Interactive whiteboards', 'Ergonomic seating', 'Catered refreshment breaks'],
  },
  {
    id: 'e6',
    title: 'Corporate Retreats',
    category: 'Corporate',
    description: 'A perfect blend of focused work sessions and rejuvenating leisure activities to inspire your leadership and reward your teams.',
    capacity: 'Up to 50 guests',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=95',
    features: ['Team-building activities', 'Wellness programs', 'Exclusive dining experiences'],
  },
];
