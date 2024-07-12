import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected forecastsTableName = 'forecasts'
  protected usersTableName = 'users'
  protected matchesTableName = 'matches'

  async up() {
    this.schema.createTable(this.forecastsTableName, (table) => {
      table
        .string('user_id')
        .notNullable()
        .references('id')
        .inTable(this.usersTableName)
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .string('match_id')
        .notNullable()
        .references('id')
        .inTable(this.matchesTableName)
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.integer('team_a_score').unsigned().notNullable()
      table.integer('team_b_score').unsigned().notNullable()

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.forecastsTableName)
  }
}
