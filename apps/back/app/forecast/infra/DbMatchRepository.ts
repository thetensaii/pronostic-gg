import { Match } from "#forecast/domain/Match";
import { MatchRepository } from "#forecast/domain/repositories/MatchRepository";
import { MatchModel } from "#models/match";
import { inject } from "@adonisjs/core";
import { DbMatchAdapter } from "./adapters/DbMatchAdapter.js";

@inject()
export class DbMatchRepository implements MatchRepository {

  constructor(private dbMatchAdapter: DbMatchAdapter) {}

  public async find(matchId: string): Promise<Match | null> {
    const dbMatch = await MatchModel.find(matchId)

    if(!dbMatch) return null

    return this.dbMatchAdapter.toDomain(dbMatch)
  }
}