import { ResultType } from "#common/Result"
import { MatchDontExistError } from "../../errors/MatchDontExistError.js"
import { ScoreIsNotPossibleError } from "../../errors/ScoreIsNotPossibleError.js"
import { UserDontExistError } from "../../errors/UserDontExistError.js"

export type SaveForecastDto = {
  userId: string
  matchId: string
  score: [number, number]
}
export type SaveForecastErrors = UserDontExistError | MatchDontExistError | ScoreIsNotPossibleError

export abstract class SaveForecastUseCase {
  abstract execute: (saveForecastDto: SaveForecastDto) => Promise<ResultType<null, SaveForecastErrors>>
}