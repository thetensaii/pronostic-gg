import { Forecast as DomainForecast } from "#forecast/domain/Forecast";
import { Forecast as ModelForecast } from "#models/forecast";
import { ForecastRepository } from "#forecast/domain/ForecastRepository";

export class DbForecastRepository implements ForecastRepository {
  public async updateOrCreate(forecast: DomainForecast): Promise<void> {
    await ModelForecast.updateOrCreate({ forecasterId: forecast.forecasterId, matchId: forecast.matchId }, forecast)
  }
}