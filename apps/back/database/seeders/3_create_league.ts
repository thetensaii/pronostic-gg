import { CodeGenerator } from '#common/utils/CodeGenerator'
import { CompetitionModel } from '#models/competition'
import { LeagueModel } from '#models/league'
import { UserModel } from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  static environment = ['development']

  async run() {
    const users = await UserModel.all()
    const user = users[0]
    const competition = await CompetitionModel.firstOrFail()

    const league = await LeagueModel.create({
      id: crypto.randomUUID(),
      name: 'Les Zamis',
      code: new CodeGenerator().generate(),
      ownerId: user.id,
      competitionId: competition.id,
      createdAt: DateTime.fromJSDate(new Date()),
    })
    await league.related('members').detach()
    await league.related('members').attach(
      users.reduce(
        (acc, current) => {
          return Math.random() > 0.5
            ? acc
            : {
                ...acc,
                [current.id]: {
                  created_at: DateTime.fromJSDate(new Date()),
                },
              }
        },
        {
          [league.ownerId]: {
            created_at: DateTime.fromJSDate(new Date()),
          },
        }
      )
    )
  }
}
