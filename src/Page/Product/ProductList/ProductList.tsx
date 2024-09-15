import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
}

const products: Product[] = [
  {
    id: 1,
    name: 'Tour Hạ Long Bay',
    description: 'Khám phá vịnh Hạ Long tuyệt đẹp',
    price: 1200000,
    image: 'https://source.unsplash.com/random/400x300?halong'
  },
  {
    id: 2,
    name: 'Phố cổ Hội An',
    description: 'Trải nghiệm văn hóa tại Hội An',
    price: 800000,
    image: 'https://source.unsplash.com/random/400x300?hoian'
  },
  {
    id: 3,
    name: 'Sapa Adventure',
    description: 'Khám phá vẻ đẹp núi rừng Tây Bắc',
    price: 1500000,
    image: 'https://source.unsplash.com/random/400x300?sapa'
  },
  {
    id: 4,
    name: 'Đà Nẵng Beach Retreat',
    description: 'Thư giãn tại bãi biển Đà Nẵng',
    price: 1000000,
    image: 'https://source.unsplash.com/random/400x300?danang'
  },
  {
    id: 5,
    name: 'Mekong Delta Explorer',
    description: 'Khám phá sông nước miền Tây',
    price: 900000,
    image: 'https://source.unsplash.com/random/400x300?mekong'
  },
  {
    id: 6,
    name: 'Huế Imperial City',
    description: 'Tham quan cố đô Huế',
    price: 700000,
    image: 'https://source.unsplash.com/random/400x300?hue'
  }
]

const ProductList: React.FC = () => {
  const [filter, setFilter] = useState('')

  const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div className='bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-3xl font-extrabold text-gray-900 mb-6 text-center'>Khám Phá Điểm Đến</h1>

        <div className='mb-6'>
          <input
            type='text'
            placeholder='Tìm kiếm điểm đến...'
            className='w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              className='bg-white rounded-lg shadow-md overflow-hidden'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img src={product.image} alt={product.name} className='w-full h-48 object-cover' />
              <div className='p-4'>
                <h2 className='text-xl font-semibold text-gray-800 mb-2'>{product.name}</h2>
                <p className='text-gray-600 mb-4'>{product.description}</p>
                <div className='flex justify-between items-center'>
                  <span className='text-lg font-bold text-indigo-600'>
                    {product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                  </span>
                  <button className='bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition duration-300'>
                    Đặt ngay
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductList
