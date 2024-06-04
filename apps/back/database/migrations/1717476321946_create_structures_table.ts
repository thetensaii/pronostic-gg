import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected structuresTableName = 'structures'
  protected teamsTableName = 'teams'

  async up() {
    this.schema.createTable(this.structuresTableName, (table) => {
      table.string('id').primary()
      table.string('name').notNullable()
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at')
    })

    this.schema.alterTable(this.teamsTableName, (table) => {
      table
        .string('structure_id').notNullable()
        .references("id")
        .inTable(this.structuresTableName)
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
    })
  }

  async down() {
    this.schema.alterTable(this.teamsTableName, (table) => {
      table.dropForeign('structure_id')
      table.dropColumn('structure_id')
    })
    
    this.schema.dropTable(this.structuresTableName)
  }
}