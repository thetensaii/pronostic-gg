import { ApplicationService } from "@adonisjs/core/types";
import { UserRepository } from "./domain/repositories/UserRepository.js";
import { DbUserRepository } from "./infra/DbUserRepository.js";
import { CompetitionRepository } from "./domain/repositories/CompetitionRepository.js";
import { DbCompetitionRepository } from "./infra/DbCompetitionRepository.js";
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
      UserRepository,
      () => this.app.container.make(DbUserRepository),
    );
    this.app.container.singleton(
      CompetitionRepository,
      () => this.app.container.make(DbCompetitionRepository),
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