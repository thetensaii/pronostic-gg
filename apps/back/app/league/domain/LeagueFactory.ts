import { League, LeagueProps } from "#league/domain/League";

export class LeagueFactory {
  public create(props: LeagueProps){
    return new League(props)
  }
}