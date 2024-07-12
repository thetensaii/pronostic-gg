import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected leaguesTableName = 'leagues'
  protected usersTableName = 'users'
  protected competitionsTableName = 'competitions'
  protected leaguesUsersTableName = 'leagues_users'

  async up() {
    this.schema.createTable(this.leaguesTableName, (table) => {
      table.string('id').primary()
      table.string('name').notNullable()
      table
        .string('owner_id')
        .notNullable()
        .references('id')
        .inTable(this.usersTableName)
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .string('competition_id')
        .notNullable()
        .references('id')
        .inTable(this.competitionsTableName)
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at')
    })

    this.schema.createTable(this.leaguesUsersTableName, (table) => {
      table
        .string('league_id')
        .notNullable()
        .references('id')
        .inTable(this.leaguesTableName)
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .string('user_id')
        .notNullable()
        .references('id')
        .inTable(this.usersTableName)
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.primary(['league_id', 'user_id'])
      table.timestamp('created_at').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.leaguesUsersTableName)
    this.schema.dropTable(this.leaguesTableName)
  }
}
