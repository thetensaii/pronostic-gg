import {Player} from './CurrentPlayerRow'
import * as Table from '~/components/ui/table'
import { Text } from "~/components/ui/text"

type Props = {
  players: Player[]
}

export const RankingTable = ({players}: Props) => {
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
        {players.map((player) => (
          <Table.Row key={player.username}>
            <Table.Cell><Text as="span" size='md'>{player.position}</Text></Table.Cell>
            <Table.Cell><Text as="span" size='md'>{player.username}</Text></Table.Cell>
            <Table.Cell><Text as="span" size='md'>{player.points}</Text></Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}