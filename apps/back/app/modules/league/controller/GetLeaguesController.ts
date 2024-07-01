import { HttpContext } from "@adonisjs/core/http";

export default class GetLeaguesController {

  public async handle({ auth }: HttpContext) { 
    const user = auth.getUserOrFail()

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