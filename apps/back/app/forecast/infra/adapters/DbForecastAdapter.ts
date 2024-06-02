import { Forecast } from "#forecast/domain/Forecast";
import { Match } from "#forecast/domain/Match";
import { User } from "#forecast/domain/User";
import { ForecastModel } from "#models/forecast";

export class DbForecastAdapter {
  public toDomain(dbForecast: ForecastModel): Forecast {
    return new Forecast({
      user: new User({ id: dbForecast.userId }),
      match: new Match({ id: dbForecast.matchId }),
      score: [dbForecast.teamAScore, dbForecast.teamBScore],
      createdAt: dbForecast.createdAt.toJSDate(),
      updatedAt: dbForecast.updatedAt ? dbForecast.updatedAt.toJSDate() : null
    })
  }
}