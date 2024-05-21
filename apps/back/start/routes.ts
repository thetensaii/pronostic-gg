import { forecastRouter } from '#forecast/routes'
import router from '@adonisjs/core/services/router'

router.group(() => {
  forecastRouter()
})