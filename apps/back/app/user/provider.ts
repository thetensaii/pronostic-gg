import { ApplicationService } from "@adonisjs/core/types";
import { UserRepository } from "./domain/repositories/UserRepository.js";
import { DbUserRepository } from "./infra/DbUserRepository.js";
import { CreateUserUseCase } from "./domain/usecases/create-user/CreateUserUseCase.js";
import { CreateUser } from "./domain/usecases/create-user/CreateUser.js";

export default class UserProvider {
  constructor(protected app: ApplicationService) {}

  register() {
    this.app.container.singleton(
      UserRepository,
      () => new DbUserRepository(),
    );
    
    this.app.container.singleton(
      CreateUserUseCase,
      () => this.app.container.make(CreateUser)
    );
  }
}