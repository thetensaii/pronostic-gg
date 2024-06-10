type CompetitionProps = {
  id: string
}

export class Competition {
  private _id: string

  constructor(props: CompetitionProps){
    this._id = props.id
  }

  public get id(): string {
    return this._id
  }
} 