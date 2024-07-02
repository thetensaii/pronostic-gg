import { createFileRoute } from '@tanstack/react-router'
import { Leaderboard } from '~/leaderboard/ui/organism/Leaderboard'


export const Route = createFileRoute('/_authenticated/classement/$competitionSlug/_classement_layout/$leagueCode')({
  component: LeaderboardComponent
})

function LeaderboardComponent( ) {
  const { leagueCode, competitionSlug } = Route.useParams()

  return (
    <Leaderboard competitionSlug={competitionSlug} leagueCode={leagueCode} />
  )  
}


