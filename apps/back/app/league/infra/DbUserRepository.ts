import { inject } from "@adonisjs/core";
import { UserModel } from "#models/user";
import { UserRepository } from "#league/domain/repositories/UserRepository";
import { DbUserAdapter } from "./adapters/DbUserAdapter.js";
import { User } from "#league/domain/User";

@inject()
export class DbUserRepository implements UserRepository {

  constructor(private dbUserAdapter: DbUserAdapter) {}

  public async find(userId: string): Promise<User | null> {
    const dbUser = await UserModel.find(userId)

    if(!dbUser) return null

    return this.dbUserAdapter.toDomain(dbUser)
  }
}