import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected forecastersTableName = "forecasters"
  protected forecastsTableName = "forecasts"
  protected leaguesTableName = "leagues"
  protected leaguesForecastersTableName = "leagues_forecasters"
  
  async up() {
    this.schema.alterTable(this.forecastsTableName, (table) => {
      table.dropPrimary()
      table.dropForeign('forecaster_id')
    })
    this.schema.alterTable(this.leaguesTableName, (table) => {
      table.dropForeign('owner_id')
    })
    this.schema.alterTable(this.leaguesForecastersTableName, (table) => {
      table.dropPrimary()
      table.dropForeign('forecaster_id')
    })

    this.schema.alterTable(this.forecastersTableName, (table) => {
      table.dropPrimary()
    })
    this.schema.alterTable(this.forecastersTableName, (table) => {
      table.string('id').primary().alter()
    })

    this.schema.alterTable(this.forecastsTableName, (table) => {
      table
        .string('forecaster_id') 
        .references("id")
        .inTable(this.forecastersTableName)
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        .alter()
      table.primary(['forecaster_id', 'match_id'])
    })

    this.schema.alterTable(this.leaguesTableName, (table) => {
      table
        .string('owner_id') 
        .references("id")
        .inTable(this.forecastersTableName)
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        .alter()
    })

    this.schema.alterTable(this.leaguesForecastersTableName, (table) => {
      table
        .string('forecaster_id') 
        .references("id")
        .inTable(this.forecastersTableName)
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        .alter()

      table.primary(['forecaster_id', 'league_id'])
    })
  }

  async down() {

    this.schema.alterTable(this.forecastersTableName, (table) => {
      table.increments('new_id', { primaryKey: false })
    })

    this.defer(async (db) => {
      const forecasters = await db.from('forecasters').select('*')

      await Promise.all(
        forecasters.map((forecaster) => {
          return db.from('forecasters').where('id', forecaster.id).update({
            id: forecaster.new_id
          })
        })
      )

    })
    
    this.schema.alterTable(this.leaguesForecastersTableName, (table) => {
      table.dropPrimary()
      table.dropForeign('forecaster_id')
    })

    this.schema.alterTable(this.leaguesTableName, (table) => {
      table.dropForeign('owner_id')
    })

    this.schema.alterTable(this.forecastsTableName, (table) => {
      table.dropPrimary()
      table.dropForeign('forecaster_id')
    })

    this.schema.alterTable(this.forecastersTableName, (table) => {
      table.dropPrimary()
      table.dropColumn('id')
      table.renameColumn('new_id', 'id')
      table.primary(['id'])
    })

    this.schema.alterTable(this.forecastsTableName, (table) => {
      table
        .integer('forecaster_id') 
        .references("id")
        .inTable(this.forecastersTableName)
        .onDelete("CASCADE")
        .alter()
      table.primary(['forecaster_id', 'match_id'])
    })

    this.schema.alterTable(this.leaguesTableName, (table) => {
      table
        .integer('owner_id') 
        .references("id")
        .inTable(this.forecastersTableName)
        .onDelete("CASCADE")
        .alter()
    })

    this.schema.alterTable(this.leaguesForecastersTableName, (table) => {
      table
        .integer('forecaster_id') 
        .references("id")
        .inTable(this.forecastersTableName)
        .onDelete("CASCADE")
        .alter()

      table.primary(['forecaster_id', 'league_id'])
    })

  }
}