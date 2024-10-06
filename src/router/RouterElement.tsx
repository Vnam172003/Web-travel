import { Route, Routes } from 'react-router-dom'
import MainLayout from '../Layout/MainLayout'

import Home from '../Page/Home'
import Auth from '../Page/Auth'

import Login from '../Page/Auth/Login'
import Register from '../Page/Auth/register'
import Profile from '../Page/Profile'
import VerifyEmail from '../Page/Auth/verifyEmail/VerifyEmail'

import SearchAndListView from '../Page/BookingService/SearchAndListView'
import RoomDetails from '../Page/RoomDetails'
import BookingHistory from '../Page/History'

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
        <Route path='/roomlist' element={<SearchAndListView />}></Route>
        <Route path='/roomDetails' element={<RoomDetails />}></Route>
        <Route path='/history' element={<BookingHistory />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
      </Route>
    </Routes>
  )
}

export default RouterElement
