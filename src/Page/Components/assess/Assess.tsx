import { Button, Card, Carousel, Col, Row, Typography } from 'antd'

const { Title } = Typography

const reviews = [
  {
    name: 'Huệ',
    country: 'Việt Nam',
    content: '“Tôi đặt phòng này cho bố mẹ tôi và họ đã rất hài lòng về phòng ở và nhân viên ở đây.”'
  },
  {
    name: 'Thủy',
    country: 'Việt Nam',
    content: '“Vị trí ổn, ra bãi biển khá gần. Nhân viên nhiệt tình. Giá cả rất hợp lý.”'
  },
  {
    name: 'Phuong',
    country: 'Việt Nam',
    content:
      '“Phòng đẹp, rộng rãi, sạch sẽ, gần biển. Các bạn nhân viên dễ thương. Mình đã sử dụng dịch vụ ở đây nhiều lần rồi và sẽ tiếp tục trong tương lai.”'
  },
  {
    name: 'Phuong',
    country: 'Việt Nam',
    content:
      '“Phòng đẹp, rộng rãi, sạch sẽ, gần biển. Các bạn nhân viên dễ thương. Mình đã sử dụng dịch vụ ở đây nhiều lần rồi và sẽ tiếp tục trong tương lai.”'
  },
  {
    name: 'Phuong',
    country: 'Việt Nam',
    content:
      '“Phòng đẹp, rộng rãi, sạch sẽ, gần biển. Các bạn nhân viên dễ thương. Mình đã sử dụng dịch vụ ở đây nhiều lần rồi và sẽ tiếp tục trong tương lai.”'
  }
]

const Assess = () => {
  const chunkedReviews = []
  const chunkSize = 3

  // Chia các đánh giá thành các mảng nhỏ hơn với kích thước 3
  for (let i = 0; i < reviews.length; i += chunkSize) {
    chunkedReviews.push(reviews.slice(i, i + chunkSize))
  }
  return (
    <div className='mt-5 border-t pt-3'>
      <Title level={3}>Đánh giá của khách</Title>

      <Title level={4}>Đánh giá nơi ở:</Title>
      <div className='my-4'>
        <Button style={{ backgroundColor: '#fff !important' }}>Đánh giá </Button>
      </div>

      <Carousel dots>
        {chunkedReviews.map((chunk, index) => (
          <div key={index}>
            <Row gutter={16}>
              {chunk.map((review, idx) => (
                <Col span={8} key={idx}>
                  <Card title={review.name} extra={<Title level={5}>{review.country}</Title>}>
                    <Title level={4}>{review.content}</Title>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Assess
