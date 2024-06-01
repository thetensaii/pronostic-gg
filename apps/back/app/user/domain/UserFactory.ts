import { UUIDGenerator } from "#common/utils/UUIDGenerator";
import { inject } from "@adonisjs/core";
import { User } from "./User.js";

type CreateUserProps = {
  username: string
}

@inject()
export class UserFactory {

  constructor(private uuidGenerator: UUIDGenerator){}

  public createUser(props: CreateUserProps): User {
    const id = this.uuidGenerator.generate()

    return new User({id: id, username: props.username, createdAt: new Date()})
  }
}