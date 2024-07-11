import { League } from '../League.js'

export abstract class LeagueRepository {
  abstract find(leagueId: string): Promise<League | null>
  abstract findByCode(leagueCode: string): Promise<League | null>
  abstract save(league: League): Promise<void>
}
