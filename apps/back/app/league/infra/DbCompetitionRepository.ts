import { inject } from "@adonisjs/core";
import { CompetitionRepository } from "#league/domain/repositories/CompetitionRepository";
import { Competition } from "#league/domain/Competition";
import { CompetitionModel } from "#models/competition";
import { DbCompetitionAdapter } from "./adapters/DbCompetitionAdapter.js";

@inject()
export class DbCompetitionRepository implements CompetitionRepository {

  constructor(private dbCompetitionAdapter: DbCompetitionAdapter) {}

  public async find(competitionId: string): Promise<Competition | null> {
    const dbCompetition = await CompetitionModel.find(competitionId)

    if(!dbCompetition) return null

    return this.dbCompetitionAdapter.toDomain(dbCompetition)
  }
}