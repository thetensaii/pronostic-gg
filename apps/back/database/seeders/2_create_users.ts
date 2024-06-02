import { UserModel } from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  static environment = ['development']

  async run() {
    await UserModel.updateOrCreateMany(['username'], [
      {
        id: crypto.randomUUID(),
        username: "Drw_Paps",
        createdAt: DateTime.fromJSDate(new Date()),
      },
      {
        id: crypto.randomUUID(),
        username: "Mijdan",
        createdAt: DateTime.fromJSDate(new Date()),
      },
      {
        id: crypto.randomUUID(),
        username: "xTeiiix",
        createdAt: DateTime.fromJSDate(new Date()),
      },
      {
        id: crypto.randomUUID(),
        username: "Peaky",
        createdAt: DateTime.fromJSDate(new Date()),
      },
      {
        id: crypto.randomUUID(),
        username: "Nanass",
        createdAt: DateTime.fromJSDate(new Date()),
      },
      {
        id: crypto.randomUUID(),
        username: "Ouzouu",
        createdAt: DateTime.fromJSDate(new Date()),
      },
      {
        id: crypto.randomUUID(),
        username: "Leghz",
        createdAt: DateTime.fromJSDate(new Date()),
      },
    ])
  }
}