import { Link } from 'react-router-dom'

import Nav from '../Nav'
import InforHeader from './InforHeader'
import Logo from './Logo'

const Header = () => {
  return (
    <header className='py-6 xl:py-6 px-5 xl:px-10 border-b-[1px] border-gray-200'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* logo */}
        <Link to='/'>
          <Logo />
        </Link>
        {/* nav */}
        <div className='hidden xl:flex'>
          <Nav />
        </div>
        <InforHeader />
      </div>
    </header>
  )
}

export default Header
