import { ApplicationService } from "@adonisjs/core/types";
import { UserRepository } from "./domain/repositories/UserRepository.js";
import { DbUserRepository } from "./infra/DbUserRepository.js";
import { MatchRepository } from "./domain/repositories/MatchRepository.js";
import { DbMatchRepository } from "./infra/DbMatchRepository.js";
import { ForecastRepository } from "./domain/repositories/ForecastRepository.js";
import { DbForecastRepository } from "./infra/DbForecastRepository.js";
import { SaveForecastUseCase } from "./domain/usecases/save-forecast/SaveForecastUseCase.js";
import { SaveForecast } from "./domain/usecases/save-forecast/SaveForecast.js";

export default class ForecastProvider {
  constructor(protected app: ApplicationService) {}

  register() {
    this.app.container.singleton(
      UserRepository,
      () => this.app.container.make(DbUserRepository),
    );
    this.app.container.singleton(
      MatchRepository,
      () => this.app.container.make(DbMatchRepository),
    );
    
    this.app.container.singleton(
      ForecastRepository,
      () => this.app.container.make(DbForecastRepository)
    );
    
    this.app.container.singleton(
      SaveForecastUseCase,
      () => this.app.container.make(SaveForecast)
    )
  }
}