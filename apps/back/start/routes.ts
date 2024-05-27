import { forecasterRouter } from '../app/forecaster/routes.js'
import { leagueRouter } from '#league/routes'
import router from '@adonisjs/core/services/router'

router.group(() => {
  forecasterRouter(),
  leagueRouter()
})