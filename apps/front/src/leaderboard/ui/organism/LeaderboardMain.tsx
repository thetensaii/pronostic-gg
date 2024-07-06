import { css } from 'styled-system/css'
import { VStack } from 'styled-system/jsx'
import { Heading } from '~/components/ui/heading'
import { CurrentMemberRow } from '~/leaderboard/ui/molecule/CurrentMemberRow'
import { RankingTable } from '~/leaderboard/ui/molecule/RankingTable'
import { Leaderboard } from '~/leaderboard/services/GetLeaderboard'

type Props = {
  leaderboard: Leaderboard
}

export const LeaderboardMain = ({ leaderboard }: Props) => {
  return (
    <VStack gap='6' className={css({ w: 'full' })}>
      <Heading as='h1' size='2xl'>Classement - {leaderboard.leagueName}</Heading>
      <CurrentMemberRow member={leaderboard.user} />
      <RankingTable members={leaderboard.members} />
    </VStack>
  )
}