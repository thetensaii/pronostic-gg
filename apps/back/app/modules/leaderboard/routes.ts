import router from '@adonisjs/core/services/router'

const GetLeaderboardController = () => import('./controller/GetLeaderboardController.js')

export const leaderboardRouter = () =>
  router.group(() => {
    router.get('/:league_code', [GetLeaderboardController])
  }).prefix('leaderboard')