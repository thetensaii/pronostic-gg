import { LeagueFactory } from "#league/domain/LeagueFactory";
import { LeagueCRUDService } from "#league/service/LeagueCRUDService";
import { HttpContext } from "@adonisjs/core/http";
import { createLeagueValidator } from "./validators/LeagueCRUDValidator.js";
import { inject } from "@adonisjs/core";

@inject()
export default class LeagueCRUDController {
  constructor(
    private leagueFactory: LeagueFactory,
    private leagueCRUDService: LeagueCRUDService
  ){}

  public async create({ request, response }: HttpContext){
    const payload = await request.validateUsing(createLeagueValidator)

    const league = this.leagueFactory.create({
      ownerId: payload.owner_id,
      competitionId: payload.competition_id,
      name: payload.name,
    })

    const createdLeagueId = await this.leagueCRUDService.create(league)

    response.status(201).send({ leagueId: createdLeagueId })
  }
}