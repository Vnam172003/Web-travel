import { DatePicker, Form, Input, Select } from 'antd'

import imageAuthen from '../../assets/imageAuthen.jpg'
import { motion } from 'framer-motion'
export default function Payment() {
  //   const [form] = Form.useForm()

  return (
    <div className='main'>
      <h3 className='font-bold text-4xl m-10'>Phòng Trống</h3>
      <div className='bg-white font-bold rounded-lg shadow-lg border-4 border-yellow-300 mx-56'>
        <Form className=''>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-3'>
            <div>
              <span className='text-gray-700 mb-1 block'>Ngày đặt Phòng</span>
              <Form.Item name='checkInDate' rules={[{ required: true, message: 'Vui lòng chọn ngày check-in!' }]}>
                <DatePicker className='w-full' format='DD/MM/YYYY' />
              </Form.Item>
            </div>
            <div>
              <span className='text-gray-700 mb-1 block'>Ngày trả phòng</span>
              <Form.Item name='checkOutDate' rules={[{ required: true, message: 'Vui lòng chọn ngày check-out!' }]}>
                <DatePicker className='w-full' format='DD/MM/YYYY' />
              </Form.Item>
            </div>
            <div>
              <span className='text-gray-700 mb-1 block '>Số lượng khách và phòng</span>
              <div className='flex gap-4 w-full'>
                <Form.Item name='capacity' rules={[{ required: true, message: 'Vui lòng chọn số lượng khách!' }]}>
                  <Input placeholder='số lượng khách' type='number' min={0} className='w-full' />
                </Form.Item>
                <Form.Item name='room' rules={[{ required: true, message: 'Vui lòng chọn số lượng khách!' }]}>
                  <Input placeholder='số lượng phòng' type='number' min={0} className='w-full' />
                </Form.Item>
              </div>
            </div>
            {/* <Form.Item>
              <motion.button
                type='submit'
                className='w-full bg-primary text-white px-4 py-2 mt-5 rounded-lg font-semibold hover:bg-primary/90 transition'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Tìm kiếm
              </motion.button>
            </Form.Item> */}
          </div>

          {/* Nút Submit */}
        </Form>
      </div>
    </div>
  )
}
