import { motion } from 'framer-motion'

const Introduce = () => {
  return (
    <div className='grid grid-cols-2 container mx-auto my-7'>
      {/* Phần giới thiệu */}
      <motion.div
        className='flex flex-col items-center justify-center'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className='text-4xl font-bold mb-4'>Khám Phá Đà Nẵng với Công Nghệ AR</h1>
        <p className='text-lg mb-8 text-center'>Xu Hướng Công Nghệ Thực Tế Ảo Dành Cho Lĩnh Vực Du Lịch - Bảo Tàng</p>
      </motion.div>

      {/* Nhúng iframe */}
      <motion.div
        className='flex justify-center'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <iframe
          src='https://vr360.com.vn/projects/danang-virtual-tourists/#tongquan_danang_1'
          width='100%'
          height='500'
          className='rounded-lg shadow-lg'
          style={{ border: 'none' }}
          title='AR Tour'
          loading='lazy'
        ></iframe>
      </motion.div>
    </div>
  )
}

export default Introduce
