import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm';
import type { BelongsTo } from '@adonisjs/lucid/types/relations';
import { DateTime } from 'luxon'
import { UserModel } from './user.js';

export class CredentialModel extends BaseModel {
  static table = 'credentials'

  @column({ isPrimary: true })
  declare providerName: 'google'

  @column({ isPrimary: true })
  declare providerUserId: string

  @column()
  declare email: string

  @column()
  declare userId: string;

  @belongsTo(() => UserModel, {
    foreignKey: 'userId',
    localKey: 'id'
  })
  declare user: BelongsTo<typeof UserModel>

  @column.dateTime()
  declare createdAt: DateTime

  @column.dateTime()
  declare updatedAt: DateTime | null
}