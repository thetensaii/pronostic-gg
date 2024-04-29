import { NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

type Props = React.PropsWithChildren<{
  href: string
}>

export const NavigationItem = ({ children, href }: Props ) => {
  return (
  <NavigationMenuItem>
    <NavigationMenuLink className={navigationMenuTriggerStyle()} href={href}>
      {children}
    </NavigationMenuLink>
  </NavigationMenuItem>
  )
}