import { inject } from "@adonisjs/core";
import { HttpContext } from "@adonisjs/core/http";
import { createForecasterValidator } from "#forecaster/controller/validators/ForecasterManagerValidator";
import { ForecasterManagerUseCase } from "#forecaster/domain/usecase/ForecasterManagerUseCase";

@inject()
export default class ForecasterManagerController {

  constructor(private forecasterManagerUseCase: ForecasterManagerUseCase){}

  public async create({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createForecasterValidator)

    const forecasterId = await this.forecasterManagerUseCase.create({ username: payload.username })

    response.status(201).json({ forecaster_id: forecasterId })
  }
}