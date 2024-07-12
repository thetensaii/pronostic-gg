import { User } from './User.js'
import { Match } from './Match.js'
import { Result, ResultType } from '#common/Result'
import { ScoreIsNotPossibleError } from './errors/ScoreIsNotPossibleError.js'
import { CannotSaveForecastAnymoreError } from './errors/CannotSaveForecastAnymoreError.js'
type Score = [number, number]
type ForecastProps = {
  user: User
  match: Match
  score: Score
  createdAt: Date
  updatedAt: Date | null
}

type CreateForecastProps = {
  user: User
  match: Match
  score: Score
}
const ONE_HOUR_IN_MS = 60 * 60 * 1_000

export class Forecast {
  private _user: User
  private _match: Match
  private _score: Score
  private _createdAt: Date
  private _updatedAt: Date | null

  static create(
    props: CreateForecastProps
  ): ResultType<Forecast, ScoreIsNotPossibleError | CannotSaveForecastAnymoreError> {
    const validateForecastResult = Forecast.validateForecast(props.match.startAt, props.score)
    if (Result.isFail(validateForecastResult)) return validateForecastResult

    const forecast = new Forecast({
      user: props.user,
      match: props.match,
      score: props.score,
      createdAt: new Date(),
      updatedAt: null,
    })

    return Result.success(forecast)
  }

  constructor(props: ForecastProps) {
    this._user = props.user
    this._match = props.match
    this._score = props.score
    this._createdAt = props.createdAt
    this._updatedAt = props.updatedAt
  }

  get user(): User {
    return this._user
  }

  get match(): Match {
    return this._match
  }

  get score(): [number, number] {
    return this._score
  }

  get createdAt(): Date {
    return this._createdAt
  }

  get updatedAt(): Date | null {
    return this._updatedAt
  }

  setScore(
    score: Score
  ): ResultType<null, ScoreIsNotPossibleError | CannotSaveForecastAnymoreError> {
    const validateForecastResult = Forecast.validateForecast(this._match.startAt, score)
    if (Result.isFail(validateForecastResult)) return validateForecastResult

    this._score = score
    this._updatedAt = new Date()

    return Result.success(null)
  }

  private static validateForecast(
    matchStartAt: Date,
    score: Score
  ): ResultType<null, ScoreIsNotPossibleError | CannotSaveForecastAnymoreError> {
    const canStillSaveForecastResult = Forecast.canStillSaveForecast(matchStartAt)
    if (Result.isFail(canStillSaveForecastResult)) return canStillSaveForecastResult

    const validateScoreResult = Forecast.validateScore(score)
    if (Result.isFail(validateScoreResult)) return validateScoreResult

    return Result.success(null)
  }

  private static canStillSaveForecast(
    matchStartAt: Date
  ): ResultType<null, CannotSaveForecastAnymoreError> {
    const currentDate = new Date()
    const timeLeft = matchStartAt.getTime() - currentDate.getTime()

    if (timeLeft < ONE_HOUR_IN_MS) return Result.fail(CannotSaveForecastAnymoreError)

    return Result.success(null)
  }

  private static validateScore(score: Score): ResultType<null, ScoreIsNotPossibleError> {
    if (score[0] === 0 && score[1] === 1) return Result.success(null)
    if (score[0] === 1 && score[1] === 0) return Result.success(null)

    return Result.fail(ScoreIsNotPossibleError)
  }
}
