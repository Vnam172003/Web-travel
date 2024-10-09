import { motion } from 'framer-motion'
import Image from '../../assets/imageIntroduce.png'
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
      <div className='col-span-2 mt-10 flex'>
        {/* Image Section */}
        <motion.div
          className='w-1/2 flex flex-col justify-center items-center p-6'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={Image} alt='AR Tour' className='rounded-lg shadow-lg max-w-full h-auto' />
        </motion.div>
        <div className='w-1/2 p-6'>
          <h2 className='text-3xl font-bold mb-6'>Lợi ích khi ứng dụng thực tế ảo</h2>
          <p className='text-lg mb-6 leading-relaxed'>
            Công nghệ thực tế ảo mang lại nhiều lợi ích cho lĩnh vực du lịch bảo tàng, bao gồm trải nghiệm sống động và
            trực quan.
          </p>
          <h3 className='text-2xl font-semibold mb-4'>Trải nghiệm sống động</h3>
          <p className='text-lg leading-relaxed'>
            Khách hàng có thể di chuyển và tương tác với không gian bảo tàng một cách chân thực mà không cần hướng dẫn
            viên.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Introduce
