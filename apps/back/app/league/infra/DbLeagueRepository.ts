import { League } from "#league/domain/League";
import { LeagueRepository } from "#league/domain/repositories/LeagueRepository";
import { LeagueModel } from "#models/league";
import { DateTime } from "luxon";

export class DbLeagueRepository implements LeagueRepository {
  public async save(league: League): Promise<void> {
    const createdLeague = await LeagueModel.create({
      id: league.id,
      name: league.name,
      ownerId: league.owner.id,
      competitionId: league.competition.id,
      createdAt: DateTime.fromJSDate(league.createdAt),
      updatedAt: league.updatedAt ? DateTime.fromJSDate(league.updatedAt) : null
    })

    await createdLeague.related('members').attach({
      [createdLeague.ownerId]: {
        created_at: DateTime.fromJSDate(league.createdAt)
      }
    })
  }
}