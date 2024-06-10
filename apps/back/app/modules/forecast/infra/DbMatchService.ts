import { Match } from "../domain/Match.js";
import { MatchModel } from "#models/match";
import { inject } from "@adonisjs/core";
import { DbMatchAdapter } from "./adapters/DbMatchAdapter.js";
import { MatchService } from "../domain/service/MatchService.js";

@inject()
export class DbMatchService implements MatchService {

  constructor(private dbMatchAdapter: DbMatchAdapter) {}

  public async find(matchId: string): Promise<Match | null> {
    const dbMatch = await MatchModel.find(matchId)

    if(!dbMatch) return null

    return this.dbMatchAdapter.toDomain(dbMatch)
  }
}