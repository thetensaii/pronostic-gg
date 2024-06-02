import router from '@adonisjs/core/services/router'

const SaveForecastController = () => import('#forecast/controller/SaveForecastController')

export const forecastRouter = () =>
  router.group(() => {
    router.post('/', [SaveForecastController])
  }).prefix('forecasts')