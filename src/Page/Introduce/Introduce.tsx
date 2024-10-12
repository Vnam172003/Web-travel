import { motion } from 'framer-motion'

const Introduce = () => {
  return (
    <div className='grid grid-cols-2 container mx-auto my-7'>
      {/* Existing content */}
      <motion.div
        className='flex flex-col items-center justify-center'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className='text-4xl font-bold mb-4'>Khám Phá Đà Nẵng với Công Nghệ AR</h1>
        <p className='text-lg mb-8 text-center'>Xu Hướng Công Nghệ Thực Tế Ảo Dành Cho Lĩnh Vực Du Lịch - Bảo Tàng</p>
        <a
          href='https://vr360.com.vn/projects/danang-virtual-tourists/#tongquan_danang_1'
          target='_blank'
          rel='noopener noreferrer' // Bảo mật khi mở liên kết mới
          className='bg-black text-white py-5 px-4 rounded-lg hover:bg-black/65'
        >
          Bắt Đầu Hành Trình Của Bạn
        </a>
      </motion.div>
      <motion.div
        className='flex justify-center'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src='https://i.pinimg.com/736x/c9/eb/0a/c9eb0a95bde5a729503a589beb80c774.jpg'
          alt='AR Tour'
          className='mb-8 rounded-lg shadow-lg'
        />
      </motion.div>

      {/* New content for benefits with reduced text */}
    </div>
  )
}

export default Introduce
