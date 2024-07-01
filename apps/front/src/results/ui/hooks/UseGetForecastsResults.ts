import { useQuery } from "@tanstack/react-query"
import { Environment } from "~/environment"

type ForecastResult = {
  matchId: string,
  startAt: Date,
  teams: [string, string],
  score: [number, number],
  isForecastGood: boolean
}

export const useGetForecastsResults = (competitionSlug: string): ForecastResult[] => {
  const query = useQuery<ForecastResult[]>({ 
    queryKey: ['forecasts', 'results', competitionSlug], 
    queryFn: async () => {
      const url = new URL(`${Environment.VITE_BACKEND_URL}/forecasts/${competitionSlug}/results`)

      const response = await fetch(url.toString(), {
        credentials: 'include'
      })
      const data = await response.json()
      
      return data.map((rawForecastResult: any): ForecastResult => ({ 
        matchId: rawForecastResult.match_id,
        startAt: new Date(rawForecastResult.start_at),
        teams: rawForecastResult.teams,
        score: rawForecastResult.score,
        isForecastGood: rawForecastResult.isForecastGood
      }))
    }
  })

  if(query.data) return query.data

  return []
}