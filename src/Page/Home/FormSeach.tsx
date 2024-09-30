import { DatePicker, Form, Input, Select } from 'antd'
import { Option } from 'antd/es/mentions'
import { motion } from 'framer-motion'
import useProvince from '../../hooks/province/useProvince'
const FormSeach = () => {
  const { data, isLoading } = useProvince()
  const provinces = data?.data
  const cityOptions = provinces?.map((province) => {
    return {
      label: province.name,
      value: province.name
    }
  })
  return (
    <div className='bg-white mx-4 md:mx-[20%] p-6 md:p-8 rounded-lg shadow-lg'>
      <div className='text-black text-lg flex items-center gap-2 font-bold pb-4 border-b border-gray-200'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
          <path d='M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z' />
          <path d='m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z' />
        </svg>
        <h1 className='uppercase text-xl md:text-2xl'>Tìm kiếm chỗ ở</h1>
      </div>
      <Form className='mt-6'>
        <div className='mb-4'>
          <span className='text-gray-700 mb-1 block capitalize'>Thành phố hoặc tên khách sạn</span>
          <Form.Item
            name='location'
            rules={[{ required: true, message: 'Vui lòng nhập thành phố hoặc tên khách sạn!' }]}
          >
            <Select placeholder='Chọn thành phố' loading={isLoading} options={cityOptions} />
          </Form.Item>
        </div>

        {/* Check-in và Ngày ở */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
          <div>
            <span className='text-gray-700 mb-1 block'>Ngày đặt Phòng</span>
            <Form.Item name='checkIn' rules={[{ required: true, message: 'Vui lòng chọn ngày check-in!' }]}>
              <DatePicker className='w-full' format='DD/MM/YYYY' />
            </Form.Item>
          </div>
          <div>
            <span className='text-gray-700 mb-1 block'>Ngày trả phòng</span>
            <Form.Item name='checkOut' rules={[{ required: true, message: 'Vui lòng chọn ngày check-out!' }]}>
              <DatePicker className='w-full' format='DD/MM/YYYY' />
            </Form.Item>
          </div>
        </div>

        <div className='mb-4'>
          <span className='text-gray-700 mb-1 block'>Số lượng khách và phòng</span>
          <Form.Item name='capacity' rules={[{ required: true, message: 'Vui lòng chọn số lượng khách!' }]}>
            <div className='flex gap-4'>
              <Input placeholder='số lượng khách' type='number' />
            </div>
          </Form.Item>
          <Form.Item name='room' rules={[{ required: true, message: 'Vui lòng chọn số lượng khách!' }]}>
            <div className='flex gap-4'>
              <Input  placeholder='số lượng phòng'  type='number' />
            </div>
          </Form.Item>
        </div>

        {/* Nút Submit */}
        <Form.Item>
          <motion.button
            type='submit'
            className='w-full bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary/90 transition'
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Tìm kiếm
          </motion.button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default FormSeach
