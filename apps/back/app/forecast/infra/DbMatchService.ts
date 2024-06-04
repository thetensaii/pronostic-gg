import { Match } from "#forecast/domain/Match";
import { MatchModel } from "#models/match";
import { inject } from "@adonisjs/core";
import { DbMatchAdapter } from "./adapters/DbMatchAdapter.js";
import { MatchService } from "#forecast/domain/service/MatchService";

@inject()
export class DbMatchService implements MatchService {

  constructor(private dbMatchAdapter: DbMatchAdapter) {}

  public async find(matchId: string): Promise<Match | null> {
    const dbMatch = await MatchModel.find(matchId)

    if(!dbMatch) return null

    return this.dbMatchAdapter.toDomain(dbMatch)
  }
}