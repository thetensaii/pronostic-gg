import { inject } from "@adonisjs/core";
import { User } from "#forecast/domain/User";
import { UserService } from "#forecast/domain/service/UserService";
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