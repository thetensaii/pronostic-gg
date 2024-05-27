import router from '@adonisjs/core/services/router'

const ForecasterManagerController = () => import('#forecaster/controller/ForecasterManagerController')

export const forecasterRouter = () =>
  router.group(() => {
    router.post('/', [ForecasterManagerController, 'create'])
  }).prefix('forecasters')