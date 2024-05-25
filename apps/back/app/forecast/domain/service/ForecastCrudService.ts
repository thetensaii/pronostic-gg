export type UpdateOrCreateForecastDto = {
  forecasterId: number;
  matchId: number;
  teamAScore: number;
  teamBScore: number;
}

export abstract class ForecastCrudService {
  abstract updateOrCreateForecast(forecast: UpdateOrCreateForecastDto): Promise<void>
}