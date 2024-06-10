import router from '@adonisjs/core/services/router'

const SaveForecastController = () => import('./controller/SaveForecastController.js')
const GetNextForecastsController = () => import('./controller/GetNextForecastsController.js')

export const forecastRouter = () =>
  router.group(() => {
    router.post('/', [SaveForecastController])
    router.get('/:competition_slug/next', [GetNextForecastsController])
  }).prefix('forecasts')