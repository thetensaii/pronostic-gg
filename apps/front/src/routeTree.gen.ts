/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AuthenticatedImport } from './routes/_authenticated'
import { Route as authSignupImport } from './routes/(auth)/signup'
import { Route as authLoginImport } from './routes/(auth)/login'
import { Route as AuthenticatedProfilIndexImport } from './routes/_authenticated/profil/index'
import { Route as AuthenticatedLiguesIndexImport } from './routes/_authenticated/ligues/index'
import { Route as AuthenticatedClassementIndexImport } from './routes/_authenticated/classement/index'
import { Route as AuthenticatedResultatsResultatslayoutImport } from './routes/_authenticated/resultats/_resultats_layout'
import { Route as AuthenticatedPronosPronoslayoutImport } from './routes/_authenticated/pronos/_pronos_layout'
import { Route as AuthenticatedLiguesJoinImport } from './routes/_authenticated/ligues/join'
import { Route as AuthenticatedLiguesCreateImport } from './routes/_authenticated/ligues/create'
import { Route as AuthenticatedResultatsResultatslayoutIndexImport } from './routes/_authenticated/resultats/_resultats_layout.index'
import { Route as AuthenticatedPronosPronoslayoutIndexImport } from './routes/_authenticated/pronos/_pronos_layout.index'
import { Route as AuthenticatedResultatsResultatslayoutCompetitionSlugImport } from './routes/_authenticated/resultats/_resultats_layout.$competitionSlug'
import { Route as AuthenticatedPronosPronoslayoutCompetitionSlugImport } from './routes/_authenticated/pronos/_pronos_layout.$competitionSlug'
import { Route as AuthenticatedClassementCompetitionSlugClassementlayoutImport } from './routes/_authenticated/classement/$competitionSlug/_classement_layout'
import { Route as AuthenticatedClassementCompetitionSlugClassementlayoutIndexImport } from './routes/_authenticated/classement/$competitionSlug/_classement_layout.index'
import { Route as AuthenticatedClassementCompetitionSlugClassementlayoutLeagueCodeImport } from './routes/_authenticated/classement/$competitionSlug/_classement_layout.$leagueCode'

// Create Virtual Routes

const AuthenticatedResultatsImport = createFileRoute(
  '/_authenticated/resultats',
)()
const AuthenticatedPronosImport = createFileRoute('/_authenticated/pronos')()
const AuthenticatedClassementCompetitionSlugImport = createFileRoute(
  '/_authenticated/classement/$competitionSlug',
)()

// Create/Update Routes

const AuthenticatedRoute = AuthenticatedImport.update({
  id: '/_authenticated',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedResultatsRoute = AuthenticatedResultatsImport.update({
  path: '/resultats',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthenticatedPronosRoute = AuthenticatedPronosImport.update({
  path: '/pronos',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const authSignupRoute = authSignupImport.update({
  path: '/signup',
  getParentRoute: () => rootRoute,
} as any)

const authLoginRoute = authLoginImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedClassementCompetitionSlugRoute =
  AuthenticatedClassementCompetitionSlugImport.update({
    path: '/classement/$competitionSlug',
    getParentRoute: () => AuthenticatedRoute,
  } as any)

const AuthenticatedProfilIndexRoute = AuthenticatedProfilIndexImport.update({
  path: '/profil/',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthenticatedLiguesIndexRoute = AuthenticatedLiguesIndexImport.update({
  path: '/ligues/',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthenticatedClassementIndexRoute =
  AuthenticatedClassementIndexImport.update({
    path: '/classement/',
    getParentRoute: () => AuthenticatedRoute,
  } as any)

const AuthenticatedResultatsResultatslayoutRoute =
  AuthenticatedResultatsResultatslayoutImport.update({
    id: '/_resultats_layout',
    getParentRoute: () => AuthenticatedResultatsRoute,
  } as any)

const AuthenticatedPronosPronoslayoutRoute =
  AuthenticatedPronosPronoslayoutImport.update({
    id: '/_pronos_layout',
    getParentRoute: () => AuthenticatedPronosRoute,
  } as any)

const AuthenticatedLiguesJoinRoute = AuthenticatedLiguesJoinImport.update({
  path: '/ligues/join',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthenticatedLiguesCreateRoute = AuthenticatedLiguesCreateImport.update({
  path: '/ligues/create',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthenticatedResultatsResultatslayoutIndexRoute =
  AuthenticatedResultatsResultatslayoutIndexImport.update({
    path: '/',
    getParentRoute: () => AuthenticatedResultatsResultatslayoutRoute,
  } as any)

const AuthenticatedPronosPronoslayoutIndexRoute =
  AuthenticatedPronosPronoslayoutIndexImport.update({
    path: '/',
    getParentRoute: () => AuthenticatedPronosPronoslayoutRoute,
  } as any)

const AuthenticatedResultatsResultatslayoutCompetitionSlugRoute =
  AuthenticatedResultatsResultatslayoutCompetitionSlugImport.update({
    path: '/$competitionSlug',
    getParentRoute: () => AuthenticatedResultatsResultatslayoutRoute,
  } as any)

const AuthenticatedPronosPronoslayoutCompetitionSlugRoute =
  AuthenticatedPronosPronoslayoutCompetitionSlugImport.update({
    path: '/$competitionSlug',
    getParentRoute: () => AuthenticatedPronosPronoslayoutRoute,
  } as any)

const AuthenticatedClassementCompetitionSlugClassementlayoutRoute =
  AuthenticatedClassementCompetitionSlugClassementlayoutImport.update({
    id: '/_classement_layout',
    getParentRoute: () => AuthenticatedClassementCompetitionSlugRoute,
  } as any)

const AuthenticatedClassementCompetitionSlugClassementlayoutIndexRoute =
  AuthenticatedClassementCompetitionSlugClassementlayoutIndexImport.update({
    path: '/',
    getParentRoute: () =>
      AuthenticatedClassementCompetitionSlugClassementlayoutRoute,
  } as any)

const AuthenticatedClassementCompetitionSlugClassementlayoutLeagueCodeRoute =
  AuthenticatedClassementCompetitionSlugClassementlayoutLeagueCodeImport.update(
    {
      path: '/$leagueCode',
      getParentRoute: () =>
        AuthenticatedClassementCompetitionSlugClassementlayoutRoute,
    } as any,
  )

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_authenticated': {
      preLoaderRoute: typeof AuthenticatedImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/login': {
      preLoaderRoute: typeof authLoginImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/signup': {
      preLoaderRoute: typeof authSignupImport
      parentRoute: typeof rootRoute
    }
    '/_authenticated/ligues/create': {
      preLoaderRoute: typeof AuthenticatedLiguesCreateImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/ligues/join': {
      preLoaderRoute: typeof AuthenticatedLiguesJoinImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/pronos': {
      preLoaderRoute: typeof AuthenticatedPronosImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/pronos/_pronos_layout': {
      preLoaderRoute: typeof AuthenticatedPronosPronoslayoutImport
      parentRoute: typeof AuthenticatedPronosRoute
    }
    '/_authenticated/resultats': {
      preLoaderRoute: typeof AuthenticatedResultatsImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/resultats/_resultats_layout': {
      preLoaderRoute: typeof AuthenticatedResultatsResultatslayoutImport
      parentRoute: typeof AuthenticatedResultatsRoute
    }
    '/_authenticated/classement/': {
      preLoaderRoute: typeof AuthenticatedClassementIndexImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/ligues/': {
      preLoaderRoute: typeof AuthenticatedLiguesIndexImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/profil/': {
      preLoaderRoute: typeof AuthenticatedProfilIndexImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/classement/$competitionSlug': {
      preLoaderRoute: typeof AuthenticatedClassementCompetitionSlugImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/classement/$competitionSlug/_classement_layout': {
      preLoaderRoute: typeof AuthenticatedClassementCompetitionSlugClassementlayoutImport
      parentRoute: typeof AuthenticatedClassementCompetitionSlugRoute
    }
    '/_authenticated/pronos/_pronos_layout/$competitionSlug': {
      preLoaderRoute: typeof AuthenticatedPronosPronoslayoutCompetitionSlugImport
      parentRoute: typeof AuthenticatedPronosPronoslayoutImport
    }
    '/_authenticated/resultats/_resultats_layout/$competitionSlug': {
      preLoaderRoute: typeof AuthenticatedResultatsResultatslayoutCompetitionSlugImport
      parentRoute: typeof AuthenticatedResultatsResultatslayoutImport
    }
    '/_authenticated/pronos/_pronos_layout/': {
      preLoaderRoute: typeof AuthenticatedPronosPronoslayoutIndexImport
      parentRoute: typeof AuthenticatedPronosPronoslayoutImport
    }
    '/_authenticated/resultats/_resultats_layout/': {
      preLoaderRoute: typeof AuthenticatedResultatsResultatslayoutIndexImport
      parentRoute: typeof AuthenticatedResultatsResultatslayoutImport
    }
    '/_authenticated/classement/$competitionSlug/_classement_layout/$leagueCode': {
      preLoaderRoute: typeof AuthenticatedClassementCompetitionSlugClassementlayoutLeagueCodeImport
      parentRoute: typeof AuthenticatedClassementCompetitionSlugClassementlayoutImport
    }
    '/_authenticated/classement/$competitionSlug/_classement_layout/': {
      preLoaderRoute: typeof AuthenticatedClassementCompetitionSlugClassementlayoutIndexImport
      parentRoute: typeof AuthenticatedClassementCompetitionSlugClassementlayoutImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  AuthenticatedRoute.addChildren([
    AuthenticatedLiguesCreateRoute,
    AuthenticatedLiguesJoinRoute,
    AuthenticatedPronosRoute.addChildren([
      AuthenticatedPronosPronoslayoutRoute.addChildren([
        AuthenticatedPronosPronoslayoutCompetitionSlugRoute,
        AuthenticatedPronosPronoslayoutIndexRoute,
      ]),
    ]),
    AuthenticatedResultatsRoute.addChildren([
      AuthenticatedResultatsResultatslayoutRoute.addChildren([
        AuthenticatedResultatsResultatslayoutCompetitionSlugRoute,
        AuthenticatedResultatsResultatslayoutIndexRoute,
      ]),
    ]),
    AuthenticatedClassementIndexRoute,
    AuthenticatedLiguesIndexRoute,
    AuthenticatedProfilIndexRoute,
    AuthenticatedClassementCompetitionSlugRoute.addChildren([
      AuthenticatedClassementCompetitionSlugClassementlayoutRoute.addChildren([
        AuthenticatedClassementCompetitionSlugClassementlayoutLeagueCodeRoute,
        AuthenticatedClassementCompetitionSlugClassementlayoutIndexRoute,
      ]),
    ]),
  ]),
  authLoginRoute,
  authSignupRoute,
])

/* prettier-ignore-end */
