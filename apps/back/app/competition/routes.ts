import router from '@adonisjs/core/services/router'

const GetAllCompetitionsController = () => import('#competition/controller/GetAllCompetitionsController')

export const competitionRouter = () =>
  router.group(() => {
    router.get('/', [GetAllCompetitionsController])
  }).prefix('competitions')