import { Link, useLocation } from 'react-router-dom'

const Nav: React.FC = () => {
  const location = useLocation() // Get the current location

  return (
    <div className='flex gap-5 font-semibold text-[16px] '>
      <Link
        to='/'
        className={`border border-black rounded-full px-5 py-2 cursor-pointer hover:bg-grey1/90 ${location.pathname === '/' ? 'bg-black text-white' : ''}`}
      >
        Lưu trú
      </Link>
      <p
        className={`border border-black rounded-full px-5 py-2 cursor-pointer hover:bg-grey1/90 ${location.pathname === '/gioithieu' ? 'bg-black text-white' : ''}`}
      >
        Giới thiệu
      </p>
      <Link
        to={'/products'}
        className={`border border-black rounded-full px-5 py-2 cursor-pointer hover:bg-grey1/90 ${location.pathname === '/products' ? 'bg-black text-white hover:bg-black' : ''}`}
      >
        Đặt Phòng
      </Link>
    </div>
  )
}

export default Nav
