import { inject } from "@adonisjs/core";
import { User } from "#forecast/domain/User";
import { UserRepository } from "#forecast/domain/repositories/UserRepository";
import { UserModel } from "#models/user";
import { DbUserAdapter } from "./adapters/DbUserAdapter.js";

@inject()
export class DbUserRepository implements UserRepository {

  constructor(private dbUserAdapter: DbUserAdapter) {}

  public async find(userId: string): Promise<User | null> {
    const dbUser = await UserModel.find(userId)

    if(!dbUser) return null

    return this.dbUserAdapter.toDomain(dbUser)
  }
}