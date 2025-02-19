import { inject } from '@adonisjs/core'
import { CompetitionService } from '../domain/services/CompetitionService.js'
import { Competition } from '../domain/Competition.js'
import { CompetitionModel } from '#models/competition'
import { DbCompetitionAdapter } from './adapters/DbCompetitionAdapter.js'

@inject()
export class DbCompetitionService implements CompetitionService {
  constructor(private dbCompetitionAdapter: DbCompetitionAdapter) {}

  async find(competitionId: string): Promise<Competition | null> {
    const dbCompetition = await CompetitionModel.find(competitionId)

    if (!dbCompetition) return null

    return this.dbCompetitionAdapter.toDomain(dbCompetition)
  }
}
