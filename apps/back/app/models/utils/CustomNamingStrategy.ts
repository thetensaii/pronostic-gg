import string from '@adonisjs/core/helpers/string'
import { CamelCaseNamingStrategy, BaseModel } from '@adonisjs/lucid/orm'

export class CustomNamingStrategy extends CamelCaseNamingStrategy {
  relationPivotTable(
    _relation: 'manyToMany',
    model: typeof BaseModel,
    relatedModel: typeof BaseModel
  ) {
    return string.snakeCase(
      [model.table, relatedModel.table]
        .join('_')
    )
  }

  relationPivotForeignKey(
    _relation: 'manyToMany',
    model: typeof BaseModel
  ) {
    return string.snakeCase(`${string.singular(model.table)}_${model.primaryKey}`)
  }
}
