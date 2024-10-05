import SearchHorizontal from '../../../Components/searchH'
import RoomList from '../RoomList'
import SearchRoom from '../SearchRoom'

const SearchAndListView = () => {
  return (
    <div className='container mx-auto px-20 '>
      <SearchHorizontal/>
      <div className='grid grid-cols-1 md:grid-cols-12 gap-6 max-w-7xl'>
        <div className='md:col-span-3 h-full flex flex-col'>
          <div className='my-5 '>
            <img
              src='https://th.bing.com/th/id/OIP.ES4BJg705hslKX0HD8qfGAHaFj?w=308&h=185&c=7&r=0&o=5&pid=1.7'
              alt=''
              className='w-full h-auto rounded-lg'
            />
          </div>
          <SearchRoom />
        </div>
        <div className='md:col-span-9'>
          <RoomList />
        </div>
      </div>
    </div>
  )
}

export default SearchAndListView
