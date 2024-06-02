import { UUIDGenerator } from "#common/utils/UUIDGenerator"
import { inject } from "@adonisjs/core"
import { Competition } from "./Competition.js"
import { League } from "./League.js"
import { User } from "./User.js"
import { Member } from "./Member.js"

type CreateLeagueProps = {
  name: string,
  owner: User,
  competition: Competition,
}

@inject()
export class LeagueFactory {
  constructor(private uuidGenerator: UUIDGenerator){}

  public create(props:CreateLeagueProps): League {
    const creationDate = new Date()
    
    return new League({
      id: this.uuidGenerator.generate(),
      name: props.name,
      owner: props.owner,
      competition: props.competition,
      members: [
        new Member({
          id: props.owner.id,
          joinedAt: creationDate
        })
      ],
      createdAt: creationDate,
      updatedAt: null
    })
  }
}