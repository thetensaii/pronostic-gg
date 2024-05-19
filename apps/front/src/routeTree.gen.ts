/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LiguesIndexImport } from './routes/ligues/index'
import { Route as ClassementIndexImport } from './routes/classement/index'
import { Route as ResultatsResultatslayoutImport } from './routes/resultats/_resultats_layout'
import { Route as PronosPronoslayoutImport } from './routes/pronos/_pronos_layout'
import { Route as LiguesJoinImport } from './routes/ligues/join'
import { Route as LiguesCreateImport } from './routes/ligues/create'
import { Route as ResultatsResultatslayoutIndexImport } from './routes/resultats/_resultats_layout.index'
import { Route as PronosPronoslayoutIndexImport } from './routes/pronos/_pronos_layout.index'
import { Route as ResultatsResultatslayoutCompetitionIdImport } from './routes/resultats/_resultats_layout.$competitionId'
import { Route as PronosPronoslayoutCompetitionIdImport } from './routes/pronos/_pronos_layout.$competitionId'
import { Route as ClassementCompetitionIdClassementlayoutImport } from './routes/classement/$competitionId/_classement_layout'
import { Route as ClassementCompetitionIdClassementlayoutIndexImport } from './routes/classement/$competitionId/_classement_layout.index'
import { Route as ClassementCompetitionIdClassementlayoutLeagueIdImport } from './routes/classement/$competitionId/_classement_layout.$leagueId'

// Create Virtual Routes

const ResultatsImport = createFileRoute('/resultats')()
const PronosImport = createFileRoute('/pronos')()
const ClassementCompetitionIdImport = createFileRoute(
  '/classement/$competitionId',
)()

// Create/Update Routes

const ResultatsRoute = ResultatsImport.update({
  path: '/resultats',
  getParentRoute: () => rootRoute,
} as any)

const PronosRoute = PronosImport.update({
  path: '/pronos',
  getParentRoute: () => rootRoute,
} as any)

const ClassementCompetitionIdRoute = ClassementCompetitionIdImport.update({
  path: '/classement/$competitionId',
  getParentRoute: () => rootRoute,
} as any)

const LiguesIndexRoute = LiguesIndexImport.update({
  path: '/ligues/',
  getParentRoute: () => rootRoute,
} as any)

const ClassementIndexRoute = ClassementIndexImport.update({
  path: '/classement/',
  getParentRoute: () => rootRoute,
} as any)

const ResultatsResultatslayoutRoute = ResultatsResultatslayoutImport.update({
  id: '/_resultats_layout',
  getParentRoute: () => ResultatsRoute,
} as any)

const PronosPronoslayoutRoute = PronosPronoslayoutImport.update({
  id: '/_pronos_layout',
  getParentRoute: () => PronosRoute,
} as any)

const LiguesJoinRoute = LiguesJoinImport.update({
  path: '/ligues/join',
  getParentRoute: () => rootRoute,
} as any)

const LiguesCreateRoute = LiguesCreateImport.update({
  path: '/ligues/create',
  getParentRoute: () => rootRoute,
} as any)

const ResultatsResultatslayoutIndexRoute =
  ResultatsResultatslayoutIndexImport.update({
    path: '/',
    getParentRoute: () => ResultatsResultatslayoutRoute,
  } as any)

const PronosPronoslayoutIndexRoute = PronosPronoslayoutIndexImport.update({
  path: '/',
  getParentRoute: () => PronosPronoslayoutRoute,
} as any)

const ResultatsResultatslayoutCompetitionIdRoute =
  ResultatsResultatslayoutCompetitionIdImport.update({
    path: '/$competitionId',
    getParentRoute: () => ResultatsResultatslayoutRoute,
  } as any)

const PronosPronoslayoutCompetitionIdRoute =
  PronosPronoslayoutCompetitionIdImport.update({
    path: '/$competitionId',
    getParentRoute: () => PronosPronoslayoutRoute,
  } as any)

const ClassementCompetitionIdClassementlayoutRoute =
  ClassementCompetitionIdClassementlayoutImport.update({
    id: '/_classement_layout',
    getParentRoute: () => ClassementCompetitionIdRoute,
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
    '/ligues/create': {
      preLoaderRoute: typeof LiguesCreateImport
      parentRoute: typeof rootRoute
    }
    '/ligues/join': {
      preLoaderRoute: typeof LiguesJoinImport
      parentRoute: typeof rootRoute
    }
    '/pronos': {
      preLoaderRoute: typeof PronosImport
      parentRoute: typeof rootRoute
    }
    '/pronos/_pronos_layout': {
      preLoaderRoute: typeof PronosPronoslayoutImport
      parentRoute: typeof PronosRoute
    }
    '/resultats': {
      preLoaderRoute: typeof ResultatsImport
      parentRoute: typeof rootRoute
    }
    '/resultats/_resultats_layout': {
      preLoaderRoute: typeof ResultatsResultatslayoutImport
      parentRoute: typeof ResultatsRoute
    }
    '/classement/': {
      preLoaderRoute: typeof ClassementIndexImport
      parentRoute: typeof rootRoute
    }
    '/ligues/': {
      preLoaderRoute: typeof LiguesIndexImport
      parentRoute: typeof rootRoute
    }
    '/classement/$competitionId': {
      preLoaderRoute: typeof ClassementCompetitionIdImport
      parentRoute: typeof rootRoute
    }
    '/classement/$competitionId/_classement_layout': {
      preLoaderRoute: typeof ClassementCompetitionIdClassementlayoutImport
      parentRoute: typeof ClassementCompetitionIdRoute
    }
    '/pronos/_pronos_layout/$competitionId': {
      preLoaderRoute: typeof PronosPronoslayoutCompetitionIdImport
      parentRoute: typeof PronosPronoslayoutImport
    }
    '/resultats/_resultats_layout/$competitionId': {
      preLoaderRoute: typeof ResultatsResultatslayoutCompetitionIdImport
      parentRoute: typeof ResultatsResultatslayoutImport
    }
    '/pronos/_pronos_layout/': {
      preLoaderRoute: typeof PronosPronoslayoutIndexImport
      parentRoute: typeof PronosPronoslayoutImport
    }
    '/resultats/_resultats_layout/': {
      preLoaderRoute: typeof ResultatsResultatslayoutIndexImport
      parentRoute: typeof ResultatsResultatslayoutImport
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
  LiguesCreateRoute,
  LiguesJoinRoute,
  PronosRoute.addChildren([
    PronosPronoslayoutRoute.addChildren([
      PronosPronoslayoutCompetitionIdRoute,
      PronosPronoslayoutIndexRoute,
    ]),
  ]),
  ResultatsRoute.addChildren([
    ResultatsResultatslayoutRoute.addChildren([
      ResultatsResultatslayoutCompetitionIdRoute,
      ResultatsResultatslayoutIndexRoute,
    ]),
  ]),
  ClassementIndexRoute,
  LiguesIndexRoute,
  ClassementCompetitionIdRoute.addChildren([
    ClassementCompetitionIdClassementlayoutRoute.addChildren([
      ClassementCompetitionIdClassementlayoutLeagueIdRoute,
      ClassementCompetitionIdClassementlayoutIndexRoute,
    ]),
  ]),
])

/* prettier-ignore-end */
