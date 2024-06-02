import { Match } from "#forecast/domain/Match";
import { MatchModel } from "#models/match";

export class DbMatchAdapter {
  public toDomain(match: MatchModel): Match {
    return new Match({ id: match.id })
  }
}