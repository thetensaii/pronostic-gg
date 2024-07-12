import { CompetitionModel } from '#models/competition'
import { GameModel } from '#models/game'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  static environment = ['development']

  async run() {
    const lol = await GameModel.findByOrFail('name', 'League of Legends')
    const valorant = await GameModel.updateOrCreate(
      { name: 'Valorant' },
      {
        id: crypto.randomUUID(),
        name: 'Valorant',
        createdAt: DateTime.fromJSDate(new Date()),
      }
    )

    await CompetitionModel.updateOrCreateMany(
      ['slug'],
      [
        {
          id: crypto.randomUUID(),
          gameId: lol.id,
          name: 'LEC',
          slug: 'lec',
          createdAt: DateTime.fromJSDate(new Date()),
        },
        {
          id: crypto.randomUUID(),
          gameId: valorant.id,
          name: 'VRL',
          slug: 'vrl',
          createdAt: DateTime.fromJSDate(new Date()),
        },
        {
          id: crypto.randomUUID(),
          gameId: valorant.id,
          name: 'VCT EMEA',
          slug: 'vct-emea',
          createdAt: DateTime.fromJSDate(new Date()),
        },
      ]
    )
  }
}
