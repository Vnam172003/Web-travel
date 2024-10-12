import React, { useState } from 'react'
import { Table, Image, Button, Drawer, Form, Rate, Input, message } from 'antd'

interface Booking {
  key: number
  roomImage: string
  room: string
  checkIn: string
  checkOut: string
  totalPrice: string
  status: string
}

const BookingHistory: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false) // Trạng thái hiển thị của Drawer
  const [selectedRoom, setSelectedRoom] = useState<string>('') // Tên phòng được chọn
  const [rating, setRating] = useState<number>(0) // Trạng thái đánh giá sao
  const [reviewText, setReviewText] = useState<string>('') // Trạng thái đánh giá văn bản

  // Dữ liệu mẫu cho lịch sử đặt phòng
  const bookings: Booking[] = [
    {
      key: 1,
      roomImage: 'https://via.placeholder.com/100',
      room: 'Phòng Deluxe',
      checkIn: '2024-10-01',
      checkOut: '2024-10-05',
      totalPrice: '$500',
      status: 'Đã hoàn thành'
    },
    {
      key: 2,
      roomImage: 'https://via.placeholder.com/100',
      room: 'Phòng Superior',
      checkIn: '2024-09-15',
      checkOut: '2024-09-20',
      totalPrice: '$350',
      status: 'Đã hoàn thành'
    },
    {
      key: 3,
      roomImage: 'https://via.placeholder.com/100',
      room: 'Phòng Standard',
      checkIn: '2024-08-10',
      checkOut: '2024-08-15',
      totalPrice: '$300',
      status: 'Đã hủy'
    }
  ]

  const showDrawer = (room: string) => {
    setSelectedRoom(room) // Lưu tên phòng được chọn
    setRating(0) // Đặt lại điểm đánh giá khi mở Drawer
    setReviewText('') // Đặt lại văn bản đánh giá khi mở Drawer
    setVisible(true) // Hiển thị Drawer
  }

  const onClose = () => {
    setVisible(false) // Đóng Drawer
  }

  const handleSubmit = () => {
    if (rating === 0) {
      message.error('Vui lòng chọn đánh giá sao!') // Kiểm tra điểm đánh giá
      return
    }

    message.success(`Bạn đã đánh giá cho ${selectedRoom}: ${rating} sao\nĐánh giá: ${reviewText}`)
    onClose() // Đóng Drawer sau khi đánh giá
  }

  const columns = [
    {
      title: 'Hình ảnh',
      dataIndex: 'roomImage',
      render: (text: string) => <Image width={100} src={text} />
    },
    {
      title: 'Tên Phòng',
      dataIndex: 'room'
    },
    {
      title: 'Ngày Nhận',
      dataIndex: 'checkIn'
    },
    {
      title: 'Ngày Trả',
      dataIndex: 'checkOut'
    },
    {
      title: 'Tổng Giá',
      dataIndex: 'totalPrice'
    },
    {
      title: 'Trạng Thái',
      dataIndex: 'status'
    },
    {
      title: 'Hành Động',
      key: 'action',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (_: any, record: Booking) => (
        <Button onClick={() => showDrawer(record.room)} type='primary'>
          Đánh giá
        </Button>
      )
    }
  ]

  return (
    <div className='container mx-auto my-5'>
      <h1 className='text-2xl font-semibold mb-4'>Lịch sử Đặt phòng</h1>
      <Table columns={columns} dataSource={bookings} pagination={false} />

      {/* Drawer cho đánh giá */}
      <Drawer
        title={`Đánh giá cho ${selectedRoom}`}
        placement='right'
        closable={false}
        onClose={onClose}
        visible={visible}
        width={400}
      >
        <Form>
          <Form.Item label='Đánh giá'>
            <Rate value={rating} onChange={setRating} /> {/* Thêm đánh giá sao */}
          </Form.Item>
          <Form.Item label='Ý kiến của bạn'>
            <Input.TextArea
              rows={4}
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)} // Cập nhật văn bản đánh giá
              placeholder='Nhập ý kiến của bạn về phòng...'
            />
          </Form.Item>
          <Form.Item>
            <Button type='primary' onClick={handleSubmit}>
              Gửi đánh giá
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  )
}

export default BookingHistory
