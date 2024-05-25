import { League } from "#league/domain/League";
import { LeagueRepository } from "#league/domain/LeagueRepository";
import { inject } from "@adonisjs/core";
import { CreateLeagueDto, LeagueCRUDService } from "#league/domain/service/LeagueCRUDService";
import { LeagueFactory } from "./LeagueFactory.js";

@inject()
export class LeagueCRUD implements LeagueCRUDService {

  constructor(private leagueFactory: LeagueFactory, private leagueRepository: LeagueRepository) {}

  public async create(leagueDto: CreateLeagueDto): Promise<NonNullable<League['id']>> {
    const league = this.leagueFactory.create(leagueDto)

    return await this.leagueRepository.create(league)
  }
}