type MemberProps = {
  id: string
  joinedAt: Date
}

export class Member {
  private _id: string
  private _joinedAt: Date

  constructor(props: MemberProps) {
    this._id = props.id
    this._joinedAt = props.joinedAt
  }

  get id(): string {
    return this._id
  }

  get joinedAt(): Date {
    return this._joinedAt
  }
}
