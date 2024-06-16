import * as Table from '~/components/ui/table'
import { Text } from "~/components/ui/text"
import { RankedMember } from '../organism/Leaderboard'

type Props = {
  member: RankedMember 
}

export const CurrentMemberRow = ({ member } : Props) => {
  return (
    <Table.Root variant='outline' css={{ w: 'full'}}>
      <Table.Row>
          <Table.Cell css={{ fontWeight: 'medium' }}><Text as="span" size='lg'>{member.rank}</Text></Table.Cell>
          <Table.Cell css={{ fontWeight: 'medium' }}><Text as="span" size='lg'>{member.username}</Text></Table.Cell>
          <Table.Cell css={{ fontWeight: 'medium' }}><Text as="span" size='lg'>{member.points}</Text></Table.Cell>
      </Table.Row>
    </Table.Root>
  )
}