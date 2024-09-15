import { GlobalOutlined, MenuOutlined, UserOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Dropdown, Space } from 'antd'
import { Link } from 'react-router-dom'
const items: MenuProps['items'] = [
  {
    key: '1',
    label: <Link to='/auth'>Đăng Nhập</Link>
  },
  {
    key: '2',
    label: <Link to='/auth'>Đăng ký</Link>
  },
  {
    key: '3',
    label: (
      <a target='_blank' rel='noopener noreferrer' href='https://www.luohanacademy.com'>
        Đăng xuất
      </a>
    )
  }
]
const InforHeader = () => {
  return (
    <div className='flex items-center gap-2 cursor-pointer'>
      <div className='text-[16px] font-medium text-black hover:bg-grey1 rounded-full p-3 '>
        Cho thuê chỗ ở qua Airbnb
      </div>
      <GlobalOutlined className='text-[18px] text-grey hover:bg-grey1  rounded-full p-3' />
      <Space direction='vertical'>
        <Space wrap>
          <Dropdown menu={{ items }} placement='bottomLeft' arrow>
            <div className='flex items-center gap-2  bg-white border border-grey1 rounded-full px-4 py-2 hover:shadow-xl'>
              <MenuOutlined className='text-[16px] bg-primary text-white rounded-full p-1' />
              <UserOutlined className='text-[18px] text-grey ' />
            </div>
          </Dropdown>
        </Space>
      </Space>
    </div>
  )
}

export default InforHeader
