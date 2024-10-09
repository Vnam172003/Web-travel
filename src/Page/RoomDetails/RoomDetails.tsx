import { Button, DatePicker, Form, Input, Typography } from 'antd'
import {
  HeartOutlined,
  VerticalAlignBottomOutlined,
  HomeOutlined,
  WifiOutlined,
  CoffeeOutlined,
  SafetyOutlined
} from '@ant-design/icons'
import { Rate } from 'antd'

import Payment from '../Payment/Payment'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const { Title } = Typography
const RoomDetails = () => {
  const { hotelId } = useParams<{ hotelId: string }>()
  const [hotel, setHotel] = useState(null)
  const [rooms, setRooms] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchHotelDetails = async () => {
      try {
        const hotelData = await axios.get(`http://localhost:4000/api/v1/hotels/${hotelId}`)
        setHotel(hotelData.data.data)
        console.log(hotelData.data.data)
        const roomsData = await axios.get(`http://localhost:4000/api/v1/hotels/rooms/${hotelId}`)
        console.log(roomsData.data.data)
        setRooms(roomsData.data.data)
        setIsLoading(false)
      } catch (error) {
        console.error(error)
        setIsLoading(false)
      }
    }

    fetchHotelDetails()
  }, [hotelId])

  return (
    <div className='main'>
      <div className='container mx-auto my-5'>
        <header className='flex justify-between items-center'>
          <Title level={2}> {hotel?.name} </Title>
          <div className='  text-lg flex gap-5 cursor-pointer'>
            <div className='hover:bg-grey1 px-1 py-2 rounded-lg '>
              <VerticalAlignBottomOutlined />
              <span className='px-1 underline'>chia sẽ</span>
            </div>
            <div className='hover:bg-grey1 px-1 py-2 rounded-lg '>
              <HeartOutlined />
              <span className='px-1 underline'>lưu</span>
            </div>
          </div>
        </header>
        <body>
          {/* image */}
          <div className='grid grid-cols-5 gap-4'>
            <div className='col-span-2 '>
              <img src={hotel?.images[0]} alt='Large Image' className='w-full h-full object-cover rounded-lg' />
            </div>
            <div className='col-span-3'>
              <div className='grid grid-cols-2 gap-2'>
                <img src={hotel?.images[1]} alt='Small Image 1' className='w-full h-auto rounded-lg' />
                <img src={hotel?.images[2]} alt='Small Image 2' className='w-full h-auto rounded-lg' />
                <img src={hotel?.images[3]} alt='Small Image 3' className='w-full h-auto rounded-lg' />
                <img src={hotel?.images[4]} alt='Small Image 4' className='w-full h-auto rounded-lg' />
                <img src={hotel?.images[5]} alt='Small Image 4' className='w-full h-auto rounded-lg' />
              </div>
            </div>
          </div>
          {/* content */}
          <div className='mt-5 grid grid-cols-4 cursor-pointer '>
            <div className='col-span-3 mx-10'>
              <Title level={3}>Phòng tại South Yarra, Australia</Title>
              <div className='mt-1 space-x-3'>
                <span className='text-lg'>4 .khách</span>
                <span className='text-lg'>2 .phòng ngủ</span>
                <span className='text-lg'>2 .giường</span>
                <span className='text-lg'>2 .phòng tắm</span>
              </div>
              {/* New introduction section */}
              <div className='mt-3'>
                <Title level={3}>
                  <HomeOutlined /> Giới thiệu về chỗ ở này
                </Title>
                <Title level={5}>{hotel?.description}</Title>
                <Title level={5}>{hotel?.address}</Title>
                <Title level={5}>{hotel?.amenities[0]}</Title>
                <Title level={5}>{hotel?.amenities[1]}</Title>
                <Title level={5}>{hotel?.amenities[2]}</Title>
                <Title level={5}>{hotel?.amenities[3]}</Title>
              </div>
              {/* New amenities section */}
              <div className='mt-3 border-y border-black py-2'>
                <Title level={3}>
                  <SafetyOutlined /> Tiện nghi khách có quyền sử dụng
                </Title>
                <div className='mt-2 space-y-2 '>
                  {/* Added margin and vertical spacing */}
                  <Title level={4}>
                    <WifiOutlined className='text-xl mr-2' /> Wi-fi
                  </Title>
                  <Title level={4}>
                    <CoffeeOutlined className='text-xl mr-2' /> Máy Nespresso
                  </Title>
                  <Title level={4}>
                    <HomeOutlined className='text-xl mr-2' /> Tủ lạnh
                  </Title>
                  <Title level={4}>
                    <SafetyOutlined className='text-xl mr-2' /> Hệ thống sưởi trung tâm
                  </Title>
                </div>
              </div>
              {/* New host section */}

              <div className='my-4'>
                <h3 className='text-lg font-bold'>Chủ căn hộ</h3>
                <p className='text-md'>Tên Chủ: John Doe</p>
              </div>

              <Title level={5}>
                Chúng tôi sống cách Sacre Coeur 20 phút đi bộ, cách kênh đào Saint-Martin 10 phút đi bộ và cách Gare du
                Nord 5 phút đi bộ. Căn hộ có cảm giác "bourgeois-boheme", với tác phẩm nghệ thuật gốc và đồ nội thất cổ
                điển từ những năm 1940-50. Nó cung cấp tất cả sự thoải mái bạn cần: hệ thống sưởi trung tâm, kính hai
                lớp, giường và ga trải giường thoải mái, máy pha cà phê, bếp lò để nấu ăn, vòi sen đi bộ tuyệt vời và
                kết nối internet wifi. Xin lưu ý rằng trong khi nhà bếp hoàn hảo để chuẩn bị bữa sáng và bữa trưa/bữa
                tối nhẹ, nó không được thiết kế để nấu các bữa ăn phức tạp. Nếu bạn có bất kỳ thắc mắc nào khác, vui
                lòng liên hệ với chúng tôi. Chúng tôi rất mong được chào đón bạn!
              </Title>
            </div>
            {/* Infor */}
            {/* <div className='col-span-1'>
              <Form action='' className='border rounded-lg p-3'>
                <div className='flex items-center gap-1'>
                  <Title level={3}>190.000đ</Title>
                  <span className='text-lg mb-2'>/đêm</span>
                </div>
                <div className='grid grid-cols-2  border hover:border-black rounded-lg'>
                  <div className='border-r p-2 col-span-1'>
                    <h3 className='text-md font-bold '>NHẬN PHÒNG</h3>
                    <span>17/08/2003</span>
                  </div>
                  <div className=' p-2 col-span-1 '>
                    <h3 className='text-md font-bold '>NHẬN PHÒNG</h3>
                    <span>17/08/2003</span>
                  </div>
                </div>
                <div className='grid grid-cols-2  border hover:border-black rounded-lg'>
                  <div className=' p-2 col-span-1'>
                    <h3 className='text-md font-bold '>KHÁCH</h3>
                    <span>1</span>
                  </div>
                </div>

                <Button type='primary' htmlType='submit' className='my-3 w-full '>
                  Đặt phòng
                </Button>
                <div className='flex items-center gap-1'>
                  <Title level={5}>Phí vệ sinh: 10.000đ</Title>
                </div>
                <div className='flex items-center gap-1'>
                  <Title level={5}>Phí dịch vụ: 20.000đ</Title>
                </div>
                <div className='flex items-center gap-1 border-t'>
                  <Title level={4}>Tổng tiền: 220.000đ</Title>
                </div>
              </Form>
            </div> */}
          </div>
          <Payment rooms={rooms} />
          {/* New reviews section */}
          <div className='mt-5 border-t pt-3'>
            <h3 className='text-xl font-bold'>Đánh giá phòng</h3> {/* Increased heading size */}
            <div className='grid grid-cols-2 gap-4 mt-2'>
              <div className='border p-2'>
                <p className='text-lg font-bold'>Người đánh giá: Jane Doe</p> {/* Increased name size */}
                <p className='text-lg'>Ngày đánh giá: 01/01/2023</p> {/* Increased date size */}
                <Rate allowHalf defaultValue={5} /> {/* Star rating */}
                <p className='text-lg'>“Căn hộ tuyệt vời, rất thoải mái và sạch sẽ!”</p>{' '}
                {/* Increased review text size */}
              </div>
              <div className='border p-2'>
                <p className='text-lg font-bold'>Người đánh giá: John Smith</p> {/* Increased name size */}
                <p className='text-lg'>Ngày đánh giá: 02/01/2023</p> {/* Increased date size */}
                <Rate allowHalf defaultValue={4} /> {/* Star rating */}
                <p className='text-lg'>“Vị trí tuyệt vời, gần nhiều điểm tham quan.”</p>{' '}
                {/* Increased review text size */}
              </div>
              {/* Add more reviews as needed */}
            </div>
          </div>
        </body>
      </div>
    </div>
  )
}

export default RoomDetails
