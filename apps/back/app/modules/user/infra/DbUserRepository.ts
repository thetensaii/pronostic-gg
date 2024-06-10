import { UserModel } from "#models/user";
import { User } from "../domain/User.js";
import { UserRepository } from "../domain/repositories/UserRepository.js";
import { DateTime } from "luxon";

export class DbUserRepository implements UserRepository {
  public async doUsernameAlreadyExists(username: string): Promise<boolean> {
    const user = await UserModel.findBy('username', username)
    if(!user) return false
    return true
  }
  
  public async save(user: User): Promise<void> {
    await UserModel.updateOrCreate({ id: user.id }, {
      id: user.id,
      username: user.username,
      createdAt: DateTime.fromJSDate(user.createdAt),
      updatedAt: user.updatedAt ? DateTime.fromJSDate(user.updatedAt) : undefined
    })
  }
}