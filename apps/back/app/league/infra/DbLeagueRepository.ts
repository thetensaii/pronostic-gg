import { LeagueRepository } from "#league/domain/LeagueRepository";
import { League as DomainLeague } from "#league/domain/League";
import { League as ModelLeague } from "#models/league";

export class DbLeagueRepository implements LeagueRepository {
  public async create(league: DomainLeague): Promise<number> {
    const createdLeague = await ModelLeague.create({
      ownerId: league.ownerId,
      competitionId: league.competitionId,
      name: league.name,
    })

    await createdLeague.related('forecasters').attach([league.ownerId])

    return createdLeague.id
  }
}