import { useQuery } from "@tanstack/react-query"
import { USER_ID } from "~/common/userId"
import { Environment } from "~/environment"

type NextForecast = {
  matchId: string,
  startAt: Date,
  teams: [string, string]
  score: [number, number] | null
}

export const useGetNextForecasts = (competitionSlug: string): NextForecast[] => {
  const query = useQuery<NextForecast[]>({ 
    queryKey: ['forecasts', 'next', competitionSlug], 
    queryFn: async () => {
      const url = new URL(`${Environment.VITE_BACKEND_URL}/forecasts/${competitionSlug}/next`)
      url.searchParams.set('user_id', USER_ID)

      const response = await fetch(url.toString())
      const data = await response.json()
      
      return data.map((rawNextForecast: any) => ({ 
        matchId: rawNextForecast.match_id,
        startAt: new Date(rawNextForecast.start_at),
        teams: rawNextForecast.teams,
        score: rawNextForecast.score,
      }))
    }
  })

  if(query.data) return query.data

  return []
}