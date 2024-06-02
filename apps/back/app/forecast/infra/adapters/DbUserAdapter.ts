import { User } from "#forecast/domain/User";
import { UserModel } from "#models/user";

export class DbUserAdapter {
  public toDomain(user: UserModel): User {
    return new User({ id: user.id })
  }
}