import backgroundImage from '../../assets/imageAuthen.jpg'
import Login from './Login'

const Auth = () => {
  return (
    <div className='min-h-screen h-screen grid grid-cols-1 md:grid-cols-2'>
      <div className='hidden md:block relative'>
        <img src={backgroundImage} className='absolute inset-0 w-full h-full object-cover' alt='Background' />
      </div>
      <div className='flex items-center justify-center '>
        <div className='w-full max-w-md  p-8 rounded-lg shadow-xl'>
          <p className='text-2xl font-bold text-center mb-6'>Chào mừng bạn đến với Airbnb</p>
          <div className='space-y-6'>
            <Login />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
