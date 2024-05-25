import { inject } from "@adonisjs/core";
import { HttpContext } from "@adonisjs/core/http";
import { LeagueCRUDService } from "#league/domain/service/LeagueCRUDService";
import { createLeagueValidator } from "#league/controller/validators/LeagueCRUDValidator";
import { CreateLeagueDto } from "#league/domain/service/LeagueCRUDService";

@inject()
export default class LeagueCRUDController {
  constructor(
    private leagueCRUDService: LeagueCRUDService
  ){}

  public async create({ request, response }: HttpContext){
    const payload = await request.validateUsing(createLeagueValidator)

    const leagueDto: CreateLeagueDto = {
      ownerId: payload.owner_id,
      competitionId: payload.competition_id,
      name: payload.name,
    }

    const createdLeagueId = await this.leagueCRUDService.create(leagueDto)

    response.status(201).send({ leagueId: createdLeagueId })
  }
}