import { ForecastProps, Forecast } from "#forecast/domain/Forecast";

export class ForecastFactory {
  create(props:ForecastProps){
    return new Forecast(props)
  }
}