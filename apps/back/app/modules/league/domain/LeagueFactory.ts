import { UUIDGenerator } from "#common/utils/UUIDGenerator"
import { inject } from "@adonisjs/core"
import { Competition } from "./Competition.js"
import { League } from "./League.js"
import { User } from "./User.js"
import { Member } from "./Member.js"
import { LeagueCodeGenerator } from "./LeagueCodeGenerator.js"

type CreateLeagueProps = {
  name: string,
  owner: User,
  competition: Competition,
}

@inject()
export class LeagueFactory {
  constructor(
    private uuidGenerator: UUIDGenerator, 
    private leagueCodeGenerator: LeagueCodeGenerator
  ){}

  public create(props:CreateLeagueProps): League {
    const creationDate = new Date()
    
    return new League({
      id: this.uuidGenerator.generate(),
      name: props.name,
      code: this.leagueCodeGenerator.generate(),
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