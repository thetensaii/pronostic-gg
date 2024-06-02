
import { Competition } from "#league/domain/Competition";
import { CompetitionModel } from "#models/competition";

export class DbCompetitionAdapter {
  public toDomain(competition: CompetitionModel): Competition {
    return new Competition({ id: competition.id })
  }
}