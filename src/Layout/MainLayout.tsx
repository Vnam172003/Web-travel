import { Outlet } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import PageTransition from './PageTransition'
import StairEffect from './StairEffect'

const MainLayout = () => {
  return (
    <div>
      <StairEffect />
      <Header />
      <PageTransition>
        <Outlet />
      </PageTransition>
      <Footer />
    </div>
  )
}

export default MainLayout
