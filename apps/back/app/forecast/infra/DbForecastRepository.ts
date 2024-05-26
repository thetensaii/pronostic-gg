import { Forecast } from "#forecast/domain/Forecast";
import { ForecastModel } from "#models/forecast";
import { ForecastRepository } from "#forecast/domain/ForecastRepository";

export class DbForecastRepository implements ForecastRepository {
  public async updateOrCreate(forecast: Forecast): Promise<void> {
    await ForecastModel.updateOrCreate({ forecasterId: forecast.forecasterId, matchId: forecast.matchId }, forecast)
  }
}