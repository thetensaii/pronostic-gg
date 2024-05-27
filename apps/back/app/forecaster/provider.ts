import { ApplicationService } from "@adonisjs/core/types";
import { ForecasterManagerUseCase } from "./domain/usecase/ForecasterManagerUseCase.js";
import { ForecasterManager } from "./domain/ForecasterManager.js";
import { ForecasterRepository } from "./domain/repository/ForecasterRepository.js";
import { DbForecasterRepository } from "./infra/DbForecasterRepository.js";

export default class ForecastProvider {
  constructor(protected app: ApplicationService) {}

  register() {
    this.app.container.singleton(
      ForecasterRepository,
      () => this.app.container.make(DbForecasterRepository)
    )
    this.app.container.singleton(
      ForecasterManagerUseCase,
      () => this.app.container.make(ForecasterManager)
    )
  }
}