import { League } from "#league/domain/League";

export abstract class LeagueRepository {
  abstract create: (league: League) => Promise<NonNullable<League['id']>>
}