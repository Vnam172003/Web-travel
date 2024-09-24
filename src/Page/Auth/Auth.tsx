import { GoogleOutlined } from '@ant-design/icons'
import backgroundImage from '../../assets/imageAuthen.jpg'

import { handleGoogle } from '../../hooks/Auth/HandleGoogle'
import { Outlet } from 'react-router-dom'

const Auth = () => {
  const loginWithGoogle = async () => {
    await handleGoogle() // Gọi hàm handleGoogle từ file khác
  }
  return (
    <div className='min-h-screen h-screen grid grid-cols-1 md:grid-cols-2'>
      <div className='hidden md:block relative'>
        <img src={backgroundImage} className='absolute inset-0 w-full h-full object-cover' alt='Background' />
      </div>
      <div className='flex items-center justify-center '>
        <div className='w-full max-w-md  p-8 rounded-lg shadow-xl'>
          <p className='text-2xl font-bold text-center mb-6'>Chào mừng bạn đến với Airbnb</p>
          <div className='space-y-6'>
            <Outlet />
          </div>
          <div className='flex items-center justify-center gap-3 py-5'>
            <hr className='w-1/2 border-gray-300' />
            <p>hoặc</p>
            <hr className='w-1/2 border-gray-300' />
          </div>
          <button
            onClick={loginWithGoogle}
            className='w-full font-medium  px-4 text-center border border-gray-300 rounded-md py-3 hover:bg-gray-200 cursor-pointer '
          >
            <GoogleOutlined className='text-primary text-xl text-center mr-1' />
            <span> Đăng nhập với google</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Auth
