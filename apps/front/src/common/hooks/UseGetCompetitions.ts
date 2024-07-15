import { useQuery } from "@tanstack/react-query"
import { Environment } from "~/environment"

type Competition = {
  id: string,
  name: string,
  slug: string
}

export const useGetCompetitions = (): Competition[] => {
  const query = useQuery<Competition[]>({ 
    queryKey: ['competitions'], 
    queryFn: async () => {
      const response = await fetch(`${Environment.VITE_PUBLIC_BACKEND_URL}/competitions`, {
        credentials: 'include'
      })
      if(response.ok) return await response.json()
    }
  })

  if(query.data) return query.data

  return []
}