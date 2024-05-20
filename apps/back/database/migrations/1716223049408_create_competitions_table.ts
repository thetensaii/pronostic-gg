import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected competitionsTableName = 'competitions'
  protected gamesTableName = 'games'
  protected teamsTableName = 'teams'
  protected competitionsTeamsTableName = 'competitions_teams'


  async up() {
    this.schema.createTable(this.competitionsTableName, (table) => {
      table.increments('id')
      table
        .integer("game_id")
        .references("id")
        .inTable(this.gamesTableName)
        .onDelete("CASCADE")
      table.string('name')
      table.string('slug').unique()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })

    this.schema.createTable(this.competitionsTeamsTableName, (table) => {
      table
        .integer("competition_id")
        .references("id")
        .inTable(this.competitionsTableName)
        .onDelete("CASCADE")
      table
        .integer("team_id")
        .references("id")
        .inTable(this.teamsTableName)
        .onDelete("CASCADE")

      table.primary(["competition_id", "team_id"])

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.competitionsTeamsTableName)
    this.schema.dropTable(this.competitionsTableName)
  }
}