export interface Testimonial {
  id: string
  name: string
  country: string
  rating: number
  text: string
  stayType: string
  avatar: string
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Rahul & Meera',
    country: 'India',
    rating: 5,
    text: "We came with our kids for a weekend and did not want to leave. The pool, the lawns and the food — everything was easy and relaxed. It felt personal, not like a big resort.",
    stayType: 'Family Getaway',
    avatar: '/images/room1.jpeg',
  },
  {
    id: 't2',
    name: 'Sneha',
    country: 'India',
    rating: 5,
    text: 'Celebrated my birthday here and it was exactly what I wanted — a private day by the pool, good music and a live tandoor in the evening. The team took care of everything.',
    stayType: 'Birthday Celebration',
    avatar: '/images/exterior6.jpeg',
  },
  {
    id: 't3',
    name: 'Amit Deshpande',
    country: 'India',
    rating: 5,
    text: 'We brought our team for an offsite and it worked perfectly. Great meeting space, genuinely good food and plenty to do in between sessions. Everyone wants to go back.',
    stayType: 'Corporate Offsite',
    avatar: '/images/exterior7.jpeg',
  },
  {
    id: 't4',
    name: 'Nandini',
    country: 'India',
    rating: 5,
    text: 'The food is the highlight — familiar, generous and made with care. Evenings on the lawn with the family, away from the city noise, felt exactly like a proper break.',
    stayType: 'Weekend Stay',
    avatar: '/images/exterior8.jpeg',
  },
]
