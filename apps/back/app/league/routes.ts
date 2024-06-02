import router from '@adonisjs/core/services/router'

const CreateLeagueController = () => import('#league/controller/CreateLeagueController')
const JoinLeagueController = () => import('#league/controller/JoinLeagueController')

export const leagueRouter = () =>
  router.group(() => {
    router.post('/', [CreateLeagueController]),
    router.post('/join', [JoinLeagueController])
  }).prefix('leagues')