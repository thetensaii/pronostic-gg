import { User } from "./User.js";
import { Match } from "./Match.js";

type ForecastProps = {
  user: User,
  match: Match,
  score: [number, number],
  createdAt: Date,
  updatedAt: Date | null
}

export class Forecast {
  private _user: User
  private _match: Match
  private _score: [number, number]
  private _createdAt: Date
  private _updatedAt: Date | null

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

  public setScore(score: [number, number]) {
    this._score = score
    this._updatedAt = new Date()
  }
}