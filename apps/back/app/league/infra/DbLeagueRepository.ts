import { LeagueRepository } from "#league/domain/LeagueRepository";
import { League } from "#league/domain/League";
import { LeagueModel } from "#models/league";

export class DbLeagueRepository implements LeagueRepository {
  public async create(league: League): Promise<number> {
    const createdLeague = await LeagueModel.create({
      ownerId: league.ownerId,
      competitionId: league.competitionId,
      name: league.name,
    })

    await createdLeague.related('forecasters').attach([league.ownerId])

    return createdLeague.id
  }
}