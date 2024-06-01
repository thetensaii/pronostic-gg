import router from '@adonisjs/core/services/router'
import { userRouter } from '#user/routes'
import { leagueRouter } from '#league/routes'

router.group(() => {
  userRouter(),
  leagueRouter()
})