import { api } from '@/config/apiConfig'
import { useQuery } from '@tanstack/react-query'

export const fetchUser = async () => {
  const response = await api.get(`/users`)
  return response.data // Return the user data
}

export const useUserQuery = id => {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => fetchUser(),
  })
}
