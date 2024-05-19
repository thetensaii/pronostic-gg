import { Stack } from 'styled-system/jsx'
import * as Card from '~/components/ui/card'
import { Text } from "~/components/ui/text"
import { css } from 'styled-system/css'

export type League = {
  name: string,
  competition: string,
  numberOfMembers: number,
}

type Props = League

export const LeagueCard = ({ name, competition, numberOfMembers }: Props) => {
  
  return (
    <Card.Root className={css({ borderWidth: '2px' })}>
      <Card.Header>
        <Card.Title>{name}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Stack gap="4">
          <Text as='p'>Compétition : {competition}</Text>
          <Text as='p'>Nombre de membres : {numberOfMembers}</Text>
        </Stack>
      </Card.Body>
    </Card.Root>
  )
}