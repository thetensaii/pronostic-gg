import { ForecastCrudService } from "#forecast/domain/service/ForecastCrudService";
import { HttpContext } from "@adonisjs/core/http";
import { updateOrCreateForecastValidator } from "#forecast/controller/validators/ForecastCrudValidator";
import { inject } from "@adonisjs/core";

@inject()
export default class ForecastCrudController {
  constructor(
    private forecastCrudService: ForecastCrudService
  ){}

  public async updateOrCreate({ request, response }: HttpContext) {
    const payload = await request.validateUsing(updateOrCreateForecastValidator)

    await this.forecastCrudService.updateOrCreateForecast({
      forecasterId: payload.forecaster_id,
      matchId: payload.match_id,
      teamAScore: payload.team_a_score,
      teamBScore: payload.team_b_score
    })

    response.status(201)
  }
}