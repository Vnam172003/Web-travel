import { useQuery } from '@tanstack/react-query'
import api from '../../api/api'
import { ROOM } from '../../service/constants'
import { SearchRoomRequest } from './types'
export const useSearchRoom = (params: SearchRoomRequest) => {
  return useQuery({
    queryKey: [ROOM],
    queryFn: () => api.get('room/findAll', { params }),
    enabled: !!params
  })
}
