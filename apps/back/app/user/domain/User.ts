type UserProps = {
  id: string,
  username: string,
  createdAt: Date,
  updatedAt?: Date
}

export class User {
  private _id: string;
  private _username: string;
  private _createdAt: Date;
  private _updatedAt?: Date;


  constructor(props: UserProps){
    this._id = props.id
    this._username = props.username
    this._createdAt = props.createdAt
    this._updatedAt = props.updatedAt
  }

  public get id(): string {
    return this._id
  }
  public get username(): string {
    return this._username
  }

  public get createdAt(): Date {
    return this._createdAt
  }

  public get updatedAt(): Date | undefined {
    return this._updatedAt
  }

  
}