import { inject } from "@adonisjs/core";
import { User } from "../domain/User.js";
import { UserService } from "../domain/service/UserService.js";
import { UserModel } from "#models/user";
import { DbUserAdapter } from "./adapters/DbUserAdapter.js";

@inject()
export class DbUserService implements UserService {

  constructor(private dbUserAdapter: DbUserAdapter) {}

  public async find(userId: string): Promise<User | null> {
    const dbUser = await UserModel.find(userId)

    if(!dbUser) return null

    return this.dbUserAdapter.toDomain(dbUser)
  }
}