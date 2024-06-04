import { CompetitionModel } from '#models/competition'
import { GameModel } from '#models/game'
import { MatchModel } from '#models/match'
import { StructureModel } from '#models/structure'
import { TeamModel } from '#models/team'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  static environment = ['development']

  async run() {
    
    const lol = await GameModel.updateOrCreate({}, {
      id: crypto.randomUUID(),
      name: "League of Legends",
      createdAt: DateTime.fromJSDate(new Date()),
    })
    
    const lfl = await CompetitionModel.updateOrCreate({}, {
      id: crypto.randomUUID(),
      gameId: lol.id,
      name: "LFL",
      slug: "lfl",
      createdAt: DateTime.fromJSDate(new Date()),
    })
    
    const structures = await StructureModel.updateOrCreateMany(['name'], [
      {
        id: crypto.randomUUID(),
        name: "Karmine Corp",
        createdAt: DateTime.fromJSDate(new Date()),
      },
      {
        id: crypto.randomUUID(),
        name: "Vitality",
        createdAt: DateTime.fromJSDate(new Date()),
      },
      {
        id: crypto.randomUUID(),
        name: "Solary",
        createdAt: DateTime.fromJSDate(new Date()),
      },
      {
        id: crypto.randomUUID(),
        name: "BDS",
        createdAt: DateTime.fromJSDate(new Date()),
      },
      {
        id: crypto.randomUUID(),
        name: "TDS",
        createdAt: DateTime.fromJSDate(new Date()),
      },
    ])

    const teams = await TeamModel.updateOrCreateMany(['name'], [
      {
        id: crypto.randomUUID(),
        structureId: structures[0].id,
        name: "Karmine Corp B",
        createdAt: DateTime.fromJSDate(new Date()),
      },
      {
        id: crypto.randomUUID(),
        structureId: structures[1].id,
        name: "Vitality B",
        createdAt: DateTime.fromJSDate(new Date()),
      },
      {
        id: crypto.randomUUID(),
        structureId: structures[2].id,
        name: "Solary",
        createdAt: DateTime.fromJSDate(new Date()),
      },
      {
        id: crypto.randomUUID(),
        structureId: structures[3].id,
        name: "BDS A",
        createdAt: DateTime.fromJSDate(new Date()),
      },
      {
        id: crypto.randomUUID(),
        structureId: structures[4].id,
        name: "TDS",
        createdAt: DateTime.fromJSDate(new Date()),
      },
    ])

    
    await lfl.related('teams').detach()
    await lfl.related('teams').attach(teams.reduce((acc, currentTeam) => {
      return {...acc, [currentTeam.id]: {
        created_at: DateTime.fromJSDate(new Date()),
      }}
    }, {}))

    await MatchModel.updateOrCreateMany(['competitionId', 'teamAId', 'teamBId'], [
      {
        id: crypto.randomUUID(),
        competitionId: lfl.id,
        teamAId: teams[0].id,
        teamBId: teams[1].id,
        startAt: DateTime.fromJSDate(new Date()),
        createdAt: DateTime.fromJSDate(new Date()),
      },
      {
        id: crypto.randomUUID(),
        competitionId: lfl.id,
        teamAId: teams[1].id,
        teamBId: teams[2].id,
        startAt: DateTime.fromJSDate(new Date()),
        createdAt: DateTime.fromJSDate(new Date()),
      },
      {
        id: crypto.randomUUID(),
        competitionId: lfl.id,
        teamAId: teams[3].id,
        teamBId: teams[2].id,
        startAt: DateTime.fromJSDate(new Date()),
        createdAt: DateTime.fromJSDate(new Date()),
      },
      {
        id: crypto.randomUUID(),
        competitionId: lfl.id,
        teamAId: teams[4].id,
        teamBId: teams[2].id,
        startAt: DateTime.fromJSDate(new Date()),
        createdAt: DateTime.fromJSDate(new Date()),
      },
    ])

  }
}