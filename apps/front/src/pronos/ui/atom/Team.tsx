import { css } from "styled-system/css";
import { Text } from "~/components/ui/text"

export type Team = {
  name: string
}

type Props = Team

export const Team = ({ name }: Props) => {
  return (
    <div className={css({ p: '3', borderRadius: 'md', borderWidth: '2px' })}>
      <Text>{name}</Text>
    </div>
  )
}