import { Forecast } from "../Forecast.js";
export type FindForecastProps = {
  userId: string,
  matchId: string
}

export abstract class ForecastRepository {
  abstract find: (props: FindForecastProps) => Promise<Forecast | null>
  abstract save: (forecast: Forecast) => Promise<void>
}