import { User } from "../User.js";

export abstract class UserRepository {
  abstract doUsernameAlreadyExists(username: string): Promise<boolean>
  abstract save(user: User): Promise<void>
}