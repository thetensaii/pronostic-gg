import { Forecaster } from '#models/forecaster'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  static environment = ['development']

  async run() {
    await Forecaster.updateOrCreateMany(['username'], [
      {
        username: "Drw_Paps",
      },
      {
        username: "Mijdan",
      },
      {
        username: "xTeiiix",
      },
      {
        username: "Peaky",
      },
      {
        username: "Nanass",
      },
      {
        username: "Ouzouu",
      },
      {
        username: "Leghz",
      },
    ])
  }
}