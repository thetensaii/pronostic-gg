import { ApplicationService } from "@adonisjs/core/types";
import { LeagueRepository } from "#league/domain/LeagueRepository";
import { DbLeagueRepository } from "#league/infra/DbLeagueRepository";

export default class LeagueProvider {
  constructor(protected app: ApplicationService) {}

  register() {
    this.app.container.singleton(
      LeagueRepository,
      () => new DbLeagueRepository(),
    );
  }
}