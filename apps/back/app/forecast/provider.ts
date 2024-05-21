import { ApplicationService } from "@adonisjs/core/types";
import { ForecastRepository } from "#forecast/domain/ForecastRepository";
import { DbForecastRepository } from "#forecast/infra/DbForecastRepository";

export default class ForecastProvider {
  constructor(protected app: ApplicationService) {}

  register() {
    this.app.container.singleton(
      ForecastRepository,
      () => new DbForecastRepository(),
    );
  }
}