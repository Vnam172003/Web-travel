import { useLocation } from 'react-router-dom'
import RoomList from '../RoomList'
import { useQueryClient } from '@tanstack/react-query'
import { SearchRoomRequest } from '../../../hooks/room/types'
import { useCallback, useEffect, useState } from 'react'
import { useSearchRoom } from '../../../hooks/room/useSearchRoom'
import { ROOM } from '../../../service/constants'
import FilterRoom from '../SearchRoom/FilterRoom'
const DEFAULT_LIMIT = 6
const SearchRoomResult = () => {
  const location = useLocation()
  const queryClient = useQueryClient()
  const initialParams: SearchRoomRequest = location?.state || {}
  const [searchParams, setSearchParams] = useState({ ...initialParams, limit: DEFAULT_LIMIT })
  const { data, isLoading } = useSearchRoom(searchParams)
  const rooms = data?.data.rooms || []
  const total = data?.data.total || 0
  const onLoadMore = useCallback(() => {
    setSearchParams((prev) => ({ ...prev, limit: prev.limit + DEFAULT_LIMIT }))
  }, [])
  console.log(searchParams)
  const [filters, setFilters] = useState({
    priceRange: [1000000, 2000000],
    rating: [],
    selectedAmenities: [],
    roomType: undefined
  })
  const handleChange = (field: string, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value
    }))
  }
  const handleReset = () => {
    console.log(123)
    setFilters({
      priceRange: [0, 1000000],
      rating: [],
      selectedAmenities: [],
      roomType: undefined
    })
  }
  const handleFilter = () => {
    const params = {
      minPrice: filters.priceRange[0],
      maxPrice: filters.priceRange[1],
      rating: filters.rating,
      amenities: filters.selectedAmenities,
      roomType: filters.roomType
    }
    setSearchParams((prev) => ({ ...prev, limit: prev.limit + DEFAULT_LIMIT, ...params }))
  }
  useEffect(() => {
    queryClient.invalidateQueries([ROOM])
  }, [searchParams, queryClient])
  return (
    <div className='container mx-auto px-20 mt-[30px]'>
      <div className='grid grid-cols-1 md:grid-cols-12 gap-6 max-w-7xl'>
        <div className='md:col-span-3 h-full flex flex-col'>
          <div className='my-5 '>
            <img
              src='https://th.bing.com/th/id/OIP.ES4BJg705hslKX0HD8qfGAHaFj?w=308&h=185&c=7&r=0&o=5&pid=1.7'
              alt=''
              className='w-full h-auto rounded-lg'
            />
          </div>
          <FilterRoom
            handleChange={handleChange}
            handleFilter={handleFilter}
            filters={filters}
            handleReset={handleReset}
          />
        </div>
        <div className='md:col-span-9  '>
          <RoomList
            searchParams={searchParams}
            rooms={rooms}
            isLoading={isLoading}
            total={total}
            onLoadMore={onLoadMore}
          />
        </div>
      </div>
    </div>
  )
}

export default SearchRoomResult
