import router from '@adonisjs/core/services/router'
import { userRouter } from '#user/routes'
import { leagueRouter } from '../app/modules/league/routes.js'
import { forecastRouter } from '../app/modules/forecast/routes.js'
import { competitionRouter } from '#competition/routes'
import { leaderboardRouter } from '#leaderboard/routes'
import { authRouter } from '../app/modules/auth/routes.js'

router.group(() => {
  authRouter()
  userRouter()
  forecastRouter()
  leagueRouter()
  competitionRouter()
  leaderboardRouter()
})
