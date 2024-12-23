import { useRef, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'
import Video from '../../assets/video.mp4'
import Section from './Section'
import FormSearch from './FormSeach'
import { images } from '../../Components/Image/ImageDestinaton'
import { Typography } from 'antd'

import CustomCarousel from '../../Components/Carousel/CustomCarousel'
import { Link } from 'react-router-dom'

const Home = () => {
  const { Title, Text } = Typography
  const { scrollYProgress } = useScroll()

  const videoRef = useRef<HTMLVideoElement>(null)
  const fadeInVariant = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' }
    }
  }

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

  const Destination = () => {
    return (
      <section className='py-16 container mx-auto'>
        <Title level={3} className='mx-10'>
          Các địa điểm thịnh hành
        </Title>
        <div className='grid grid-rows-2 gap-8 mt-5 mx-10'>
          {/* Top Section: 2 images in one row */}
          <div className='grid grid-cols-2 gap-8'>
            {images.slice(0, 2).map((image, index) => (
              <motion.div
                key={index}
                className='bg-white rounded-lg relative shadow-lg overflow-hidden'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.img
                  src={image.src}
                  alt={image.name}
                  className='w-full h-60 object-cover'
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                {/* Overlay with hover effect */}
                <motion.div
                  className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center  hover:opacity-100 transition-opacity duration-300'
                  whileHover={{ opacity: 1 }}
                >
                  <h3 className='text-white text-xl font-semibold'>{image.name}</h3>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Section: 3 images in one row */}
          <div className='grid grid-cols-3 gap-8'>
            {images.slice(2, 5).map((image, index) => (
              <motion.div
                key={index}
                className='bg-white rounded-lg relative shadow-lg overflow-hidden'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.img
                  src={image.src}
                  alt={image.name}
                  className='w-full h-60 object-cover'
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                {/* Overlay with hover effect */}
                <motion.div
                  className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300'
                  whileHover={{ opacity: 1 }}
                >
                  <h3 className='text-white text-xl font-semibold'>{image.name}</h3>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  const PopularHotel = () => {
    return (
      <section className='py-16 '>
        <div className='grid grid-cols-2 mx-32'>
          <CustomCarousel />
          <div className='mx-24 my-auto'>
            <Title level={3}>Khám phá những khách sạn đẳng cấp</Title>
            <Text className='text-[16px]'>
              của Btravel Btravel tự hào mang đến cho bạn những trải nghiệm nghỉ dưỡng hoàn hảo với hệ thống khách sạn
              sang trọng và tiện nghi. Mỗi khách sạn được chúng tôi lựa chọn kỹ lưỡng, từ vị trí trung tâm thuận lợi đến
              những dịch vụ đẳng cấp quốc tế. Dù bạn đang tìm kiếm sự thư giãn trong những khu nghỉ dưỡng yên tĩnh hay
              không gian sôi động của thành phố, Btravel luôn sẵn sàng đồng hành cùng bạn trên mọi hành trình. Hãy để
              chúng tôi giúp bạn tận hưởng kỳ nghỉ trọn vẹn nhất!
            </Text>
          </div>
        </div>
      </section>
    )
  }
  return (
    <div>
      <div className='fixed z-50 flex items-end justify-center left-1/2 bottom-5 transform -translate-x-1/2'>
        <Link
          to={'/map'}
          className='flex gap-2 cursor-pointer bg-black text-white px-3 py-2 rounded-full shadow-lg hover:bg-black/85 hover:scale-105'
        >
          <h2 className='text-lg '>Hiện bản đồ</h2>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-5 mt-1'>
            <path
              fillRule='evenodd'
              d='M8.161 2.58a1.875 1.875 0 0 1 1.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0 1 21.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 0 1-1.676 0l-4.994-2.497a.375.375 0 0 0-.336 0l-3.868 1.935A1.875 1.875 0 0 1 2.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437ZM9 6a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 9 6Zm6.75 3a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0V9Z'
              clipRule='evenodd'
            />
          </svg>
        </Link>
      </div>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className='fixed top-0 left-0 h-2 w-full bg-gradient-to-br from-purple-500 to-pink-500 z-50 origin-left'
      >
        .
      </motion.div>
      {/* Hero Section */}
      <section className='relative h-screen overflow-hidden'>
        <video
          ref={videoRef}
          className='p-2 rounded-[30px] absolute inset-0 w-full h-full object-cover'
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={Video} type='video/mp4' />
        </video>

        {/* Gradient Overlay */}
        <div className='absolute inset-0 bg-gradient-to-t m-2 rounded-[15px] from-black to-transparent opacity-50'></div>

        <div className='relative z-10 h-full flex items-center justify-center text-white'>
          <motion.div initial='hidden' animate='visible' variants={fadeInVariant} className='grid grid-cols-2 '>
            <div className='col-span-1 mx-16 mt-28'>
              <h1 className='text-5xl md:text-6xl font-bold mb-4'>Khám Phá Việt Nam</h1>
              <p className='text-xl md:text-4xl mb-8'>Trải nghiệm vẻ đẹp đa dạng và văn hóa phong phú</p>
              <p className='text-base md:text-lg mt-20'>
                Dù là một chuyến đi nghỉ dưỡng ngắn ngày hay một kỳ nghỉ dài, chúng tôi luôn có sẵn những gói dịch vụ
                tốt nhất để đáp ứng mọi nhu cầu của bạn. Đặt chỗ ngay để không bỏ lỡ những trải nghiệm tuyệt vời tại
                Việt Nam.
              </p>
            </div>
            <FormSearch />
          </motion.div>
        </div>
      </section>
      <Section />
      <PopularHotel />
      <Destination />
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
