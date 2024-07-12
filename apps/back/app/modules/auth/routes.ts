import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

const GoogleOauthController = () => import('./controller/GoogleOauthController.js')

export const authRouter = () =>
  router
    .group(() => {
      router
        .get('/me', ({ auth }) => {
          const user = auth.getUserOrFail()
          return {
            username: user.username,
          }
        })
        .use(middleware.auth())
      router
        .group(() => {
          router.get('/redirect', [GoogleOauthController, 'redirect'])
          router.get('/callback', [GoogleOauthController, 'callback'])
        })
        .prefix('google')
    })
    .prefix('auth')
