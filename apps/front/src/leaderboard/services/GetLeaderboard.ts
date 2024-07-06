import { Environment } from "~/environment"

export type RankedMember = {
  username: string,
  points: number,
  rank: number
}

export type Leaderboard = {
  leagueName: string,
  user: RankedMember,
  members: RankedMember[]
}

type Props = {
  competitionSlug: string,
  leagueCode: string
}

export const findLeaderBoard = async ({ competitionSlug, leagueCode }: Props): Promise<Leaderboard|null> => {
  const url = new URL(`${Environment.VITE_BACKEND_URL}/leaderboard/${competitionSlug}/${leagueCode}`)
  const response = await fetch(url.toString(), {
    credentials: 'include'
  })
  
  if(!response.ok) {
    if (response.status === 404) return null
    if (response.status === 403) return null

    throw new Error("Something went wrong.")
  }

  const data = await response.json()

  return {
    leagueName: data.league_name,
    user: data.user,
    members: data.members
  }
}