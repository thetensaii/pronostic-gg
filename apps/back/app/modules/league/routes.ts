import router from '@adonisjs/core/services/router'

const CreateLeagueController = () => import('./controller/CreateLeagueController.js')
const JoinLeagueController = () => import('./controller/JoinLeagueController.js')

export const leagueRouter = () =>
  router.group(() => {
    router.post('/', [CreateLeagueController]),
    router.post('/join', [JoinLeagueController])
  }).prefix('leagues')