import { generateUUID } from "#common/utils/GenerateUUID";
import { Forecaster } from "#forecaster/domain/Forecaster";

type CreateForecastProps = {
  id? : string,
  username: string,
}

export class ForecasterFactory {

  public create(props: CreateForecastProps): Forecaster {
    const id = props.id ?? generateUUID()

    return new Forecaster({...props, id: id})
  }
}