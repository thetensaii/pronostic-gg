import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected matchesTableName = 'matches'
  protected competitionsTableName = 'competitions'
  protected teamsTableName = 'teams'

  async up() {
    this.schema.createTable(this.matchesTableName, (table) => {
      table.string('id').primary()
      table
        .string('competition_id')
        .notNullable()
        .references('id')
        .inTable(this.competitionsTableName)
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamp('start_at').notNullable()
      table
        .string('team_a_id')
        .notNullable()
        .references('id')
        .inTable(this.teamsTableName)
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .string('team_b_id')
        .notNullable()
        .references('id')
        .inTable(this.teamsTableName)
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.integer('score_a').unsigned()
      table.integer('score_b').unsigned()
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.matchesTableName)
  }
}
