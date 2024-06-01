import router from '@adonisjs/core/services/router'

const CreateUserController = () => import('#user/controller/CreateUserController')

export const userRouter = () =>
  router.group(() => {
    router.post('/', [CreateUserController])
  }).prefix('users')