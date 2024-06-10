import { Forecast } from "../domain/Forecast.js";
import { FindForecastProps, ForecastRepository } from "../domain/repositories/ForecastRepository.js";
import { ForecastModel } from "#models/forecast";
import { DateTime } from "luxon";
import { DbForecastAdapter } from "./adapters/DbForecastAdapter.js";
import { inject } from "@adonisjs/core";

@inject()
export class DbForecastRepository implements ForecastRepository {

  constructor(private dbForecastAdapter: DbForecastAdapter){}

  public async find(props: FindForecastProps): Promise<Forecast | null> {
    const dbForecast = await ForecastModel.findBy({ userId: props.userId, matchId: props.matchId })
    if(!dbForecast){
      return null
    }

    return this.dbForecastAdapter.toDomain(dbForecast) 
  }

  public async save(forecast: Forecast): Promise<void> {
    await ForecastModel.updateOrCreate({
      userId: forecast.user.id,
      matchId: forecast.match.id 
    }, {
      userId: forecast.user.id,
      matchId: forecast.match.id,
      teamAScore: forecast.score[0],
      teamBScore: forecast.score[1],
      createdAt: DateTime.fromJSDate(forecast.createdAt),
      updatedAt: forecast.updatedAt ? DateTime.fromJSDate(forecast.updatedAt) : null,
    })
  }
}