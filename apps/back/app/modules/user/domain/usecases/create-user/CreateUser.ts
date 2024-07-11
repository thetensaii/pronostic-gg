import { inject } from '@adonisjs/core'
import { UserFactory } from '../../UserFactory.js'
import { UsernameAlreadyExists } from '../../errors/UsernameAlreadyExists.js'
import { UserRepository } from '../../repositories/UserRepository.js'
import { CreateUserDto, CreateUserUseCase } from './CreateUserUseCase.js'
import { Result, ResultType } from '#common/Result'

@inject()
export class CreateUser implements CreateUserUseCase {
  constructor(
    private userRepository: UserRepository,
    private userFactory: UserFactory
  ) {}

  async execute(createUserDto: CreateUserDto): Promise<ResultType<string, UsernameAlreadyExists>> {
    const { username } = createUserDto

    const usernameExists = await this.userRepository.doUsernameAlreadyExists(username)
    if (usernameExists) {
      return Result.fail(new UsernameAlreadyExists())
    }

    const user = this.userFactory.create({ username })

    await this.userRepository.save(user)

    return Result.success(user.id)
  }
}
