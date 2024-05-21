import router from '@adonisjs/core/services/router'

const ForecastCrudController = () => import('#forecast/controller/ForecastCrudController')

export const forecastRouter = () =>
  router.group(() => {
    router.post('/', [ForecastCrudController, 'create'])
  }).prefix('forecasts')