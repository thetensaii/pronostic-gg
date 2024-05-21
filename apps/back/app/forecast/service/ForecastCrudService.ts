import { Forecast } from "#forecast/domain/Forecast";
import { ForecastRepository } from "#forecast/domain/ForecastRepository";
import { inject } from "@adonisjs/core";

@inject()
export class ForecastCrudService {
  constructor(private forecastRepository: ForecastRepository){}
  
  public async createForecast(forecast: Forecast){
    await this.forecastRepository.create(forecast)
  }
}