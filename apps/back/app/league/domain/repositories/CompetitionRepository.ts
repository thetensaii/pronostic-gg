import { Competition } from "../Competition.js";

export abstract class CompetitionRepository {
  abstract find(competitionId: string): Promise<Competition | null>
}