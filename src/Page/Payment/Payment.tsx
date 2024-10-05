import { DatePicker, Form, Input } from 'antd'
import { CreateOrderBooking } from '../../hooks/room/types'
import moment from 'moment'
import { motion } from 'framer-motion'
export default function Payment() {
  const [form] = Form.useForm()
  const handleSearchRoom = (formValues: CreateOrderBooking) => {
    const params = {
      ...formValues,
      checkInDate: moment(new Date(formValues.checkInDate)).format('YYYY-MM-DD'),
      checkOutDate: moment(new Date(formValues.checkOutDate)).format('YYYY-MM-DD')
    }
    console.log(params)
  }
  return (
    <div className='main'>
      {/* <h3 className='font-bold text-4xl m-10'>Phòng Trống</h3> */}
      <Form form={form} onFinish={handleSearchRoom}>
        <div className='bg-white font-bold rounded-lg shadow-lg border-4 border-black mx-56'>
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
              <span className='text-gray-700 mb-1 block '>Số lượng khách</span>
              <div className='flex gap-4 w-full'>
                <Form.Item name='totalGuests' rules={[{ required: true, message: 'Vui lòng chọn số lượng khách!' }]}>
                  <Input placeholder='số lượng khách' type='number' min={0} className='w-full' />
                </Form.Item>
              </div>
            </div>
          </div>
        </div>
        <h4 className='font-bold text-3xl mt-10  '>Tất Cả Các Loại Chỗ Nghỉ</h4>
        <div className='body_main'>
          <div className='form_detail_room'>
            <div className='heading_room'>
              <div className='heading_room_value'>Loại chỗ nghỉ</div>
              <div className='heading_room_value'>Giá của phòng</div>
              <div className='heading_room_value'>Số Lượng Phòng</div>
            </div>
            <div className='body_room'>
              <div className='body_room_total'>
                <div className='body_room_value'>Ban Công 2 phòng ngủ</div>
                <div className='body_room_value'>500.000 USD</div>
                <div className='body_room_value'>1</div>
              </div>
              <div className='body_room_total'>
                <div className='body_room_value'>Ban Công 2 phòng ngủ</div>
                <div className='body_room_value'>500.000 USD</div>
                <div className='body_room_value'>1</div>
              </div>
              <div className='body_room_total'>
                <div className='body_room_value'>Ban Công 2 phòng ngủ</div>
                <div className='body_room_value'>500.000 USD</div>
                <div className='body_room_value'>1</div>
              </div>
              <div className='body_room_total'>
                <div className='body_room_value'>Ban Công 2 phòng ngủ</div>
                <div className='body_room_value'>500.000 USD</div>
                <div className='body_room_value'>1</div>
              </div>
            </div>
          </div>
          <div className='form_payment'>
            <div className='heading_payment'>Thanh Toán</div>
            <div className='payment_total'>
              <div className='payment_price_name'>Tổng Giá Phòng</div>
              <div className='payment_price'> 1.888.888 USD</div>
              <Form.Item>
                <button type='submit' className='btn_payment'>
                  Tôi Sẽ Đặt
                </button>
              </Form.Item>
            </div>
          </div>
        </div>
      </Form>
    </div>
  )
}
