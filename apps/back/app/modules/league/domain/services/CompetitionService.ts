import { Competition } from '../Competition.js'

export abstract class CompetitionService {
  abstract find(competitionId: string): Promise<Competition | null>
}
