import { Result, ResultType } from "#common/Result";
import { LeagueFactory } from "#league/domain/LeagueFactory";
import { CompetitionService } from "#league/domain/services/CompetitionService";
import { LeagueRepository } from "#league/domain/repositories/LeagueRepository";
import { UserService } from "#league/domain/services/UserService";
import { inject } from "@adonisjs/core";
import { CreateLeagueErrors } from "./CreateLeagueErrors.js";
import { CreateLeagueDto, CreateLeagueUseCase } from "./CreateLeagueUseCase.js";

@inject()
export class CreateLeague implements CreateLeagueUseCase {
  constructor(
    private userService: UserService,
    private competitionService: CompetitionService,
    private leagueFactory: LeagueFactory,
    private leagueRepository: LeagueRepository
  ){}

  public async execute(createLeagueDto: CreateLeagueDto): Promise<ResultType<string, CreateLeagueErrors>> {
    const owner = await this.userService.find(createLeagueDto.ownerId)
    if(!owner){
      return Result.fail(CreateLeagueErrors.UserDontExistError)
    }

    const competition = await  this.competitionService.find(createLeagueDto.competitionId)
    if(!competition){
      return Result.fail(CreateLeagueErrors.CompetitionDontExistError)
    }

    const league = this.leagueFactory.create({
      name: createLeagueDto.name,
      owner: owner,
      competition: competition
    })

    await this.leagueRepository.save(league)

    return Result.success(league.id)

  }
}