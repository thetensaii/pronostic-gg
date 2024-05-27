import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'forecasts'
  protected primaryKeyConstraintName = "forecasts_pk"
  

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropPrimary()
      table.dropColumn('id')
      table.primary(['match_id', 'forecaster_id'])
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropPrimary()
    })

    this.schema.alterTable(this.tableName, (table) => {
      table.increments('id')
    })
  }
}