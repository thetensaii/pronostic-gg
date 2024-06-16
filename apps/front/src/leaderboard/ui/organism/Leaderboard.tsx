import { css } from 'styled-system/css'
import { VStack } from 'styled-system/jsx'
import { useGetLeaderboard } from '~/leaderboard/hooks/UseGetLeaderboard'
import { Heading } from '~/components/ui/heading'
import { CurrentMemberRow } from '~/leaderboard/ui/molecule/CurrentMemberRow'
import { RankingTable } from '~/leaderboard/ui/molecule/RankingTable'
import { Text } from '~/components/ui/text'

export type RankedMember = {
  username: string,
  points: number,
  rank: number
}

type Props = {
  leagueCode: string
}
export const Leaderboard = ({ leagueCode }: Props) => {
  const { isLoading, isSuccess, data } = useGetLeaderboard(leagueCode)

  if(isLoading) return <Text>Chargement..</Text>
  if(!isSuccess) return <Text>Une erreur est survenue.</Text> // A Revoir hein


  return (
    <VStack gap='6' className={css({ w: 'full' })}>
      <Heading as='h1' size='2xl'>Classement - {data.leagueName}</Heading>
      <CurrentMemberRow member={data.user} />
      <RankingTable members={data.members} />
    </VStack>
  )
}