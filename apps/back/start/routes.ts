import router from '@adonisjs/core/services/router'
import { userRouter } from '#user/routes'
import { leagueRouter } from '#league/routes'
import { forecastRouter } from '#forecast/routes'
import { competitionRouter } from '#competition/routes'

router.group(() => {
  userRouter()
  forecastRouter()
  leagueRouter()
  competitionRouter()
})