/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ResultatslayoutImport } from './routes/_resultats_layout'
import { Route as PronoslayoutImport } from './routes/_pronos_layout'
import { Route as ClassementIndexImport } from './routes/classement/index'
import { Route as ClassementCompetitionIdClassementlayoutImport } from './routes/classement/$competitionId/_classement_layout'
import { Route as ResultatslayoutResultatsCompetitionIdImport } from './routes/_resultats_layout/resultats.$competitionId'
import { Route as PronoslayoutPronosCompetitionIdImport } from './routes/_pronos_layout/pronos.$competitionId'
import { Route as ClassementCompetitionIdClassementlayoutIndexImport } from './routes/classement/$competitionId/_classement_layout.index'
import { Route as ClassementCompetitionIdClassementlayoutLeagueIdImport } from './routes/classement/$competitionId/_classement_layout.$leagueId'

// Create Virtual Routes

const ClassementCompetitionIdImport = createFileRoute(
  '/classement/$competitionId',
)()

// Create/Update Routes

const ResultatslayoutRoute = ResultatslayoutImport.update({
  id: '/_resultats_layout',
  getParentRoute: () => rootRoute,
} as any)

const PronoslayoutRoute = PronoslayoutImport.update({
  id: '/_pronos_layout',
  getParentRoute: () => rootRoute,
} as any)

const ClassementCompetitionIdRoute = ClassementCompetitionIdImport.update({
  path: '/classement/$competitionId',
  getParentRoute: () => rootRoute,
} as any)

const ClassementIndexRoute = ClassementIndexImport.update({
  path: '/classement/',
  getParentRoute: () => rootRoute,
} as any)

const ClassementCompetitionIdClassementlayoutRoute =
  ClassementCompetitionIdClassementlayoutImport.update({
    id: '/_classement_layout',
    getParentRoute: () => ClassementCompetitionIdRoute,
  } as any)

const ResultatslayoutResultatsCompetitionIdRoute =
  ResultatslayoutResultatsCompetitionIdImport.update({
    path: '/resultats/$competitionId',
    getParentRoute: () => ResultatslayoutRoute,
  } as any)

const PronoslayoutPronosCompetitionIdRoute =
  PronoslayoutPronosCompetitionIdImport.update({
    path: '/pronos/$competitionId',
    getParentRoute: () => PronoslayoutRoute,
  } as any)

const ClassementCompetitionIdClassementlayoutIndexRoute =
  ClassementCompetitionIdClassementlayoutIndexImport.update({
    path: '/',
    getParentRoute: () => ClassementCompetitionIdClassementlayoutRoute,
  } as any)

const ClassementCompetitionIdClassementlayoutLeagueIdRoute =
  ClassementCompetitionIdClassementlayoutLeagueIdImport.update({
    path: '/$leagueId',
    getParentRoute: () => ClassementCompetitionIdClassementlayoutRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_pronos_layout': {
      preLoaderRoute: typeof PronoslayoutImport
      parentRoute: typeof rootRoute
    }
    '/_resultats_layout': {
      preLoaderRoute: typeof ResultatslayoutImport
      parentRoute: typeof rootRoute
    }
    '/classement/': {
      preLoaderRoute: typeof ClassementIndexImport
      parentRoute: typeof rootRoute
    }
    '/_pronos_layout/pronos/$competitionId': {
      preLoaderRoute: typeof PronoslayoutPronosCompetitionIdImport
      parentRoute: typeof PronoslayoutImport
    }
    '/_resultats_layout/resultats/$competitionId': {
      preLoaderRoute: typeof ResultatslayoutResultatsCompetitionIdImport
      parentRoute: typeof ResultatslayoutImport
    }
    '/classement/$competitionId': {
      preLoaderRoute: typeof ClassementCompetitionIdImport
      parentRoute: typeof rootRoute
    }
    '/classement/$competitionId/_classement_layout': {
      preLoaderRoute: typeof ClassementCompetitionIdClassementlayoutImport
      parentRoute: typeof ClassementCompetitionIdRoute
    }
    '/classement/$competitionId/_classement_layout/$leagueId': {
      preLoaderRoute: typeof ClassementCompetitionIdClassementlayoutLeagueIdImport
      parentRoute: typeof ClassementCompetitionIdClassementlayoutImport
    }
    '/classement/$competitionId/_classement_layout/': {
      preLoaderRoute: typeof ClassementCompetitionIdClassementlayoutIndexImport
      parentRoute: typeof ClassementCompetitionIdClassementlayoutImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  PronoslayoutRoute.addChildren([PronoslayoutPronosCompetitionIdRoute]),
  ResultatslayoutRoute.addChildren([
    ResultatslayoutResultatsCompetitionIdRoute,
  ]),
  ClassementIndexRoute,
  ClassementCompetitionIdRoute.addChildren([
    ClassementCompetitionIdClassementlayoutRoute.addChildren([
      ClassementCompetitionIdClassementlayoutLeagueIdRoute,
      ClassementCompetitionIdClassementlayoutIndexRoute,
    ]),
  ]),
])

/* prettier-ignore-end */
