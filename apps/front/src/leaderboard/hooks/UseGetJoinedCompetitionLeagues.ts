import { useQuery } from "@tanstack/react-query"
import { Environment } from "~/environment"

type CompetitionJoinedLeague = {
  name: string,
  code: string
}
export const useGetJoinedCompetitionLeagues = (competitionSlug: string) => {
  const query = useQuery<CompetitionJoinedLeague[]>({ 
    queryKey: ['leagues','competition', competitionSlug], 
    queryFn: async () => {
      const url = new URL(`${Environment.VITE_BACKEND_URL}/leagues/competition`)
      url.searchParams.set('competition_slug', competitionSlug)
      const response = await fetch(url.toString(), {
        credentials: 'include'
      })
      if(response.ok) return await response.json()
    }
  })

  if(query.data) return query.data

  return []
}