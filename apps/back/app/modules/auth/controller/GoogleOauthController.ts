import { CodeGenerator } from "#common/utils/CodeGenerator";
import { UUIDGenerator } from "#common/utils/UUIDGenerator";
import { CredentialModel } from "#models/credential";
import { UserModel } from "#models/user";
import { inject } from "@adonisjs/core";
import { HttpContext } from "@adonisjs/core/http";
import db from "@adonisjs/lucid/services/db";
import { DateTime } from "luxon";

type CreateUserProps = {
  googleId: string,
  email: string,
  username: string
}

@inject()
export default class GoogleOauthController {

  constructor(
    private uuidGenerator: UUIDGenerator, 
    private codeGenerator: CodeGenerator
  ){}

  public async redirect({ ally }: HttpContext) {
    return ally.use('google').redirect()
  }

  public async callback({ ally, auth, response }: HttpContext) {
    const googleUser = await ally.use('google').user()

    const credential = await CredentialModel.findBy({
      providerName: 'google',
      providerUserId: googleUser.id
    })

    let user: UserModel;
    if(!credential){
      user = await this.createUser({ 
        googleId: googleUser.id, 
        email: googleUser.email, 
        username: googleUser.nickName
      })
    } else {
      credential.email = googleUser.email
      credential.updatedAt = DateTime.fromJSDate(new Date())
      await credential.save()
      await credential.load('user')
      user = credential.user
    }

    await auth.use('web').login(user)

    return response.redirect('http://localhost:3000')
  }

  private async createUser({ googleId, email, username }: CreateUserProps): Promise<UserModel> {
    const user = await db.transaction(async (trx) => {
      const currentDate = new Date()
      const createdUser = await UserModel.create(
        {
          id: this.uuidGenerator.generate(),
          username: `${username}-${this.codeGenerator.generate()}`,
          createdAt: DateTime.fromJSDate(currentDate)
        }, 
        { client: trx }
      )

      await createdUser.related('credentials').create({
        providerName: 'google', 
        providerUserId: googleId, 
        createdAt: DateTime.fromJSDate(currentDate), 
        email 
      })

      return createdUser
    })

    return user
  }
}