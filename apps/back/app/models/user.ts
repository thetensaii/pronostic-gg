import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, manyToMany } from '@adonisjs/lucid/orm'
import type { HasMany, ManyToMany } from '@adonisjs/lucid/types/relations';
import { LeagueModel } from './league.js';
import { CredentialModel } from './credential.js';

export class UserModel extends BaseModel {
  static table = 'users'

  @column({ isPrimary: true })
  declare id: string

  @column()
  declare username: string;

  @manyToMany(() => LeagueModel, {
    pivotTable: 'leagues_users'
  })
  declare leagues: ManyToMany<typeof LeagueModel>

  @hasMany(() => CredentialModel, {
    foreignKey: 'userId'
  })
  declare credentials: HasMany<typeof CredentialModel>

  @column.dateTime()
  declare createdAt: DateTime

  @column.dateTime()
  declare updatedAt: DateTime | null
}