import { Form, Table, Typography } from 'antd'
import {
  HeartOutlined,
  VerticalAlignBottomOutlined,
  HomeOutlined,
  WifiOutlined,
  CoffeeOutlined,
  SafetyOutlined,
  UserAddOutlined
} from '@ant-design/icons'
import { Button } from '../../Components/button'
import Assess from '../Components/assess'

const { Title } = Typography

const dataSource = [
  {
    key: '1',
    productType: 'Phòng Deluxe 3 Người Nhìn ra Thành phố',
    quantity: 1
  },
  {
    key: '2',
    productType: 'Phòng Deluxe Có Giường Cỡ King',
    quantity: 1
  },
  {
    key: '3',
    productType: 'Phòng Premium Đôi Nhìn ra Thành phố',
    quantity: 1
  },
  {
    key: '4',
    productType: 'Phòng Premium Đôi nhìn ra biển',
    quantity: 1
  },
  {
    key: '5',
    productType: 'Phòng Deluxe Gia đình',
    quantity: 2
  },
  {
    key: '6',
    productType: 'Phòng Gia Đình Thông Nhau Nhìn Ra Biển',
    quantity: 2
  },
  {
    key: '7',
    productType: 'Phòng Deluxe 2 Giường Đơn',
    quantity: 2
  }
]

const columns = [
  {
    title: 'Loại chỗ nghỉ',
    dataIndex: 'productType',
    key: 'productType'
  },
  {
    title: 'Số lượng khách',
    dataIndex: 'quantity',
    key: 'quantity',
    render: (quantity: number) => (
      <span>
        <UserAddOutlined /> {quantity}
      </span>
    )
  },
  {
    title: 'Xem giá',
    key: 'action',
    render: () => <Button label='Hiển thị giá' style='py-4 px-[0px]'></Button>
  }
]
const Image = () => {
  return (
    <div className='grid grid-cols-5 gap-4'>
      <div className='col-span-2 '>
        <img
          src='https://a0.muscache.com/im/pictures/c906708d-8b35-45a3-a2ad-1d887785d4fc.jpg?im_w=1200'
          alt='Large Image'
          className='w-full h-full object-cover rounded-lg'
        />
      </div>

      <div className='col-span-3'>
        <div className='grid grid-cols-2 gap-2'>
          <img
            src='https://a0.muscache.com/im/pictures/c906708d-8b35-45a3-a2ad-1d887785d4fc.jpg?im_w=1200'
            alt='Small Image 1'
            className='w-full h-auto rounded-lg'
          />
          <img
            src='https://a0.muscache.com/im/pictures/c906708d-8b35-45a3-a2ad-1d887785d4fc.jpg?im_w=1200'
            alt='Small Image 2'
            className='w-full h-auto rounded-lg'
          />
          <img
            src='https://a0.muscache.com/im/pictures/c906708d-8b35-45a3-a2ad-1d887785d4fc.jpg?im_w=1200'
            alt='Small Image 3'
            className='w-full h-auto rounded-lg'
          />
          <img
            src='https://a0.muscache.com/im/pictures/c906708d-8b35-45a3-a2ad-1d887785d4fc.jpg?im_w=1200'
            alt='Small Image 4'
            className='w-full h-auto rounded-lg'
          />
        </div>
      </div>
    </div>
  )
}

const Content = () => {
  return (
    <div className='mt-5 grid grid-cols-4 cursor-pointer '>
      <div className='col-span-3 mx-10'>
        <Title level={3}>Phòng tại South Yarra, Australia</Title>
        <div className='mt-1 space-x-3'>
          <span className='text-lg'>4 .khách</span>
          <span className='text-lg'>2 .phòng ngủ</span>
          <span className='text-lg'>2 .giường</span>
          <span className='text-lg'>2 .phòng tắm</span>
        </div>
        {/* New introduction section */}
        <div className='mt-3'>
          <Title level={3}>
            <HomeOutlined /> Giới thiệu về chỗ ở này
          </Title>
          <Title level={5}>
            Căn hộ studio rộng rãi này HOÀN TOÀN riêng tư và độc lập. Nó có lối vào riêng, phòng tắm vòi sen, nhà vệ
            sinh, bếp nhỏ và hai ban công. KHÔNG CÓ KHÔNG GIAN nào ĐƯỢC CHIA SẺ với bất KỲ AI khác. Nằm trên mái nhà của
            Paris và hướng về phía nam, nó sẽ làm bạn thích thú với sự quyến rũ, ánh sáng và sự thoải mái của nó. Nó nằm
            ở vị trí lý tưởng giữa Montmartre và Canal Saint-Martin, và chỉ cách Gare du Nord và Gare de l'Est một quãng
            ngắn. Đó là một điểm dừng từ sân vận động Olympic. Chỗ ở cho thuê dài hạn cũng có sẵn.
          </Title>
        </div>
        {/* New amenities section */}
        <div className='mt-3 border-y border-black py-2'>
          <Title level={3}>
            <SafetyOutlined /> Tiện nghi khách có quyền sử dụng
          </Title>
          <div className='mt-2 space-y-2 '>
            {/* Added margin and vertical spacing */}
            <Title level={4}>
              <WifiOutlined className='text-xl mr-2' /> Wi-fi
            </Title>
            <Title level={4}>
              <CoffeeOutlined className='text-xl mr-2' /> Máy Nespresso
            </Title>
            <Title level={4}>
              <HomeOutlined className='text-xl mr-2' /> Tủ lạnh
            </Title>
            <Title level={4}>
              <SafetyOutlined className='text-xl mr-2' /> Hệ thống sưởi trung tâm
            </Title>
          </div>
        </div>
        {/* New host section */}
      </div>
      {/* Infor */}
      <div className='col-span-1'>
        <Form action='' className='border rounded-lg p-3'>
          <div className='flex items-center gap-1'>
            <Title level={3}>190.000đ</Title>
            <span className='text-lg mb-2'>/đêm</span>
          </div>
          <div className='grid grid-cols-2  border hover:border-black rounded-lg'>
            <div className='border-r p-2 col-span-1'>
              <h3 className='text-md font-bold '>NHẬN PHÒNG</h3>
              <span>17/08/2003</span>
            </div>
            <div className=' p-2 col-span-1 '>
              <h3 className='text-md font-bold '>NHẬN PHÒNG</h3>
              <span>17/08/2003</span>
            </div>
          </div>
          <div className='grid grid-cols-2  border hover:border-black rounded-lg'>
            <div className=' p-2 col-span-1'>
              <h3 className='text-md font-bold '>KHÁCH</h3>
              <span>1</span>
            </div>
          </div>

          <Button label='đặt phòng' style='my-3' />
          <Button
            label='lưu phòng'
            style='my-3 '
            children={
              <>
                <HeartOutlined className='mx-1 text-[18px] ' />
              </>
            }
          />
          <div className='flex items-center gap-1'>
            <Title level={5}>Phí vệ sinh: 10.000đ</Title>
          </div>
          <div className='flex items-center gap-1'>
            <Title level={5}>Phí dịch vụ: 20.000đ</Title>
          </div>
          <div className='flex items-center gap-1 border-t'>
            <Title level={4}>Tổng tiền: 220.000đ</Title>
          </div>
        </Form>
      </div>
    </div>
  )
}

const RoomTable = () => {
  return (
    <div className='border-t my-5 py-5'>
      <Title level={3}>Phòng Trống </Title>
      <Table dataSource={dataSource} columns={columns} pagination={false} bordered />
    </div>
  )
}

const RoomDetails = () => {
  return (
    <div className='container mx-auto my-5'>
      <header className='flex justify-between items-center'>
        <Title level={2}>Phòng yên bình trong căn hộ thiết kế - hồ bơi trên tầng thượng</Title>
        <div className='  text-lg flex gap-5 cursor-pointer'>
          <div className='hover:bg-grey1 px-1 py-2 rounded-lg '>
            <VerticalAlignBottomOutlined />
            <span className='px-1 underline'>chia sẽ</span>
          </div>
          <div className='hover:bg-grey1 px-1 py-2 rounded-lg '>
            <HeartOutlined />
            <span className='px-1 underline'>lưu</span>
          </div>
        </div>
      </header>
      <body>
        {/* image */}
        <Image />
        {/* content */}
        <Content />
        {/*Room table */}
        <RoomTable />
        {/* New reviews section */}
        <Assess />
      </body>
    </div>
  )
}

export default RoomDetails
