import { Forecast } from "#forecast/domain/Forecast";
import { ForecastRepository } from "#forecast/domain/ForecastRepository";
import { inject } from "@adonisjs/core";

@inject()
export class ForecastCrudService {
  constructor(private forecastRepository: ForecastRepository){}
  
  public async updateOrCreateForecast(forecast: Forecast){
    await this.forecastRepository.updateOrCreate(forecast)
  }
}