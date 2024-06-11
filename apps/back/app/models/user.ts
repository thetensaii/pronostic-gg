import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import type { ManyToMany } from '@adonisjs/lucid/types/relations';
import { LeagueModel } from './league.js';

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

  @column.dateTime()
  declare createdAt: DateTime

  @column.dateTime()
  declare updatedAt: DateTime | null
}