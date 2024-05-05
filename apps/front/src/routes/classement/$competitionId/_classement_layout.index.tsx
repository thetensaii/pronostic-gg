import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/classement/$competitionId/_classement_layout/')({
  beforeLoad: ({ params }) => {
    throw redirect({ to: '/classement/$competitionId/$leagueId', params: {
      competitionId: params.competitionId,
      leagueId: 'main',
    }})
  }
})