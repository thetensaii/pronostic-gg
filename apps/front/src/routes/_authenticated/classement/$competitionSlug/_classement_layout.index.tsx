import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/classement/$competitionSlug/_classement_layout/')({
  beforeLoad: ({ params }) => {
    throw redirect({ to: '/classement/$competitionSlug/$leagueCode', params: {
      competitionSlug: params.competitionSlug,
      leagueCode: 'main',
    }})
  }
})