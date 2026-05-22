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
    name: 'Ananya Singh',
    country: 'India',
    rating: 5,
    text: "We have stayed at many city hotels, but Hotel Bella Casa surpasses them all in convenience and warm hospitality. The staff remembered my preferences from my previous visit.",
    stayType: 'Super Deluxe Stay',
    avatar: '/images/exterior6.jpeg',
  },
  {
    id: 't2',
    name: 'Rajesh Verma',
    country: 'India',
    rating: 5,
    text: 'Extremely clean and comfortable rooms. The proximity to Purnia Junction and the bus stand made my transit seamless. Highly recommended for business travelers.',
    stayType: 'Deluxe AC Room',
    avatar: '/images/exterior7.jpeg',
  },
  {
    id: 't3',
    name: 'Priya Kapoor',
    country: 'India',
    rating: 5,
    text: "The pure vegetarian food served was delicious and fresh. Clean dining area, cooperative staff, and excellent value for money. Perfect place to stay with family.",
    stayType: 'Standard stay',
    avatar: '/images/exterior8.jpeg',
  },
  {
    id: 't4',
    name: 'Amit Sharma',
    country: 'India',
    rating: 5,
    text: "Outstanding customer service. The front desk was extremely helpful with local directions, doctor-on-call services, and coordinating our travel. A reliable stay in Purnia.",
    stayType: 'Business Trip',
    avatar: '/images/room1.jpeg',
  },
]
