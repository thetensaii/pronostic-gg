import { Result } from '#common/Result'
import { CreateLeagueUseCase } from '../domain/usecases/create-league/CreateLeagueUseCase.js'
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import vine from '@vinejs/vine'

const createLeagueValidator = vine.compile(
  vine.object({
    name: vine.string(),
    competition_id: vine.string(),
  })
)

@inject()
export default class CreateLeagueController {
  constructor(private createLeagueUseCase: CreateLeagueUseCase) {}

  async handle({ auth, request, response }: HttpContext) {
    const user = auth.getUserOrFail()
    const payload = await request.validateUsing(createLeagueValidator)

    const result = await this.createLeagueUseCase.execute({
      name: payload.name,
      ownerId: user.id,
      competitionId: payload.competition_id,
    })

    if (Result.isFail(result)) {
      response.status(400)
    } else {
      const leagueId = result.value
      response.status(201).json({ leagueId })
    }
  }
}
