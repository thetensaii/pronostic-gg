import { Environment } from "~/environment"

export type NextForecast = {
  matchId: string,
  startAt: Date,
  teams: [string, string]
  score: [number, number] | null
}


export const findNextForecasts = async (competitionSlug: string): Promise<NextForecast[] | null> => {
  const url = new URL(`${Environment.VITE_BACKEND_URL}/forecasts/${competitionSlug}/next`)
  const response = await fetch(url.toString(), {
    credentials: 'include'
  })

  if(!response.ok){
    if(response.status === 404) return null

    throw new Error("Something went wrong.")
  }

  const data = await response.json()
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return data.map((rawNextForecast: any) => ({ 
    matchId: rawNextForecast.match_id,
    startAt: new Date(rawNextForecast.start_at),
    teams: rawNextForecast.teams,
    score: rawNextForecast.score,
  }))
}