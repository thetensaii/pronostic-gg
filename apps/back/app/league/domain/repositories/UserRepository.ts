import { User } from "../User.js";

export abstract class UserRepository {
  abstract find(userId: string): Promise<User | null>
}