import { useQuery } from "@tanstack/react-query"
import { Environment } from "~/environment"

type RawLeague = {
  code: string,
  name: string,
  competition_name: string,
  count_members: number
}
export const useGetLeagues = () => {
  const query = useQuery<RawLeague[]>({ 
    queryKey: ['leagues'], 
    queryFn: async () => {
      const url = new URL(`${Environment.VITE_BACKEND_URL}/leagues`)
      url.searchParams.set('user_id', '4316d453-5425-4fd7-95a0-0bea8f40268d')
      const response = await fetch(url.toString())

      if(response.ok) return await response.json()
    }
  })

  if(query.data) return query.data.map(rl => ({ 
    code: rl.code, 
    name: rl.name, 
    competitionName: rl.competition_name, 
    countMembers: rl.count_members 
  }))

  return []


}