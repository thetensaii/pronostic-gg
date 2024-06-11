import { UserModel } from "#models/user";
import { HttpContext } from "@adonisjs/core/http";
import vine from "@vinejs/vine";

const getLeaguesValidator = vine.compile(
  vine.object({
    user_id: vine.string()
  })
)

export default class GetLeaguesController {

  public async handle({ request, response }: HttpContext) { 
    const payload = await request.validateUsing(getLeaguesValidator)

    const user = await UserModel.find(payload.user_id)
    if(!user){
      return response.status(401)
    }

    await user.load('leagues')
    await Promise.all(user.leagues.map( l => l.load('members')))
    await Promise.all(user.leagues.map( l => l.load('competition')))

    return user.leagues.map((l) => ({
      code: l.code,
      name: l.name,
      competition_name: l.competition.name,
      count_members: l.members.length
    }))
  }
}