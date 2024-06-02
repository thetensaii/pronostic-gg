import { ResultType } from "#common/Result"
import { SaveForecastErrors } from "./SaveForecastErrors.js"

export type SaveForecastDto = {
  userId: string
  matchId: string
  score: [number, number]
}

export abstract class SaveForecastUseCase {
  abstract execute: (saveForecastDto: SaveForecastDto) => Promise<ResultType<null, SaveForecastErrors>>
}