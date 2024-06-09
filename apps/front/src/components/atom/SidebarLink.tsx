import { PropsWithChildren } from "react"
import { Link } from "@tanstack/react-router"
import { Text } from "~/components/ui/text"
import { css } from "styled-system/css"

type Props = {
  to: string,
}

export const SidebarLink = ({ to, children }: PropsWithChildren<Props>) => {
  return (
    <Link 
      to={to}
      className={css({ fontWeight: 'semibold' })}
      activeProps={{className: css({ color: 'accent.default' })}}
    >
      <Text as='span'>
        { children }
      </Text>
    </Link>
  )
}