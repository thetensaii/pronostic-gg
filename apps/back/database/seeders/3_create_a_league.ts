import { Competition } from '#models/competition'
import { Forecaster } from '#models/forecaster'
import { League } from '#models/league'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  static environment = ['development']

  async run() {
    const competition = await Competition.firstOrFail()

    const forecasters = await Forecaster.all()
    const leagueOwner = forecasters[0]

    const league = await League.updateOrCreate(
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