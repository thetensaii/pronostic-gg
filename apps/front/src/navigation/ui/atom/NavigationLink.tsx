import { Link as RouterLink } from "@tanstack/react-router"
import { PropsWithChildren } from "react"
import { css } from "styled-system/css"
import { Link } from "~/components/ui/link"

type Props = {
  to: string,
}

export const NavigationLink = ({ children, to }: PropsWithChildren<Props>) => {
  return (
    <Link asChild>
      <RouterLink 
        to={to} 
        activeProps={{ className: css({ fontWeight: 'bold' })}} 
        inactiveProps={{ className: css({ fontWeight: 'normal' })}}
      >
        { children }
      </RouterLink>
    </Link>
  )
}