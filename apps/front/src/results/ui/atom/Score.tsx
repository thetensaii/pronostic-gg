import { Text } from "~/components/ui/text"
import { css } from "styled-system/css"

type Props = {
  value: number
}

export const Score = ({value}: Props) => {
  return (
    <div className={css({ py: '3', px: '4', borderRadius: 'md', borderWidth: '2px' })}>
      <Text as="p">{value}</Text>
    </div>
  )
}