import * as Table from '~/components/ui/table'
import { Text } from "~/components/ui/text"

export type Player = {
  position: number,
  username: string,
  points: number,
}

type Props = Player

export const CurrentPlayerRow = ({position, username, points} : Props) => {
  return (
    <Table.Root variant='outline' w='full'>
      <Table.Row>
          <Table.Cell fontWeight="medium"><Text as="span" size='lg'>{position}</Text></Table.Cell>
          <Table.Cell fontWeight="medium"><Text as="span" size='lg'>{username}</Text></Table.Cell>
          <Table.Cell fontWeight="medium"><Text as="span" size='lg'>{points}</Text></Table.Cell>
      </Table.Row>
    </Table.Root>
  )
}