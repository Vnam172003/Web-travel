import { AutoComplete, DatePicker, Form, Input, Select } from 'antd'
import { Option } from 'antd/es/mentions'
import { motion } from 'framer-motion'
const options = [{ value: 'Hội an' }, { value: 'Đà Nẵng' }, { value: 'Huế' }]
const FormSeach = () => {
  return (
    <div className='bg-white mx-4 md:mx-[20%] p-6 md:p-8 rounded-lg shadow-lg'>
      {/* Header */}
      <div className='text-black text-lg flex items-center gap-2 font-bold pb-4 border-b border-gray-200'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
          <path d='M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z' />
          <path d='m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z' />
        </svg>
        <h1 className='uppercase text-xl md:text-2xl'>Tìm kiếm chỗ ở</h1>
      </div>

      {/* Form */}
      <Form className='mt-6'>
        {/* Thành phố hoặc tên khách sạn */}
        <div className='mb-4'>
          <span className='text-gray-700 mb-1 block capitalize'>Thành phố hoặc tên khách sạn</span>
          <Form.Item
            name='location'
            rules={[{ required: true, message: 'Vui lòng nhập thành phố hoặc tên khách sạn!' }]}
          >
            <AutoComplete
              className=''
              options={options}
              placeholder='Bạn muốn đến đâu'
              filterOption={(inputValue, option) =>
                option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
              }
            />
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
            <span className='text-gray-700 mb-1 block'>Ngày ở</span>
            <Form.Item name='stayDuration' rules={[{ required: true, message: 'Vui lòng nhập số ngày ở!' }]}>
              <Input type='number' min={1} placeholder='Số ngày ở' className='w-full' />
            </Form.Item>
          </div>
        </div>

        {/* Select (ví dụ: Số lượng khách) */}
        <div className='mb-4'>
          <span className='text-gray-700 mb-1 block'>Số lượng khách và phòng</span>
          <Form.Item
            name='guestsAndRooms'
            rules={[{ required: true, message: 'Vui lòng chọn số lượng khách và phòng!' }]}
          >
            <div className='flex gap-4'>
              {/* Chọn số lượng khách */}
              <Select className='w-full' placeholder='Số lượng khách'>
                <Option value='1'>1 khách</Option>
                <Option value='2'>2 khách</Option>
                <Option value='3'>3 khách</Option>
                <Option value='4'>4 khách</Option>
                <Option value='5'>5 khách</Option>
                {/* Thêm tùy chọn nếu cần */}
              </Select>

              {/* Chọn số lượng phòng */}
              <Select className='w-full' placeholder='Số lượng phòng'>
                <Option value='1'>1 phòng</Option>
                <Option value='2'>2 phòng</Option>
                <Option value='3'>3 phòng</Option>
                <Option value='4'>4 phòng</Option>
                <Option value='5'>5 phòng</Option>
                {/* Thêm tùy chọn nếu cần */}
              </Select>
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
