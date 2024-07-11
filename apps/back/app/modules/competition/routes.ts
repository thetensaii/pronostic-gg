import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

const GetAllCompetitionsController = () => import('./controller/GetAllCompetitionsController.js')

export const competitionRouter = () =>
  router
    .group(() => {
      router.get('/', [GetAllCompetitionsController])
    })
    .prefix('competitions')
    .use(middleware.auth())
