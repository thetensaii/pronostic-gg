import { ApplicationService } from "@adonisjs/core/types";
import { UserService } from "./domain/service/UserService.js";
import { DbUserService } from "./infra/DbUserService.js";
import { MatchService } from "./domain/service/MatchService.js";
import { DbMatchService } from "./infra/DbMatchService.js";
import { ForecastRepository } from "./domain/repositories/ForecastRepository.js";
import { DbForecastRepository } from "./infra/DbForecastRepository.js";
import { SaveForecastUseCase } from "./domain/usecases/save-forecast/SaveForecastUseCase.js";
import { SaveForecast } from "./domain/usecases/save-forecast/SaveForecast.js";

export default class ForecastProvider {
  constructor(protected app: ApplicationService) {}

  register() {
    this.app.container.singleton(
      UserService,
      () => this.app.container.make(DbUserService),
    );
    this.app.container.singleton(
      MatchService,
      () => this.app.container.make(DbMatchService),
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