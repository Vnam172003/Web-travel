import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { CalendarOutlined, HomeFilled, SearchOutlined, UserOutlined } from '@ant-design/icons'
import Map from '../../assets/map.svg'

const Nav: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string | null>(null) // Thay đổi kiểu dữ liệu

  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState('')
  const popoverRef = useRef<HTMLDivElement | null>(null) // Tham chiếu đến popover
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const Acctive = () => {
    return (
      <>
        {activeTab && (
          <div ref={popoverRef} className='absolute  top-[100%] w-full p-4 z-10'>
            <div className=''>
              {activeTab === 'place' && (
                <div className='bg-white w-[30%] pb-5  rounded-lg'>
                  <h1 className='font-semibold uppercase p-5 mb-3'>Địa điểm ưu thích</h1>
                  <button className=' p-2 flex items-center gap-2  border-b border-grey1 w-full hover:bg-grey1 '>
                    <img src={Map} alt='' className='w-5  ' />
                    <p className='font-normal text-[18px]'>Hội an</p>
                  </button>
                  <button className=' p-2 flex items-center gap-2  border-b border-grey1 w-full hover:bg-grey1 '>
                    <img src={Map} alt='' className='w-5  ' />
                    <p className='font-normal text-[18px]'>Hội an</p>
                  </button>
                </div>
              )}
              {activeTab === 'dates' && (
                <div className='flex space-x-2 bg-white p-5'>
                  <input
                    type='date'
                    className='flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500'
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                  />
                  <input
                    type='date'
                    className='flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500'
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                  />
                </div>
              )}
              {activeTab === 'guests' && (
                <input
                  type='number'
                  placeholder='Số lượng khách'
                  className='w-[30%] absolute right-0 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500'
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                />
              )}
            </div>
          </div>
        )}
      </>
    )
  }
  const handleClickOutside = (event: MouseEvent) => {
    if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
      setActiveTab(null)
    }
  }

  return (
    <div className='mx-auto w-full bg-gray-100 rounded-lg border-4 border-primary/70 shadow-md  relative'>
      <div className='flex items-center justify-between '>
        <motion.div
          className={`flex-1 flex items-center  border-l border-primary/70 h-full text-sm font-medium ${
            activeTab === 'place'
          }`}
          onClick={() => setActiveTab(activeTab === 'place' ? null : 'place')} // Toggle
          whileTap={{ transition: { duration: 0.5 } }}
        >
          <HomeFilled className='text-lg py-4 pl-2 text-grey ' />
          <input
            type='text'
            placeholder='Bạn muốn đến đâu'
            className='text-black  bg-transparent border-none outline-none p-4'
          />
        </motion.div>
        <motion.button
          className={`flex-1 p-4 flex justify-center gap-3  border-l border-primary/70 text-sm font-semibold ${activeTab === 'dates' ? 'bg-primary/40 text-grey1' : 'text-gray-700'}`}
          onClick={() => setActiveTab(activeTab === 'dates' ? null : 'dates')} // Toggle
          whileTap={{ transition: { duration: 0.5 } }}
        >
          <CalendarOutlined className='text-lg   text-grey' />
          <p>Ngày nhận phòng</p>
        </motion.button>
        <motion.button
          className={`flex-1 flex gap-3 justify-center p-4 border-x border-primary/70 text-sm font-semibold ${activeTab === 'guests' ? 'bg-primary/40 text-grey1' : 'text-gray-700'}`}
          onClick={() => setActiveTab(activeTab === 'guests' ? null : 'guests')} // Toggle
          whileTap={{ transition: { duration: 0.5 } }}
        >
          <UserOutlined className='text-lg   text-grey' />
          <span>số lượng khách</span>
        </motion.button>
        <motion.button
          className='bg-primary text-white p-3 mx-2  rounded-lg   text-sm font-semibold'
          whileHover={{ scale: 1.05 }}
          whileTap={{ transition: { duration: 0.5 } }}
        >
          <SearchOutlined className='flex justify-center' />
        </motion.button>
      </div>
      {/* active */}
      <Acctive />
    </div>
  )
}

export default Nav
