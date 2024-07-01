import { useQuery } from "@tanstack/react-query"
import { Environment } from "~/environment"
type RankedMember = {
  username: string,
  points: number,
  rank: number
}

type Result = {
  leagueName: string,
  user: RankedMember,
  members: RankedMember[]
}

export const useGetLeaderboard = (leagueCode: string) => {
  return useQuery<Result>({ 
    queryKey: ['leaderboard', leagueCode], 
    queryFn: async () => {
      const url = new URL(`${Environment.VITE_BACKEND_URL}/leaderboard/${leagueCode}`)
      const response = await fetch(url.toString(), {
        credentials: 'include'
      })
      if(!response.ok) throw new Error() 
      const data = await response.json()

      return {
        leagueName: data.league_name,
        user: data.user,
        members: data.members
      }
    }
  })
}