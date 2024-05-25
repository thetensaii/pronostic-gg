import { ApplicationService } from "@adonisjs/core/types";
import { LeagueRepository } from "#league/domain/LeagueRepository";
import { DbLeagueRepository } from "#league/infra/DbLeagueRepository";
import { LeagueCRUDService } from "./domain/service/LeagueCRUDService.js";
import { LeagueCRUD } from "./domain/LeagueCRUDService.js";

export default class LeagueProvider {
  constructor(protected app: ApplicationService) {}

  register() {
    this.app.container.singleton(
      LeagueRepository,
      () => new DbLeagueRepository(),
    );
    this.app.container.singleton(
      LeagueCRUDService,
      () => this.app.container.make(LeagueCRUD)
    );
  }
}