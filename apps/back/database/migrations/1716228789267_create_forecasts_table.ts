import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected forecastsTableName = 'forecasts'
  protected forecastersTableName = 'forecasters'
  protected matchesTableName = 'matches'

  async up() {
    this.schema.createTable(this.forecastsTableName, (table) => {
      table.increments('id')
      table
        .integer('forecaster_id') 
        .references("id")
        .inTable(this.forecastersTableName)
        .onDelete("CASCADE")
      table
        .integer('match_id') 
        .references("id")
        .inTable(this.matchesTableName)
        .onDelete("CASCADE")
      table.integer('team_a_score').unsigned()
      table.integer('team_b_score').unsigned()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.forecastsTableName)
  }
}