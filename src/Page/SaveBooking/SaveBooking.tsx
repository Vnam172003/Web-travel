import { useEffect, useState } from 'react'
import { Modal, Button, Typography, Row, Col, Card } from 'antd'

const { Title } = Typography
interface ImageData {
  image: string
}

interface BookingData {
  date: string
  location?: string
  details?: string
  image?: string
  images?: ImageData[]
}
const SaveBooking = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  // Automatically show modal when the component mounts
  useEffect(() => {
    setIsModalVisible(true)
  }, [])

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }
  const data: BookingData[] = [
    {
      date: 'Thứ Năm, 3 tháng 10',
      location: 'Phòng tại Uccle',
      details: '1 giường · 1 phòng ngủ',
      image: 'https://i.pinimg.com/enabled_hi/564x/2e/2b/6b/2e2b6b68fc64855e56dac2e2b8dd3763.jpg'
    },
    {
      date: 'Thứ Tư, 2 tháng 10',
      images: [
        { image: 'https://i.pinimg.com/enabled_hi/564x/2e/2b/6b/2e2b6b68fc64855e56dac2e2b8dd3763.jpg' },
        { image: 'https://i.pinimg.com/enabled_hi/564x/2e/2b/6b/2e2b6b68fc64855e56dac2e2b8dd3763.jpg' },
        { image: 'https://i.pinimg.com/enabled_hi/564x/2e/2b/6b/2e2b6b68fc64855e56dac2e2b8dd3763.jpg' }
      ]
    }
  ]

  const ModalSave = () => {
    return (
      <Modal title='' visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null} centered>
        <div style={{ textAlign: 'center' }}>
          <img
            src='https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Saved Houses'
            style={{
              width: '500px',
              height: '500px',
              borderRadius: '10px',
              objectFit: 'cover',
              marginBottom: '16px'
            }}
          />
          <Title level={3}>Chúng tôi đã tập hợp những ngôi nhà bạn đã xem gần đây</Title>
          <Title level={5}>Chúng tôi sẽ tự động lưu chỗ ở trong quá trình bạn xem để giúp bạn theo dõi dễ hơn.</Title>
          <Button type='primary' onClick={handleOk}>
            Tôi đã hiểu
          </Button>
        </div>
      </Modal>
    )
  }

  return (
    <div>
      <ModalSave />
      <div className='container mx-auto w-full my-10'>
        <div className='flex justify-between'>
          <Title level={2}>Đã xem gần đây</Title>
          <p className='text-lg hover:underline cursor-pointer font-medium'> chỉnh sửa</p>
        </div>
        <div style={{ padding: '24px' }}>
          {/* Check if data[0] exists before rendering */}
          {data[0] && (
            <>
              {/* First Item with one image */}
              <Title level={3}>{data[0].date}</Title>
              <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} md={8} lg={6}>
                  <Card
                    cover={
                      <div style={{ height: '300px', overflow: 'hidden' }}>
                        <img
                          alt={data[0].location}
                          src={data[0].image || ''}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </div>
                    }
                    hoverable
                  >
                    <Title level={4}>{data[0].location}</Title>
                    <p>{data[0].details}</p>
                  </Card>
                </Col>
              </Row>
            </>
          )}

          {data[1] && (
            <>
              {/* Second Item with multiple images */}
              <Title level={3} style={{ marginTop: '24px' }}>
                {data[1].date}
              </Title>
              <Row gutter={[16, 16]}>
                {data[1].images && data[1].images.length > 0 ? (
                  data[1].images.map((item, index) => (
                    <Col xs={24} sm={12} md={8} lg={6} key={index}>
                      <Card
                        cover={
                          <div style={{ height: '300px', overflow: 'hidden' }}>
                            <img
                              alt={`Image ${index + 1}`}
                              src={item.image}
                              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                          </div>
                        }
                        hoverable
                      />
                    </Col>
                  ))
                ) : (
                  <p>No images available</p>
                )}
              </Row>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default SaveBooking
