import { useQuery } from "@tanstack/react-query"
import { USER_ID } from "~/common/userId"
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
      url.searchParams.set('user_id', USER_ID)
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