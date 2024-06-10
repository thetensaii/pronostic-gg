import { ResultType } from "#common/Result"
import { UsernameAlreadyExists } from "../../errors/UsernameAlreadyExists.js"

export type CreateUserDto = {
  username: string
}

export abstract class CreateUserUseCase {
  abstract execute(createUserDto: CreateUserDto): Promise<ResultType<string, UsernameAlreadyExists>>
}