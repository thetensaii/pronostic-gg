import { HttpContext } from "@adonisjs/core/http";
import vine from "@vinejs/vine";

const getJoinedCompetitionLeaguesValidator = vine.compile(
  vine.object({
    competition_slug: vine.string()
  })
)


export default class GetJoinedCompetitionLeaguesController {

  public async handle({ auth, request }: HttpContext) {
    const user = auth.getUserOrFail()
    const payload = await request.validateUsing(getJoinedCompetitionLeaguesValidator)

    const joinedCompetitionLeagues = await user.related('leagues').query().join('competitions', 'competition_id', 'competitions.id').where('competitions.slug', payload.competition_slug)
    
    return [
      {
        name: "Global",
        code: "main"
      },
      ...joinedCompetitionLeagues.map(l => ({ name: l.name, code: l.code }))
    ]
  }
}