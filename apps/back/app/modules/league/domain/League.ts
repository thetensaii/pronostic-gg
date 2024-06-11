import { Competition } from "./Competition.js"
import { Member } from "./Member.js"
import { MemberFactory } from "./MemberFactory.js"
import { User } from "./User.js"

type LeagueProps = {
  id: string,
  name: string,
  code: string,
  competition: Competition,
  owner: User,
  members: Member[],
  createdAt: Date,
  updatedAt: Date | null
}

export class League {
  private _id: string
  private _name: string
  private _code: string
  private _competition: Competition
  private _owner: User
  private _members: Member[]
  
  private _createdAt: Date
  private _updatedAt: Date | null

  constructor(props: LeagueProps){
    this._id = props.id
    this._name = props.name
    this._code = props.code
    this._competition = props.competition
    this._owner = props.owner
    this._members = props.members
    this._createdAt = props.createdAt
    this._updatedAt = props.updatedAt
  }

  public get id(): string {
    return this._id
  }
  public get name(): string {
    return this._name
  }
  public get code(): string {
    return this._code
  }
  public get competition(): Competition {
    return this._competition
  }
  public get owner(): User {
    return this._owner
  }
  public get members(): Member[] {
    return this._members
  }
  public get createdAt(): Date {
    return this._createdAt
  }
  public get updatedAt(): Date | null {
    return this._updatedAt
  }

  private isMember(user: User): boolean {
    return this.members.some((member) => member.id === user.id)
  }

  public join(user: User): boolean {
    if(this.isMember(user)) return false;
    this._members.push(new MemberFactory().create(user))
    this._updatedAt = new Date()
    return true
  }
} 