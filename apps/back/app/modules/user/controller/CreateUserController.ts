import { HttpContext } from "@adonisjs/core/http";
import vine from "@vinejs/vine";
import { CreateUserUseCase } from "../domain/usecases/create-user/CreateUserUseCase.js";
import { inject } from "@adonisjs/core";
import { Result } from "#common/Result";

const createUserValidator = vine.compile(
  vine.object({
    username: vine.string()
  })
)

@inject()
export default class CreateUserController {

  constructor(private createUserUseCase: CreateUserUseCase){}

  public async handle({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createUserValidator)
    
    const result = await this.createUserUseCase.execute({ username: payload.username})
    
    if(Result.isFail(result)){
      response.status(409).send('Pseudo déjà utilisé.')
    } else {
      const id = result.value
      response.status(201).json({user_id: id})
    }
  }
}