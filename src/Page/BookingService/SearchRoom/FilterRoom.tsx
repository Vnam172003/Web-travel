/* eslint-disable @typescript-eslint/no-explicit-any */
import { Flex, Form, Select, Typography, Slider, Button, Checkbox } from 'antd'
const { Title } = Typography
const { Option } = Select
interface Props {
  handleFilter: () => void
  handleChange: (field: string, value: any) => void
  handleReset: () => void
  filters: any
}
const FilterRoom = ({ handleFilter, handleChange, handleReset, filters }: Props) => {
  return (
    <div className='border rounded-lg flex-grow'>
      <Form className='py-5 px-2 w-full'>
        <Flex gap='middle' vertical>
          <div className='mt-4'>
            <Title level={5}>Giá phòng</Title>
            <Slider
              range
              defaultValue={[1, 2000000]}
              min={1000000}
              max={10000000}
              step={10}
              className='w-full'
              onChange={(value) => handleChange('priceRange', value)}
            />
            <div>
              Giá: VND {filters.priceRange[0].toLocaleString()} - VND {filters.priceRange[1].toLocaleString()}
            </div>
          </div>
          <div className='mt-4'>
            <Title level={5}>Xếp hạng khách sạn</Title>
            <Checkbox.Group onChange={(value) => handleChange('rating', value)}>
              <Checkbox value={1}>1 sao</Checkbox>
              <Checkbox value={2}>2 sao</Checkbox>
              <Checkbox value={3}>3 sao</Checkbox>
              <Checkbox value={4}>4 sao</Checkbox>
              <Checkbox value={5}>5 sao</Checkbox>
            </Checkbox.Group>
          </div>
          <div className='mt-4'>
            <Title level={5}>Tiện nghi</Title>
            <Select
              mode='multiple'
              placeholder='Chọn tiện nghi'
              className='w-full'
              allowClear
              onChange={(value) => handleChange('selectedAmenities', value)}
            >
              <Option value='Bể bơi'>Bể bơi</Option>
              <Option value='Lễ tân 24h'>Lễ tân 24h</Option>
              <Option value='Bãi đỗ xe'>Bãi đỗ xe</Option>
              <Option value='Phòng Gym'>Phòng Gym</Option>
              <Option value='Nhà hàng'>Nhà hàng</Option>
              <Option value='Wi-Fi miễn phí'>Wi-Fi miễn phí</Option>
            </Select>
          </div>
          <div className='mt-4'>
            <Title level={5}>Loại chỗ ở</Title>
            <Select
              placeholder='Chọn loại chỗ ở'
              className='w-full'
              allowClear
              onChange={(value) => handleChange('roomType', value)}
            >
                <Option value=''>Chọn loại chỗ ở</Option>
              <Option value='hotel'>Khách sạn</Option>
              <Option value='resort'>Resort</Option>
              <Option value='apartment'>Căn hộ</Option>
            </Select>
          </div>
          <Button type='primary' className='mt-4' onClick={handleFilter}>
            Tìm kiếm
          </Button>
        </Flex>
      </Form>
    </div>
  )
}

export default FilterRoom