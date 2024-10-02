import { Link } from 'react-router-dom'

const Nav: React.FC = () => {
  return (
    <div className='flex gap-5 font-semibold text-[18px] '>
      <Link to='/' className={` px-5 py-2 cursor-pointer `}>
        Lưu trú
      </Link>
      <p className={` px-5 py-2 cursor-pointer `}>Giới thiệu</p>
      <Link to={'/roomlist'} className={` px-5 py-2 cursor-pointer `}>
        Đặt Phòng
      </Link>
    </div>
  )
}

export default Nav
