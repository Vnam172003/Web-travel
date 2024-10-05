import { Card, Col, Row, Typography, Select, Tag, Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Room, useSearchRoom } from '../../../hooks/room/useSearchRoom'
import LoadingElement from '../../../Components/LoadingElement'
import { SearchRoomRequest } from '../../../hooks/room/types'
const { Title } = Typography

const RoomList = () => {
  const location = useLocation()
  const params: SearchRoomRequest = location?.state
  const { data, isLoading } = useSearchRoom(location?.state)
  const resultFind = data?.data.data
  const [roomList, setRoomList] = useState<Room[]>([])
  const numOfNight= new Date(params.checkOutDate).getDate() - new Date(params.checkInDate).getDate();
  useEffect(() => {
    setRoomList(resultFind as Room[])
  }, [resultFind])
  const renderContent = () => {
    return (
      <div className='p-4'>
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
          {roomList?.map((room) => (
            <Col span={24} key={room._id}>
              <Card
                hoverable
                className='room-card shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 mt-5'
              >
                <div className='p-4 flex justify-between'>
                  <img alt={room.hotel.name} src={room.hotel.images[0]} className='w-[40%] h-48 object-cover' />
                  <div className='flex flex-col'>
                    <p className='text-blue-500 text-xl'> {room.hotel.name}</p>
                    <div className='flex gap-1 text text-blue-600  text-xs'>
                      <Tag color='green'>{room.hotel.amenities[0]}</Tag>
                      <Tag color='green'>{room.hotel.amenities[1]}</Tag>
                    </div>
                    <div className='mt-3 bg-slate-200  rounded-md p-2  '>
                      <p className='text-sm font-medium'>{room.name}</p>
                      <Tag>{room.amenities[0]}</Tag>
                      <Tag>{room.amenities[1]}</Tag>
                      <Tag>{room.amenities[2]}</Tag>
                    </div>
       
                  </div>

                  <div className='flex flex-col  justify-between gap-1'>
                    <div className='flex  justify-center gap-2'>
                      <div className='flex flex-col'>
                        <span className='font-bold'>Tốt</span>
                        <span className='text-[#595959] text-xs font-medium '>90 đánh giá</span>
                      </div>

                      <div className='bg-blue-900 text-white h-10 w-10 flex items-center justify-center rounded-md'>
                        {' '}
                        {room.hotel.rating}{' '}
                      </div>
                    </div>
                    <div className='text-right'> 
                      <p>
                        {numOfNight} đêm,{' '}
                        {params.capacity} người
                      </p>

                      <p className='text-sm line-through'>VND {(room.pricePerNight * numOfNight).toLocaleString()}</p>
                       <p className='text-xl'> VND { ((room.pricePerNight * numOfNight ) -  (room.pricePerNight * numOfNight ) *0.75).toLocaleString()}</p>
                
                    </div>
                    <Button>Xem phòng</Button>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    )
  }
  return isLoading ? <LoadingElement /> : renderContent()
}

export default RoomList
