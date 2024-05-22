import { Forecast } from "#forecast/domain/Forecast";

export abstract class ForecastRepository {
  abstract updateOrCreate: (forecast: Forecast) => Promise<void>
}