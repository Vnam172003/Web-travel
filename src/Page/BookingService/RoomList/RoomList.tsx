import { Card, Col, Row, Typography, Pagination, Select, Spin } from 'antd'
import { StarFilled, HeartOutlined, HeartFilled } from '@ant-design/icons'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSearchRoom } from '../../../hooks/room/useSearchRoom'
import LoadingElement from '../../../Components/LoadingElement'
const { Title, Text } = Typography

// Dữ liệu mẫu cho danh sách phòng
const roomData = [
  {
    id: 1,
    name: 'Phòng Deluxe',
    price: 150,
    rating: 4.5,
    image:
      'https://a0.muscache.com/im/pictures/miso/Hosting-626767327976025919/original/43f98d45-63b4-447c-9360-d4232f4e578b.jpeg?im_w=720', // Hình ảnh mẫu
    description: 'Phòng rộng rãi với tầm nhìn đẹp, đầy đủ tiện nghi.'
  },
  {
    id: 2,
    name: 'Phòng Superior',
    price: 120,
    rating: 4.0,
    image:
      'https://a0.muscache.com/im/pictures/miso/Hosting-626767327976025919/original/43f98d45-63b4-447c-9360-d4232f4e578b.jpeg?im_w=720',
    description: 'Phòng hiện đại, thích hợp cho cặp đôi hoặc du khách.'
  },
  {
    id: 3,
    name: 'Phòng Tiêu chuẩn',
    price: 80,
    rating: 3.5,
    image:
      'https://a0.muscache.com/im/pictures/hosting/Hosting-918829912253314937/original/7c5d8821-e727-48e5-ac2b-27688ec323e2.jpeg?ml=true&im_w=720',
    description: 'Phòng cơ bản với các tiện nghi cần thiết.'
  },
  {
    id: 4,
    name: 'Phòng Gia đình',
    price: 200,
    rating: 5.0,
    image: 'https://via.placeholder.com/300',
    description: 'Phòng lớn với không gian thoải mái cho cả gia đình.'
  }
  // Thêm nhiều phòng khác nếu cần
]

const RoomList = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [favoriteRooms, setFavoriteRooms] = useState<number[]>([])
  const pageSize = 4 // Số lượng phòng hiển thị trên mỗi trang
  const totalRooms = roomData.length
  const location = useLocation()

  const { data, isLoading } = useSearchRoom(location?.state)
  const resultFind = data?.data.data

  // Xử lý nút yêu thích
  const toggleFavorite = (roomId: number) => {
    setFavoriteRooms(
      (prevFavorites) =>
        prevFavorites.includes(roomId)
          ? prevFavorites.filter((id) => id !== roomId) // Bỏ yêu thích
          : [...prevFavorites, roomId] // Thêm yêu thích
    )
  }
  const renderContent = ()=>{
    return <div className='p-4'> 
    <Title level={3}>
        BTravel: đã tìm thấy <span className='result_find'>{resultFind?.length}</span> kết quả
      </Title>
      <div>
        <Select className='w-[50%]' defaultValue={1}>
          <option value={1}>Giá: Thấp đến Cao</option>
          <option value={2}>Giá: Cao đến Thấp</option>
        </Select>
      </div>
      <Row gutter={[16, 16]}>
        {resultFind?.map((room) => (
          <Col span={24} key={room.id}>
            <Card
              hoverable
              className='room-card shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 mt-5'
            >
              <Link to={'/roomDetails'} className='block'>
                <img alt={room.hotel.name} src={room.images} className='w-full h-48 object-cover' />
              </Link>
              <div className='p-4 flex justify-between'>
                <Card.Meta
                  title={<span className='text-xl font-semibold'>{room.hotel.name}</span>}
                  description={
                    <div className='mt-2'>
                      {/* Margin top for spacing */}
                      <Text strong className='text-lg text-gray-800'>{`$${room.pricePerNight} / đêm`}</Text>
                      <div className='flex items-center mt-1'>
                        {Array.from({ length: 5 }, (_, index) => (
                          <StarFilled
                            key={index}
                            style={{ color: index < room.rating ? '#fadb14' : '#e9e9e9', fontSize: '18px' }}
                          />
                        ))}
                      </div>
                      <Text type='secondary' className='text-sm text-gray-600 mt-1'>
                        {room.description}
                      </Text>
                    </div>
                  }
                />
                <div className='favorite-icon' onClick={() => toggleFavorite(room.id)}>
                  {favoriteRooms.includes(room.id) ? (
                    <HeartFilled className='text-red-500 text-2xl' />
                  ) : (
                    <HeartOutlined className='text-2xl' />
                  )}
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      <Pagination
        className='flex justify-center '
        current={currentPage}
        pageSize={pageSize}
        total={totalRooms}
        onChange={(page) => setCurrentPage(page)}
        style={{ marginTop: '20px', textAlign: 'center' }}
      /></div>
    }
  return isLoading ? <LoadingElement/>  : renderContent()

}

export default RoomList
