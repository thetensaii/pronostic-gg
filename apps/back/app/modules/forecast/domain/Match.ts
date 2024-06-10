type MatchProps = {
  id: string;
}

export class Match {
  private _id: string;

  constructor(props: MatchProps){
    this._id = props.id
  }

  public get id(): string {
    return this._id
  }
}