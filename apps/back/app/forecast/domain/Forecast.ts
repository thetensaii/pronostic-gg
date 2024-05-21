export type ForecastProps = {
  forecasterId: number;
  matchId: number;
  teamAScore: number;
  teamBScore: number;
}

export class Forecast {
  public forecasterId: number;
  public matchId: number;
  public teamAScore: number;
  public teamBScore: number;

  constructor(props: ForecastProps){
    this.forecasterId = props.forecasterId
    this.matchId = props.matchId
    this.teamAScore = props.teamAScore
    this.teamBScore = props.teamBScore
  }
}