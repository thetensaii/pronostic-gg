import { inject } from "@adonisjs/core";
import { UserModel } from "#models/user";
import { UserService } from "../domain/services/UserService.js";
import { DbUserAdapter } from "./adapters/DbUserAdapter.js";
import { User } from "../domain/User.js";

@inject()
export class DbUserService implements UserService {

  constructor(private dbUserAdapter: DbUserAdapter) {}

  public async find(userId: string): Promise<User | null> {
    const dbUser = await UserModel.find(userId)

    if(!dbUser) return null

    return this.dbUserAdapter.toDomain(dbUser)
  }
}