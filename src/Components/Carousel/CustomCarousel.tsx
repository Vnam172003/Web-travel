import React from 'react'
import { Carousel } from 'antd'

// Define the type for a hotel item

// Define the props for the CustomCarousel component

const hotelData = [
  {
    id: 1,
    name: 'Hotel Paradise',
    description: 'A luxurious stay in the heart of the city.',
    imgSrc:
      'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 2,
    name: 'Mountain Escape',
    description: 'A quiet retreat in the mountains.',
    imgSrc:
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWx8ZW58MHx8MHx8fDA%3D'
  },
  {
    id: 3,
    name: 'Beachside Resort',
    description: 'Relax with an ocean view at this top-rated resort.',
    imgSrc:
      'https://images.unsplash.com/photo-1549294413-26f195200c16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWx8ZW58MHx8MHx8fDA%3D'
  },
  {
    id: 4,
    name: 'Urban Oasis',
    description: 'Modern amenities in a downtown location.',
    imgSrc:
      'https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 5,
    name: 'Urban Oasis',
    description: 'Modern amenities in a downtown location.',
    imgSrc:
      'https://plus.unsplash.com/premium_photo-1678297269980-16f4be3a15a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsfGVufDB8fDB8fHww'
  }
]
const CustomCarousel = () => {
  return (
    <div className='customCarosel'>
      <Carousel dots={false} autoplay>
        {hotelData.map((item, index) => (
          <div key={index} className='relative flex justify-center items-center'>
            <img src={item.imgSrc} alt={item.name} className='h-[400px] w-full rounded-lg object-cover' />
            <div className='absolute inset-0 flex justify-center items-center'>
              <div className='text-white font-bold text-2xl'>{item.name}</div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default CustomCarousel
