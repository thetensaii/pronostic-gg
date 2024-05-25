import { ForecastRepository } from "#forecast/domain/ForecastRepository";
import { inject } from "@adonisjs/core";
import { ForecastCrudService, UpdateOrCreateForecastDto } from "#forecast/domain/service/ForecastCrudService";
import { ForecastFactory } from "#forecast/domain/ForecastFactory";

@inject()
export class ForecastCrud implements ForecastCrudService {
  constructor(
    private forecastFactory: ForecastFactory,
    private forecastRepository: ForecastRepository
  ){}
  
  public async updateOrCreateForecast(forecastDto: UpdateOrCreateForecastDto){
    const forecast = this.forecastFactory.create(forecastDto)

    await this.forecastRepository.updateOrCreate(forecast)
  }
}