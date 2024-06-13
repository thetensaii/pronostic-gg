import { UserModel } from "#models/user";
import { HttpContext } from "@adonisjs/core/http";
import vine from "@vinejs/vine";

const getJoinedCompetitionLeaguesValidator = vine.compile(
  vine.object({
    user_id: vine.string(),
    competition_slug: vine.string()
  })
)

export default class GetJoinedCompetitionLeaguesController {

  public async handle({ request, response }: HttpContext) {
    const payload = await request.validateUsing(getJoinedCompetitionLeaguesValidator)

    const user = await UserModel.find(payload.user_id)
    if(!user){
      return response.status(401)
    }

    const joinedCompetitionLeagues = await user.related('leagues').query().join('competitions', 'competition_id', 'competitions.id').where('competitions.slug', payload.competition_slug)

    return joinedCompetitionLeagues.map(l => ({ name: l.name, code: l.code }))
  }
}