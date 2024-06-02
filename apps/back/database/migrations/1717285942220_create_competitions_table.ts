import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected competitionsTableName = 'competitions'
  protected gamesTableName = 'games'
  protected teamsTableName = 'teams'
  protected competitionsTeamsTableName = 'competitions_teams'
  async up() {
    this.schema.createTable(this.competitionsTableName, (table) => {
      table.string('id').primary()
      table.string('name').notNullable()
      table.string('slug').unique().notNullable()
      table
        .string("game_id").notNullable()
        .references("id")
        .inTable(this.gamesTableName)
        .onDelete("CASCADE")
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at')
    })

    this.schema.createTable(this.competitionsTeamsTableName, (table) => {
      table
        .string("competition_id").notNullable()
        .references("id")
        .inTable(this.competitionsTableName)
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
      table
        .string("team_id").notNullable()
        .references("id")
        .inTable(this.teamsTableName)
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
      table.primary(["competition_id", "team_id"])
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.competitionsTeamsTableName)
    this.schema.dropTable(this.competitionsTableName)
  }
}