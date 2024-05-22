import router from '@adonisjs/core/services/router'

const LeagueCrudController = () => import('#league/controller/LeagueCRUDController')

export const leagueRouter = () =>
  router.group(() => {
    router.post('/', [LeagueCrudController, 'create'])
  }).prefix('leagues')