import { Route, Routes } from 'react-router-dom'
import MainLayout from '../Layout/MainLayout'

import Home from '../Page/Home'
import Auth from '../Page/Auth'
import ProductList from '../Page/Product/ProductList'

const RouterElement = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='auth' element={<Auth />}></Route>
        <Route path='products' element={<ProductList />}></Route>
      </Route>
    </Routes>
  )
}

export default RouterElement
