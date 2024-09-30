import { SearchOutlined } from '@ant-design/icons'
import { AutoComplete } from 'antd'

const options = [{ value: 'Hội an' }, { value: 'Đà Nẵng' }, { value: 'Huế' }]

const SearchHeader = () => {
  return (
    <div className=' '>
      {/* Destination Input */}
      <AutoComplete
        className=' flex-1 h-full w-[400px] my-5   pl-4 py-2  rounded-full cursor-pointer bg-grey1'
        options={options}
        filterOption={(inputValue, option) => option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
        style={{ display: 'flex', alignItems: 'center' }}
      >
        {/* Child elements with CSS styling */}
        <div className='flex items-center gap-5'>
          <SearchOutlined className='text-lg bg-white text-grey p-1 rounded-full' />
          <input
            type='text'
            className='w-[300px] bg-transparent border-none outline-none text-black placeholder-gray-400' // Styled input
            placeholder='Bạn Muốn đến đâu'
          />
        </div>
      </AutoComplete>
    </div>
  )
}

export default SearchHeader
