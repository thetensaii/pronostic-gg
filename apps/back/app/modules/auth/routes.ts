import router from '@adonisjs/core/services/router'

const GoogleOauthController = () => import('./controller/GoogleOauthController.js')

export const authRouter = () =>
  router.group(() => {
    router.group(() => {
      router.get('/redirect', [GoogleOauthController, 'redirect'])
      router.get('/callback', [GoogleOauthController, 'callback'])
    }).prefix('google')
  }).prefix('auth')