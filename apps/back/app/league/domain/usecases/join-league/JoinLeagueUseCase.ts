import { ResultType } from "#common/Result";
import { JoinLeagueErrors } from "./JoinLeagueErrors.js";

export type JoinLeagueDto = {
  userId: string,
  leagueId: string
}

export abstract class JoinLeagueUseCase {
  abstract execute(joinLeagueDto: JoinLeagueDto): Promise<ResultType<null, JoinLeagueErrors>>
}