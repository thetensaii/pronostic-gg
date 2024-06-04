import { ApplicationService } from "@adonisjs/core/types";
import { UserService } from "./domain/services/UserService.js";
import { DbUserService } from "./infra/DbUserService.js";
import { CompetitionService } from "./domain/services/CompetitionService.js";
import { DbCompetitionService } from "./infra/DbCompetitionService.js";
import { LeagueRepository } from "./domain/repositories/LeagueRepository.js";
import { DbLeagueRepository } from "./infra/DbLeagueRepository.js";
import { CreateLeagueUseCase } from "./domain/usecases/create-league/CreateLeagueUseCase.js";
import { CreateLeague } from "./domain/usecases/create-league/CreateLeague.js";
import { JoinLeagueUseCase } from "./domain/usecases/join-league/JoinLeagueUseCase.js";
import { JoinLeague } from "./domain/usecases/join-league/JoinLeague.js";

export default class ForecastProvider {
  constructor(protected app: ApplicationService) {}

  register() {
    this.app.container.singleton(
      UserService,
      () => this.app.container.make(DbUserService),
    );
    this.app.container.singleton(
      CompetitionService,
      () => this.app.container.make(DbCompetitionService),
    );
    this.app.container.singleton(
      LeagueRepository,
      () => this.app.container.make(DbLeagueRepository),
    );
    
    this.app.container.singleton(
      CreateLeagueUseCase,
      () => this.app.container.make(CreateLeague),
    );
    this.app.container.singleton(
      JoinLeagueUseCase,
      () => this.app.container.make(JoinLeague),
    );
  }
}