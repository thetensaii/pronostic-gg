import { Competition } from "#league/domain/Competition";
import { League } from "#league/domain/League";
import { Member } from "#league/domain/Member";
import { User } from "#league/domain/User";
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