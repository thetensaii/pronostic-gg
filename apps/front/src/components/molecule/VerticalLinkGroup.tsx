import { Stack } from "styled-system/jsx"
import { SidebarLink } from "../atom/SidebarLink"

type Link = {
  name: string,
  to: string
}
type Props = {
  links: Link[]
}

export const VerticalLinkGroup = ({ links }: Props) => {
  return (
    <Stack gap='4'>
      {links.map((link) => (
        <SidebarLink key={link.name} to={link.to}>{link.name}</SidebarLink>
      ))}
    </Stack>
  )
}