import { motion } from 'framer-motion'

import { useState } from 'react'

const Section = () => {
  const [activeTab, setActiveTab] = useState('flights')
  return (
    <section className='py-16 bg-gray-100'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold mb-8 text-center'>Tìm Kiếm và Đặt Chỗ</h2>
        <div className='bg-white rounded-lg shadow-lg p-6'>
          <div className='flex mb-6'>
            {['Khách sạn ', 'căn hộ', 'biệt thự'].map((tab) => (
              <button
                key={tab}
                className={`flex-1 py-4 text-lg ${activeTab === tab ? 'border-b-2 border-blue-500' : ''}`} // Tăng kích thước chữ
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          <div className='mt-4 flex justify-center'>
            {' '}
            {/* Căn giữa hình ảnh */}
            {activeTab === '' && ( // Hình ảnh khi chưa click
              <motion.img
                src='https://images.pexels.com/photos/53464/sheraton-palace-hotel-lobby-architecture-san-francisco-53464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='Hình ảnh mặc định'
                className='w-[700px] h-auto'
                whileHover={{ scale: 1.05 }}
              />
            )}
            {['Khách sạn ', 'căn hộ', 'biệt thự'].map(
              (tab) =>
                activeTab === tab && (
                  <div className='mt-4' key={tab}>
                    <motion.img
                      src={
                        tab === 'Khách sạn '
                          ? 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&dpr=1'
                          : tab === 'căn hộ'
                            ? 'https://images.pexels.com/photos/813692/pexels-photo-813692.jpeg?auto=compress&cs=tinysrgb&w=800&h=450'
                            : 'https://images.pexels.com/photos/1661566/pexels-photo-1661566.jpeg?auto=compress&cs=tinysrgb&w=800&h=450' // Hình ảnh biệt thự
                      }
                      alt={tab}
                      className='w-full h-auto'
                      whileHover={{ scale: 1.05 }}
                      drag
                      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                      whileDrag={{ scale: 1.05 }}
                    />
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section
