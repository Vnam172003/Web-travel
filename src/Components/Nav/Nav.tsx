import { Link } from 'react-router-dom'

const Nav: React.FC = () => {
  return (
    <div className='flex gap-5 font-semibold text-[18px] '>
      <Link to='/' className={` px-5 py-2 cursor-pointer `}>
        Lưu trú
      </Link>
      <Link to={'/introduce'} className={` px-5 py-2 cursor-pointer `}>
        Giới thiệu
      </Link>
      {/* <Link to={'/hotel'} className={` px-5 py-2 cursor-pointer `}>
        Phân loại phòng
      </Link> */}
    </div>
  )
}

export default Nav
