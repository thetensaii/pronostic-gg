import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected leaguesTableName = 'leagues'
  protected forecastersTableName = 'forecasters'
  protected competitionsTableName = 'competitions'
  protected leaguesForecastersTableName = 'leagues_forecasters'
  
  async up() {
    this.schema.createTable(this.leaguesTableName, (table) => {
      table.increments('id')
      table.string('name')
      table
        .integer('owner_id') 
        .references("id")
        .inTable(this.forecastersTableName)
        .onDelete("CASCADE")
      table
        .integer('competition_id') 
        .references("id")
        .inTable(this.competitionsTableName)
        .onDelete("CASCADE")

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })

    this.schema.createTable(this.leaguesForecastersTableName, (table) => {
      table
        .integer('league_id') 
        .references("id")
        .inTable(this.leaguesTableName)
        .onDelete("CASCADE")
      table
        .integer('forecaster_id') 
        .references("id")
        .inTable(this.forecastersTableName)
        .onDelete("CASCADE")

      table.primary(['league_id', 'forecaster_id'])

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.leaguesForecastersTableName)
    this.schema.dropTable(this.leaguesTableName)
  }
}