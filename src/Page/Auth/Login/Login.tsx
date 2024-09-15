import { ButtonAdnt } from '../../../Components/button'
import { useForm } from 'react-hook-form'
import { schema, schemaType } from '../../../utils/Rule'
import { yupResolver } from '@hookform/resolvers/yup'
import { GoogleOutlined } from '@ant-design/icons'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../../../../firebase/FirebaseConfig'

const Login = () => {
  const handleGoogle = async () => {
    const provide = new GoogleAuthProvider()
    const loginInfo = await signInWithPopup(auth, provide)
    console.log(loginInfo)
  }
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<schemaType>({ resolver: yupResolver(schema) })

  const onSubmit = (data: schemaType) => {
    console.log(data)
  }
  return (
    <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          id='email'
          type='email'
          {...register('email')}
          required
          className='mt-1 block w-full px-5 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary'
          placeholder='Nhập email của bạn'
        />
        {errors.email && <p className='text-red-500 mt-1'>{errors.email?.message}</p>}
        <p className='text-sx text-gray-500 mt-3'>
          Chúng tôi sẽ nhắn tin vào Gmail của bạn.{' '}
          <a className='text-primary underline' href='https://mail.google.com'>
            Link gmail
          </a>
        </p>
      </div>

      <div>
        <ButtonAdnt label='Tiếp tục' style='py-3' />
      </div>
      <div className='flex items-center justify-center gap-3'>
        <hr className='w-1/2 border-gray-300' />
        <p>hoặc</p>
        <hr className='w-1/2 border-gray-300' />
      </div>
      <div>
        <button
          onClick={handleGoogle}
          className='w-full font-medium  px-4 text-center border border-gray-300 rounded-md py-3 hover:bg-gray-200 cursor-pointer '
        >
          <GoogleOutlined className='text-primary text-xl text-center mr-1' />
          <span> Đăng nhập với google</span>
        </button>
      </div>
    </form>
  )
}

export default Login
