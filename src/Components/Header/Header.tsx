import { Link } from 'react-router-dom'

import Nav from '../Nav'
import InforHeader from './InforHeader'
import Logo from './Logo'

const Header = () => {
  return (
    <header className='py-6 relative h-[150px] xl:py-6 px-5 xl:px-10 border-b-[1px] border-gray-200'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* logo */}
        <Link to='/'>
          <Logo />
        </Link>
        <>chào mừng đến arib</>
        <InforHeader />
      </div>
      <div className=' w-[70%] mx-auto top-28 bottom-0 left-0 right-0  absolute z-30 t'>
        <Nav />
      </div>
    </header>
  )
}

export default Header
