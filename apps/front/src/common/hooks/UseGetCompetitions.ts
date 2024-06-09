import { useQuery } from "@tanstack/react-query"
import { Environment } from "~/environment"

type SidebarCompetition = {
  name: string,
  slug: string
}

export const useGetSidebarCompetitions = (): SidebarCompetition[] => {
  const query = useQuery<SidebarCompetition[]>({ 
    queryKey: ['competitions'], 
    queryFn: async () => {
      const response = await fetch(`${Environment.VITE_BACKEND_URL}/competitions`)
      if(response.ok) return await response.json()
    }
  })

  if(query.data) return query.data

  return []
}