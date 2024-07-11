import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected credentialsTableName = 'credentials'
  protected usersTableName = 'users'

  async up() {
    this.schema.createTable(this.credentialsTableName, (table) => {
      table
        .enum('provider_name', ['google'], {
          useNative: true,
          enumName: 'allowed_provider_name',
          existingType: false,
        })
        .notNullable()
      table.string('provider_user_id').notNullable()
      table.string('email').notNullable()
      table
        .string('user_id')
        .notNullable()
        .references('id')
        .inTable(this.usersTableName)
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.primary(['provider_name', 'provider_user_id'])

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.credentialsTableName)
    this.schema.raw('DROP TYPE IF EXISTS "allowed_provider_name"')
  }
}
