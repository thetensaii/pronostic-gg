import { Competition } from "../../domain/Competition.js";
import { League } from "../../domain/League.js";
import { Member } from "../../domain/Member.js";
import { User } from "../../domain/User.js";
import { LeagueModel } from "#models/league";
import { DbMember } from "../DbLeagueRepository.js";

export class DbLeagueAdapter {
  public async toDomain(dbLeague: LeagueModel, dbMembers: DbMember[]): Promise<League> {
    return new League({
      id: dbLeague.id,
      name: dbLeague.name,
      owner: new User({ id: dbLeague.ownerId }),
      competition: new Competition({ id: dbLeague.competitionId }),
      members: dbMembers.map(dbMember => new Member({ id: dbMember.user_id, joinedAt: dbMember.created_at })),
      createdAt: dbLeague.createdAt.toJSDate(),
      updatedAt: dbLeague.updatedAt ? dbLeague.updatedAt.toJSDate() : null
    })
  }
}