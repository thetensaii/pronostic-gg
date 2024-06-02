type UserProps = {
  id: string
}

export class User {
  private _id: string

  constructor(props: UserProps){
    this._id = props.id
  }

  public get id(): string {
    return this._id
  }
} 