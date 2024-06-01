import { ResultType } from "#common/Result"
import { UsernameAlreadyExists } from "#user/domain/errors/UsernameAlreadyExists"

export type CreateUserDto = {
  username: string
}

export abstract class CreateUserUseCase {
  abstract execute(createUserDto: CreateUserDto): Promise<ResultType<string, UsernameAlreadyExists>>
}