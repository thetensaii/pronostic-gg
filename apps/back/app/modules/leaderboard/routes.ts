import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

const GetLeaderboardController = () => import('./controller/GetLeaderboardController.js')

export const leaderboardRouter = () =>
  router
    .group(() => {
      router.get('/:competition_slug/:league_code', [GetLeaderboardController])
    })
    .prefix('leaderboard')
    .use(middleware.auth())
