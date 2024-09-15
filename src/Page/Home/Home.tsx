import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Video from '../../assets/video.mp4'
import Image from '../../assets/ImageHome.png'
import { Link } from 'react-router-dom'
const Home = () => {
  const [activeTab, setActiveTab] = useState('flights')
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('loadedmetadata', () => {
        if (videoRef.current) {
          // Đặt thời gian bắt đầu của video (nếu cần)
          videoRef.current.currentTime = 0

          // Đặt thời gian kết thúc của video sau 15 giây
          const endTime = 15

          const handleTimeUpdate = () => {
            if (videoRef.current && videoRef.current.currentTime >= endTime) {
              videoRef.current.currentTime = 0 // Quay lại đầu video
            }
          }

          videoRef.current.addEventListener('timeupdate', handleTimeUpdate)

          // Cleanup function
          return () => {
            if (videoRef.current) {
              videoRef.current.removeEventListener('timeupdate', handleTimeUpdate)
            }
          }
        }
      })
    }
  }, [])

  return (
    <div className='bg-white text-gray-800'>
      {/* Hero Section */}
      <section className='relative h-screen'>
        <video ref={videoRef} className='absolute inset-0 w-full h-full object-cover' autoPlay muted loop playsInline>
          <source src={Video} type='video/mp4' />
        </video>
        <div className='absolute inset-0 bg-black bg-opacity-50'></div>
        <div className='relative z-10 h-full flex items-center justify-center text-white'>
          <div className='text-center'>
            <h1 className='text-5xl md:text-6xl font-bold mb-4'>Khám Phá Việt Nam</h1>
            <p className='text-xl md:text-2xl mb-8'>Trải nghiệm vẻ đẹp đa dạng và văn hóa phong phú</p>
            <Link to='/products'>
              <motion.button
                className='bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary/90 transition'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Bắt đầu hành trình
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className='py-16 bg-gray-100'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-8 text-center'>Tìm Kiếm và Đặt Chỗ</h2>
          <div className='bg-white rounded-lg shadow-lg p-6'>
            <div className='flex mb-6'>
              {['flights', 'hotels', 'tours'].map((tab) => (
                <button
                  key={tab}
                  className={`flex-1 py-2 ${activeTab === tab ? 'border-b-2 border-blue-500' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
            {/* Add your search form here based on activeTab */}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-8 text-center'>Điểm Đến Nổi Bật</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {['Hạ Long Bay', 'Hội An', 'Sapa'].map((place, index) => (
              <motion.div
                key={place}
                className='bg-white rounded-lg shadow-lg overflow-hidden'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img src={Image} alt={place} className='w-full h-48 object-cover' />
                <div className='p-6'>
                  <h3 className='text-xl font-bold mb-2'>{place}</h3>
                  <p className='text-gray-600'>Khám phá vẻ đẹp độc đáo và văn hóa phong phú của {place}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className='py-16 bg-gray-100'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-8 text-center'>Ưu Đãi Đặc Biệt</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {['Giảm giá mùa hè', 'Combo tiết kiệm'].map((offer, index) => (
              <motion.div
                key={offer}
                className='bg-white rounded-lg shadow-lg p-6'
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className='text-xl font-bold mb-4'>{offer}</h3>
                <p className='text-gray-600 mb-4'>Mô tả ngắn về ưu đãi đặc biệt này...</p>
                <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'>
                  Xem chi tiết
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-8 text-center'>Khách Hàng Nói Gì</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[1, 2, 3].map((_, index) => (
              <motion.div
                key={index}
                className='bg-white rounded-lg shadow-lg p-6'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className='text-gray-600 mb-4'>"Trải nghiệm tuyệt vời! Tôi sẽ quay lại Việt Nam..."</p>
                <p className='font-bold'>- Khách hàng {index + 1}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
