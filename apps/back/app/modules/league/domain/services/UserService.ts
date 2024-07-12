import { User } from '../User.js'

export abstract class UserService {
  abstract find(userId: string): Promise<User | null>
}
