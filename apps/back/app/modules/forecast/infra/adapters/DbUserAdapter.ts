import { User } from '../../domain/User.js'
import { UserModel } from '#models/user'

export class DbUserAdapter {
  toDomain(user: UserModel): User {
    return new User({ id: user.id })
  }
}
