import { createFileRoute, notFound } from '@tanstack/react-router'
import { Text } from '~/components/ui/text'
import { findLeaderBoard } from '~/leaderboard/services/GetLeaderboard'
import { LeaderboardMain } from '~/leaderboard/ui/organism/LeaderboardMain'


export const Route = createFileRoute('/_authenticated/classement/$competitionSlug/_classement_layout/$leagueCode')({
  loader: async ({ params }) => {
    const leaderboard = await findLeaderBoard({ competitionSlug: params.competitionSlug, leagueCode: params.leagueCode })
    if(!leaderboard){
      throw notFound()
    }

    return { leaderboard }
  },
  notFoundComponent: () => {
    return <Text>Ce classement n'existe pas ou vous n'y avez pas accès.</Text>
  },
  component: LeaderboardComponent
})

function LeaderboardComponent() {
  const { leaderboard } = Route.useLoaderData()

  return (
    <LeaderboardMain leaderboard={leaderboard} />
  )  
}


