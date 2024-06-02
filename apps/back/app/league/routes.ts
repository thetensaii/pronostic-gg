import router from '@adonisjs/core/services/router'

const CreateLeagueController = () => import('#league/controller/CreateLeagueController')

export const leagueRouter = () =>
  router.group(() => {
    router.post('/', [CreateLeagueController])
  }).prefix('leagues')