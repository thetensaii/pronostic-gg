import { ResultType } from '#common/Result'
import { CreateLeagueErrors } from './CreateLeagueErrors.js'

export type CreateLeagueDto = {
  name: string
  ownerId: string
  competitionId: string
}

export abstract class CreateLeagueUseCase {
  abstract execute: (
    createLeagueDto: CreateLeagueDto
  ) => Promise<ResultType<string, CreateLeagueErrors>>
}
