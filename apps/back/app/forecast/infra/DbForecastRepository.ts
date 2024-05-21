import { Forecast as DomainForecast } from "#forecast/domain/Forecast";
import { Forecast as ModelForecast } from "#models/forecast";
import { ForecastRepository } from "#forecast/domain/ForecastRepository";

export class DbForecastRepository implements ForecastRepository {
  public async create(forecast: DomainForecast): Promise<void> {
    await ModelForecast.create(forecast)
  }
}