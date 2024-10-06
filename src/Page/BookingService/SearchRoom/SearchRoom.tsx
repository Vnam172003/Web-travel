/* eslint-disable @typescript-eslint/no-explicit-any */
import { Flex, Form, Select, Typography, Slider, Button, Checkbox } from 'antd'
import { useState } from 'react'

const { Title } = Typography
const { Option } = Select

const SearchRoom = () => {
  const [selectedCities, setSelectedCities] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<number[]>([0, 500])
  const [rating, setRating] = useState<number[]>([]) // Đánh giá khách sạn từ 1 đến 5
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([])
  const [roomType, setRoomType] = useState<string | undefined>(undefined)

  const handleCityChange = (value: string[]) => {
    setSelectedCities(value)
  }

  const handlePriceChange = (value: number[]) => {
    setPriceRange(value)
  }

  const handleRatingChange = (checkedValues: any) => {
    setRating(checkedValues)
  }

  const handleAmenitiesChange = (value: string[]) => {
    setSelectedAmenities(value)
  }

  const handleRoomTypeChange = (value: string | undefined) => {
    setRoomType(value)
  }

  const handleSearch = () => {
    console.log('Thành phố:', selectedCities)
    console.log('Giá phòng:', priceRange)
    console.log('Xếp hạng khách sạn:', rating)
    console.log('Tiện nghi:', selectedAmenities)
    console.log('Loại chỗ ở:', roomType)
  }

  return (
    <div className='border rounded-lg flex-grow'>
      <Form className='py-5 px-2 w-full'>
        <Flex gap='middle' vertical>
          {/* Thành phố */}
          <div className='mt-4'>
            <Title level={5}>TÌm kiếm phòng</Title>
            <Select
              mode='multiple'
              placeholder='Tìm kiếm Phòng'
              onChange={handleCityChange}
              className='w-full'
              allowClear
            >
              <Option value='ho-chi-minh'>Hồ Chí Minh</Option>
              <Option value='ha-noi'>Hà Nội</Option>
              <Option value='da-nang'>Đà Nẵng</Option>
              <Option value='hanoi'>Hà Nội</Option>
              {/* Thêm các tùy chọn thành phố khác */}
            </Select>
          </div>

          {/* Giá phòng */}
          <div className='mt-4'>
            <Title level={5}>Giá phòng</Title>
            <Slider
              range
              defaultValue={[0, 500]}
              min={0}
              max={1000}
              step={10}
              className='w-full'
              onChange={handlePriceChange} // Gọi hàm khi thay đổi
            />
            <div>
              Giá: ${priceRange[0]} - ${priceRange[1]}
            </div>
          </div>

          {/* Xếp hạng khách sạn */}
          <div className='mt-4'>
            <Title level={5}>Xếp hạng khách sạn</Title>
            <Checkbox.Group onChange={handleRatingChange}>
              <Checkbox value={1}>1 sao</Checkbox>
              <Checkbox value={2}>2 sao</Checkbox>
              <Checkbox value={3}>3 sao</Checkbox>
              <Checkbox value={4}>4 sao</Checkbox>
              <Checkbox value={5}>5 sao</Checkbox>
            </Checkbox.Group>
          </div>

          {/* Tiện nghi */}
          <div className='mt-4'>
            <Title level={5}>Tiện nghi</Title>
            <Select
              mode='multiple'
              placeholder='Chọn tiện nghi'
              className='w-full'
              allowClear
              onChange={handleAmenitiesChange} // Gọi hàm khi thay đổi
            >
              <Option value='wifi'>Wifi</Option>
              <Option value='parking'>Bãi đỗ xe</Option>
              <Option value='pool'>Bể bơi</Option>
              <Option value='gym'>Phòng gym</Option>
              {/* Thêm các tùy chọn tiện nghi khác */}
            </Select>
          </div>

          {/* Loại chỗ ở */}
          <div className='mt-4'>
            <Title level={5}>Loại chỗ ở</Title>
            <Select
              placeholder='Chọn loại chỗ ở'
              className='w-full'
              allowClear
              onChange={handleRoomTypeChange} // Gọi hàm khi thay đổi
            >
              <Option value='hotel'>Khách sạn</Option>
              <Option value='hostel'>Ký túc xá</Option>
              <Option value='apartment'>Căn hộ</Option>
              {/* Thêm các tùy chọn loại chỗ ở khác */}
            </Select>
          </div>

          {/* Nút tìm kiếm */}
          <Button type='primary' className='mt-4' onClick={handleSearch}>
            Tìm kiếm
          </Button>
        </Flex>
      </Form>
    </div>
  )
}

export default SearchRoom
