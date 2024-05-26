import { CompetitionModel } from '#models/competition'
import { GameModel } from '#models/game'
import { MatchModel } from '#models/match'
import { TeamModel } from '#models/team'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  static environment = ['development']

  async run() {
    const lol = await GameModel.updateOrCreate({}, {
      name: "League of Legends"
    })

    const lfl = await CompetitionModel.updateOrCreate({}, {
      gameId: lol.id,
      name: "LFL",
      slug: "lfl",
    })

    const teams = await TeamModel.updateOrCreateMany(['name'], [
      {
        name: "Karmine Corp"
      },
      {
        name: "Vitality"
      },
      {
        name: "Solary"
      },
      {
        name: "BDS"
      },
      {
        name: "TDS"
      },
    ])

    await lfl.related('teams').detach()
    await lfl.related('teams').attach(teams.map(t => t.id))

    await MatchModel.updateOrCreateMany(['competitionId', 'teamAId', 'teamBId'], [
      {
        competitionId: lfl.id,
        teamAId: teams[0].id,
        teamBId: teams[1].id,
        startAt: DateTime.fromJSDate(new Date()),
      },
      {
        competitionId: lfl.id,
        teamAId: teams[1].id,
        teamBId: teams[2].id,
        startAt: DateTime.fromJSDate(new Date()),
      },
      {
        competitionId: lfl.id,
        teamAId: teams[3].id,
        teamBId: teams[2].id,
        startAt: DateTime.fromJSDate(new Date()),
      },
      {
        competitionId: lfl.id,
        teamAId: teams[4].id,
        teamBId: teams[2].id,
        startAt: DateTime.fromJSDate(new Date()),
      },
    ])

  }
}