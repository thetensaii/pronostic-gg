import { ResultType } from '#common/Result'
import { LeagueAlreadyJoinedError } from '#league/domain/errors/LeagueAlreadyJoinedError'
import { LeagueDontExistError } from '#league/domain/errors/LeagueDontExistError'
import { UserDontExistError } from '#league/domain/errors/UserDontExistError'

export type JoinLeagueDto = {
  userId: string
  leagueCode: string
}

export type JoinLeagueErrors = UserDontExistError | LeagueDontExistError | LeagueAlreadyJoinedError

export abstract class JoinLeagueUseCase {
  abstract execute(joinLeagueDto: JoinLeagueDto): Promise<ResultType<null, JoinLeagueErrors>>
}
