import * as Table from '~/components/ui/table'
import { Text } from "~/components/ui/text"
import { RankedMember } from '../organism/Leaderboard'

type Props = {
  members: RankedMember[]
}

export const RankingTable = ({ members }: Props) => {
  return (
    <Table.Root variant="outline">
      <Table.Head>
        <Table.Row>
          <Table.Header><Text as="span" size='lg'>Position</Text></Table.Header>
          <Table.Header><Text as="span" size='lg'>Pseudo</Text></Table.Header>
          <Table.Header><Text as="span" size='lg'>Points</Text></Table.Header>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {members.sort((a, b) => a.rank - b.rank).map((member) => (
          <Table.Row key={member.username}>
            <Table.Cell><Text as="span" size='md'>{member.rank}</Text></Table.Cell>
            <Table.Cell><Text as="span" size='md'>{member.username}</Text></Table.Cell>
            <Table.Cell><Text as="span" size='md'>{member.points}</Text></Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}