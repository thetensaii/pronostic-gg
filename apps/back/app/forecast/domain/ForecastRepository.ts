import { Forecast } from "#forecast/domain/Forecast";

export abstract class ForecastRepository {
  abstract create: (forecast: Forecast) => Promise<void>
}