import { Forecast } from "../../domain/Forecast.js";
import { Match } from "../../domain/Match.js";
import { User } from "../../domain/User.js";
import { ForecastModel } from "#models/forecast";

export class DbForecastAdapter {
  public toDomain(dbForecast: ForecastModel): Forecast {
    return new Forecast({
      user: new User({ id: dbForecast.userId }),
      match: new Match({ id: dbForecast.match.id, startAt: dbForecast.match.startAt.toJSDate() }),
      score: [dbForecast.teamAScore, dbForecast.teamBScore],
      createdAt: dbForecast.createdAt.toJSDate(),
      updatedAt: dbForecast.updatedAt ? dbForecast.updatedAt.toJSDate() : null
    })
  }
}