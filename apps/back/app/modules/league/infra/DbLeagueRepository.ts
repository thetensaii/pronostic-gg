import { League } from "../domain/League.js";
import { LeagueRepository } from "../domain/repositories/LeagueRepository.js";
import { LeagueModel } from "#models/league";
import { DateTime } from "luxon";
import { DbLeagueAdapter } from "./adapters/DbLeagueAdapter.js";
import { inject } from "@adonisjs/core";

export type DbMember = {
  user_id: string,
  league_id: string,
  created_at: Date,
}
@inject()
export class DbLeagueRepository implements LeagueRepository {

  constructor(private dbLeagueAdapter: DbLeagueAdapter){}

  public async find(leagueId: string): Promise<League | null> {
    const dbLeague = await LeagueModel.find(leagueId)

    if(!dbLeague) return null

    const dbMembers = (await dbLeague.related('members').pivotQuery<DbMember>())
    return this.dbLeagueAdapter.toDomain(dbLeague, dbMembers)
  }

  public async save(league: League): Promise<void> {
    const createdLeague = await LeagueModel.updateOrCreate({ id: league.id },
      {
        id: league.id,
        name: league.name,
        code: league.code,
        ownerId: league.owner.id,
        competitionId: league.competition.id,
        createdAt: DateTime.fromJSDate(league.createdAt),
        updatedAt: league.updatedAt ? DateTime.fromJSDate(league.updatedAt) : null
      }
    )

    await createdLeague.related('members').sync(league.members.reduce((acc, current) => {
      return {
        ...acc,
        [current.id]: {
          created_at: DateTime.fromJSDate(current.joinedAt)
        } 
      }
    }, {}))
  }
}