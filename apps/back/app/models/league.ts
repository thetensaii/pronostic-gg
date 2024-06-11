import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import { UserModel } from './user.js';
import { type ManyToMany } from '@adonisjs/lucid/types/relations';

export class LeagueModel extends BaseModel {
  static table = 'leagues'

  @column({ isPrimary: true })
  declare id: string

  @column()
  declare name:string;

  @column()
  declare code:string;

  @column()
  declare ownerId: string

  @column()
  declare competitionId: string

  @manyToMany(() => UserModel)
  declare members: ManyToMany<typeof UserModel>

  @column.dateTime()
  declare createdAt: DateTime

  @column.dateTime()
  declare updatedAt: DateTime | null
}