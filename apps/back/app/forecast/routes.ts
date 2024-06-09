import router from '@adonisjs/core/services/router'

const SaveForecastController = () => import('#forecast/controller/SaveForecastController')
const GetNextForecastsController = () => import('#forecast/controller/GetNextForecastsController')

export const forecastRouter = () =>
  router.group(() => {
    router.post('/', [SaveForecastController])
    router.get('/:competition_slug/next', [GetNextForecastsController])
  }).prefix('forecasts')