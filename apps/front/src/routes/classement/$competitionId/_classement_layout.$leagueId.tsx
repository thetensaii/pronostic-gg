import { createFileRoute } from '@tanstack/react-router'
import { css } from 'styled-system/css'
import { VStack } from 'styled-system/jsx'
import { Heading } from '~/components/ui/heading'
import { CurrentPlayerRow, Player } from '~/ranking/ui/molecule/CurrentPlayerRow'
import { RankingTable } from '~/ranking/ui/molecule/RankingTable'

export const Route = createFileRoute('/classement/$competitionId/_classement_layout/$leagueId')({
  component: LeagueRanking
})

function LeagueRanking( ) {
  // const { competitionId, leagueId } = Route.useParams()

  return (
    <VStack gap='6' className={css({ w: 'full'})}>
      <Heading as='h1' size='2xl'>Classement</Heading>
      <CurrentPlayerRow {...playersList[0]} />
      <RankingTable players={playersList} />
    </VStack>
  )  
}


const playersList: Player[] = [
  {
    position: 1,
    username: "Jordan",
    points: 8
  },
  {
    position: 2,
    username: "Alexis",
    points: 3
  },
  {
    position: 3,
    username: "Nadjim",
    points: 0
  },
]