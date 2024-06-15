import { css } from 'styled-system/css'
import { VStack } from 'styled-system/jsx'
import { Heading } from '~/components/ui/heading'
import { CurrentPlayerRow, Player } from '~/leaderboard/ui/molecule/CurrentPlayerRow'
import { RankingTable } from '~/leaderboard/ui/molecule/RankingTable'

type Props = {
  leagueCode: string
}

export const Leaderboard = ({ leagueCode }: Props) => {
  console.log(leagueCode)
  return (
    <VStack gap='6' className={css({ w: 'full'})}>
      <Heading as='h1' size='2xl'>Classement : Les ZAMIS</Heading>
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