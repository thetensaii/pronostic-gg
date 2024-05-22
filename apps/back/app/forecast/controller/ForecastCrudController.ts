import { ForecastCrudService } from "#forecast/service/ForecastCrudService";
import { HttpContext } from "@adonisjs/core/http";
import { updateOrCreateForecastValidator } from "#forecast/controller/validators/ForecastCrudValidator";
import { ForecastFactory } from "#forecast/domain/ForecastFactory";
import { inject } from "@adonisjs/core";

@inject()
export default class ForecastCrudController {
  constructor(
    private forecastFactory: ForecastFactory,
    private forecastCrudService: ForecastCrudService
  ){}

  public async updateOrCreate({ request, response }: HttpContext) {
    const payload = await request.validateUsing(updateOrCreateForecastValidator)

    const forecast = this.forecastFactory.create({
      forecasterId: payload.forecaster_id,
      matchId: payload.match_id,
      teamAScore: payload.team_a_score,
      teamBScore: payload.team_b_score
    })

    await this.forecastCrudService.updateOrCreateForecast(forecast)

    response.safeStatus(201)
  }
}