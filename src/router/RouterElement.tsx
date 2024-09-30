import { Route, Routes } from 'react-router-dom'
import MainLayout from '../Layout/MainLayout'

import Home from '../Page/Home'
import Auth from '../Page/Auth'
import ProductList from '../Page/Product/ProductList'
import Login from '../Page/Auth/Login'
import Register from '../Page/Auth/register'
import Profile from '../Page/Proflie'
import VerifyEmail from '../Page/Auth/verifyEmail/VerifyEmail'

const RouterElement = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='' element={<Auth />}>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
        </Route>
        <Route path='/verify' element={<VerifyEmail />}></Route>
        <Route path='products' element={<ProductList />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
      </Route>
    </Routes>
  )
}

export default RouterElement
