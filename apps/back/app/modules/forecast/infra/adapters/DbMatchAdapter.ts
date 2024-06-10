import { Match } from "../../domain/Match.js";
import { MatchModel } from "#models/match";

export class DbMatchAdapter {
  public toDomain(match: MatchModel): Match {
    return new Match({ id: match.id })
  }
}