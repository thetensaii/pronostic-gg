import router from '@adonisjs/core/services/router'
import { userRouter } from '#user/routes'
import { leagueRouter } from '../app/modules/league/routes.js'
import { forecastRouter } from '../app/modules/forecast/routes.js'
import { competitionRouter } from '#competition/routes'

router.group(() => {
  userRouter()
  forecastRouter()
  leagueRouter()
  competitionRouter()
})