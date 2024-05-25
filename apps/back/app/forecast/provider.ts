import { ApplicationService } from "@adonisjs/core/types";
import { ForecastRepository } from "#forecast/domain/ForecastRepository";
import { DbForecastRepository } from "#forecast/infra/DbForecastRepository";
import { ForecastCrudService } from "#forecast/domain/service/ForecastCrudService";
import { ForecastCrud } from "#forecast/domain/ForecastCrud";

export default class ForecastProvider {
  constructor(protected app: ApplicationService) {}

  register() {
    this.app.container.singleton(
      ForecastRepository,
      () => new DbForecastRepository(),
    );
    this.app.container.singleton(
      ForecastCrudService,
      () => this.app.container.make(ForecastCrud),
    );
  }
}