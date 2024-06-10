import { User } from "./User.js";
import { Match } from "./Match.js";
import { Result, ResultType } from "#common/Result";
import { ScoreIsNotPossibleError } from "./errors/ScoreIsNotPossibleError.js";
type Score = [number, number]
type ForecastProps = {
  user: User,
  match: Match,
  score: Score,
  createdAt: Date,
  updatedAt: Date | null
}

type CreateForecastProps = {
  user: User,
  match: Match,
  score: Score,
}

export class Forecast {
  private _user: User
  private _match: Match
  private _score: Score
  private _createdAt: Date
  private _updatedAt: Date | null

  static create(props: CreateForecastProps): ResultType<Forecast, ScoreIsNotPossibleError> {
    const result = this.validateScore(props.score)
    if(Result.isFail(result)) return result

    const forecast = new Forecast({
      user: props.user,
      match: props.match,
      score: props.score,
      createdAt: new Date(), 
      updatedAt: null
    })

    return Result.success(forecast)
  }

  constructor(props: ForecastProps){
    this._user = props.user
    this._match = props.match
    this._score = props.score
    this._createdAt = props.createdAt
    this._updatedAt = props.updatedAt
  }

  public get user(): User {
    return this._user
  }

  public get match(): Match {
    return this._match
  }

  public get score(): [number, number] {
    return this._score
  }

  public get createdAt(): Date {
    return this._createdAt
  }

  public get updatedAt(): Date | null {
    return this._updatedAt
  }

  public setScore(score: Score): ResultType<null, ScoreIsNotPossibleError> {
    const result = Forecast.validateScore(score)
    if(Result.isFail(result)) return result

    this._score = score
    this._updatedAt = new Date()

    return Result.success(null)
  }

 private static validateScore(score: Score): ResultType<null, ScoreIsNotPossibleError> {
    if(score.some((v) => v > 1)) return Result.fail(ScoreIsNotPossibleError)
    if(score.some((v) => v < 0)) return Result.fail(ScoreIsNotPossibleError)
    if(score[0] === score[1]) return Result.fail(ScoreIsNotPossibleError)

    return Result.success(null)
  }
}
