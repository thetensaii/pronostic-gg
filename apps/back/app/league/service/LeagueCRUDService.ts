import { League } from "#league/domain/League";
import { LeagueRepository } from "#league/domain/LeagueRepository";
import { inject } from "@adonisjs/core";

@inject()
export class LeagueCRUDService {

  constructor(private leagueRepository: LeagueRepository) {}

  public async create(league: League): Promise<NonNullable<League['id']>> {
    return await this.leagueRepository.create(league)
  }
}