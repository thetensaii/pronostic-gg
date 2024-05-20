import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected matchesTableName = 'matches'
  protected competitionsTableName = 'competitions'
  protected teamsTableName = 'teams'

  async up() {
    this.schema.createTable(this.matchesTableName, (table) => {
      table.increments('id')
      table
        .integer("competition_id")
        .references("id")
        .inTable(this.competitionsTableName)
        .onDelete("CASCADE")
      table.timestamp("start_at")
      table
        .integer('team_a_id') 
        .references("id")
        .inTable(this.teamsTableName)
        .onDelete("CASCADE")
      table
        .integer('team_b_id') 
        .references("id")
        .inTable(this.teamsTableName)
        .onDelete("CASCADE")
      table.integer("score_a").unsigned()
      table.integer("score_b").unsigned()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.matchesTableName)
  }
}