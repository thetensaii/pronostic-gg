import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

const SaveForecastController = () => import('./controller/SaveForecastController.js')
const GetNextForecastsController = () => import('./controller/GetNextForecastsController.js')
const GetForecastsResultsController = () => import('./controller/GetForecastsResultsController.js')

export const forecastRouter = () =>
  router
    .group(() => {
      router.post('/', [SaveForecastController])
      router.get('/:competition_slug/next', [GetNextForecastsController])
      router.get('/:competition_slug/results', [GetForecastsResultsController])
    })
    .prefix('forecasts')
    .use(middleware.auth())
