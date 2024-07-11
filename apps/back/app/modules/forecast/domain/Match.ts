type MatchProps = {
  id: string
  startAt: Date
}

export class Match {
  private _id: string
  private _startAt: Date

  constructor(props: MatchProps) {
    this._id = props.id
    this._startAt = props.startAt
  }

  get id(): string {
    return this._id
  }

  get startAt(): Date {
    return this._startAt
  }
}
