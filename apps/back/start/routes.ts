import { forecastRouter } from '#forecast/routes'
import { leagueRouter } from '#league/routes'
import router from '@adonisjs/core/services/router'

router.group(() => {
  forecastRouter(),
  leagueRouter()
})