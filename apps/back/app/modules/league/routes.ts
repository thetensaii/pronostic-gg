import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

const CreateLeagueController = () => import('./controller/CreateLeagueController.js')
const JoinLeagueController = () => import('./controller/JoinLeagueController.js')
const GetLeaguesController = () => import('./controller/GetLeaguesController.js')
const GetJoinedCompetitionLeaguesController = () => import('./controller/GetJoinedCompetitionLeaguesController.js')

export const leagueRouter = () =>
  router.group(() => {
    router.post('/', [CreateLeagueController]),
    router.post('/join', [JoinLeagueController])
    router.get('/', [GetLeaguesController])
    router.get('/competition', [GetJoinedCompetitionLeaguesController])
  }).prefix('leagues').use(middleware.auth())