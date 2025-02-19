import { ResultType } from '#common/Result'
import { CannotSaveForecastAnymoreError } from '#forecast/domain/errors/CannotSaveForecastAnymoreError'
import { MatchDontExistError } from '#forecast/domain/errors/MatchDontExistError'
import { ScoreIsNotPossibleError } from '#forecast/domain/errors/ScoreIsNotPossibleError'
import { UserDontExistError } from '#forecast/domain/errors/UserDontExistError'

export type SaveForecastDto = {
  userId: string
  matchId: string
  score: [number, number]
}
export type SaveForecastErrors =
  | UserDontExistError
  | MatchDontExistError
  | CannotSaveForecastAnymoreError
  | ScoreIsNotPossibleError

export abstract class SaveForecastUseCase {
  abstract execute: (
    saveForecastDto: SaveForecastDto
  ) => Promise<ResultType<null, SaveForecastErrors>>
}
