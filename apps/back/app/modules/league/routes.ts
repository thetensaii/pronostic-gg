import router from '@adonisjs/core/services/router'

const CreateLeagueController = () => import('./controller/CreateLeagueController.js')
const JoinLeagueController = () => import('./controller/JoinLeagueController.js')
const GetLeaguesController = () => import('./controller/GetLeaguesController.js')

export const leagueRouter = () =>
  router.group(() => {
    router.post('/', [CreateLeagueController]),
    router.post('/join', [JoinLeagueController])
    router.get('/', [GetLeaguesController])
  }).prefix('leagues')