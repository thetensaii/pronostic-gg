import { Result, ResultType } from "#common/Result";
import { LeagueFactory } from "#league/domain/LeagueFactory";
import { CompetitionRepository } from "#league/domain/repositories/CompetitionRepository";
import { LeagueRepository } from "#league/domain/repositories/LeagueRepository";
import { UserRepository } from "#league/domain/repositories/UserRepository";
import { inject } from "@adonisjs/core";
import { CreateLeagueErrors } from "./CreateLeagueErrors.js";
import { CreateLeagueDto, CreateLeagueUseCase } from "./CreateLeagueUseCase.js";

@inject()
export class CreateLeague implements CreateLeagueUseCase {
  constructor(
    private userRepository: UserRepository,
    private competitionRepository: CompetitionRepository,
    private leagueFactory: LeagueFactory,
    private leagueRepository: LeagueRepository
  ){}

  public async execute(props: CreateLeagueDto): Promise<ResultType<string, CreateLeagueErrors>> {
    const owner = await this.userRepository.find(props.ownerId)
    if(!owner){
      return Result.fail(CreateLeagueErrors.UserDontExistError)
    }

    const competition = await  this.competitionRepository.find(props.competitionId)
    if(!competition){
      return Result.fail(CreateLeagueErrors.CompetitionDontExistError)
    }

    const league = this.leagueFactory.create({
      name: props.name,
      owner: owner,
      competition: competition
    })

    await this.leagueRepository.save(league)

    return Result.success(league.id)

  }
}