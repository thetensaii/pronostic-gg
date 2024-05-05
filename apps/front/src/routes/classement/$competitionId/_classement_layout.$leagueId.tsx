import { createFileRoute } from '@tanstack/react-router'
import { css } from 'styled-system/css'
import { VStack } from 'styled-system/jsx'
import { Heading } from '~/components/ui/heading'
import { CurrentPlayerRow, Player } from '~/ranking/ui/molecule/CurrentPlayerRow'
import { RankingTable } from '~/ranking/ui/molecule/RankingTable'

const LeagueRanking = ( ) => {
  // const { competitionId, leagueId } = Route.useParams()

  return (
    <VStack gap='6' className={css({ w: 'full'})}>
      <Heading as='h1' size='2xl'>Classement</Heading>
      <CurrentPlayerRow position={1} username={'Jordan'} points={5} />
      <RankingTable players={playersList} />
    </VStack>
  )  
}

export const Route = createFileRoute('/classement/$competitionId/_classement_layout/$leagueId')({
  component: LeagueRanking
})

const playersList: Player[] = [
  {
    position: 1,
    username: "Jordan",
    points: 5
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