import { Competition } from '../../domain/Competition.js'
import { CompetitionModel } from '#models/competition'

export class DbCompetitionAdapter {
  toDomain(competition: CompetitionModel): Competition {
    return new Competition({ id: competition.id })
  }
}
