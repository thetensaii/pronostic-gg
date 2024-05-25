import { inject } from "@adonisjs/core";
import { HttpContext } from "@adonisjs/core/http";
import { LeagueCRUDService } from "#league/domain/service/LeagueCRUDService";
import { createLeagueValidator } from "#league/controller/validators/LeagueCRUDValidator";

@inject()
export default class LeagueCRUDController {
  constructor(
    private leagueCRUDService: LeagueCRUDService
  ){}

  public async create({ request, response }: HttpContext){
    const payload = await request.validateUsing(createLeagueValidator)

    const createdLeagueId = await this.leagueCRUDService.create({
      ownerId: payload.owner_id,
      competitionId: payload.competition_id,
      name: payload.name,
    })

    response.status(201).send({ leagueId: createdLeagueId })
  }
}