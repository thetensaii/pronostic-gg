import { CompetitionModel } from '#models/competition'
import { ForecasterModel } from '#models/forecaster'
import { LeagueModel } from '#models/league'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  static environment = ['development']

  async run() {
    const competition = await CompetitionModel.firstOrFail()

    const forecasters = await ForecasterModel.all()
    const leagueOwner = forecasters[0]

    const league = await LeagueModel.updateOrCreate(
      {
        ownerId: leagueOwner.id,
        competitionId: competition.id,
      },
      {
        ownerId: leagueOwner.id,
        competitionId: competition.id,
        name: "Les Zamis"
      }
    )

    await league.related('forecasters').detach()
    await league.related('forecasters').attach(forecasters.map(f => f.id))
  }
}