import { ForecasterModel } from '#models/forecaster'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  static environment = ['development']

  async run() {
    await ForecasterModel.updateOrCreateMany(['username'], [
      {
        id: crypto.randomUUID(),
        username: "Drw_Paps",
      },
      {
        id: crypto.randomUUID(),
        username: "Mijdan",
      },
      {
        id: crypto.randomUUID(),
        username: "xTeiiix",
      },
      {
        id: crypto.randomUUID(),
        username: "Peaky",
      },
      {
        id: crypto.randomUUID(),
        username: "Nanass",
      },
      {
        id: crypto.randomUUID(),
        username: "Ouzouu",
      },
      {
        id: crypto.randomUUID(),
        username: "Leghz",
      },
    ])
  }
}