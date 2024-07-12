import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

const CreateUserController = () => import('./controller/CreateUserController.js')

export const userRouter = () =>
  router
    .group(() => {
      router.post('/', [CreateUserController])
    })
    .prefix('users')
    .use(middleware.auth())
