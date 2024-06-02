import { Forecast } from "./Forecast.js";
import { Match } from "./Match.js";
import { User } from "./User.js";

type CreateForecastProps = {
  user: User,
  match: Match,
  score: [number, number],
}

export class ForecastFactory {

  public create(props: CreateForecastProps): Forecast {
    return new Forecast({
      user: props.user,
      match: props.match,
      score: props.score,
      createdAt: new Date(), 
      updatedAt: null
    })
  }
}