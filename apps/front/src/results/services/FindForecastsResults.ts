import { Environment } from "~/environment"

export type ForecastResult = {
  matchId: string,
  startAt: Date,
  teams: [string, string],
  score: [number, number],
  isForecastGood: boolean
}

export const findForecastsResults = async (competitionSlug: string): Promise<ForecastResult[] | null> => {
  const url = new URL(`${Environment.VITE_PUBLIC_BACKEND_URL}/forecasts/${competitionSlug}/results`)

  const response = await fetch(url.toString(), {
    credentials: 'include'
  })

  if(!response.ok){
    if(response.status === 404) return null
    
    throw new Error("Something went wrong.")
  }

  const data = await response.json()
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return data.map((rawForecastResult: any): ForecastResult => ({ 
    matchId: rawForecastResult.match_id,
    startAt: new Date(rawForecastResult.start_at),
    teams: rawForecastResult.teams,
    score: rawForecastResult.score,
    isForecastGood: rawForecastResult.isForecastGood
  }))
}