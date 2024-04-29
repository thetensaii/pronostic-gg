import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu"
import { Separator } from "@/components/ui/separator"
import { NavigationItem } from "../atom/NavigationItem"

export const NavigationBar = () => {
  return (
    <div>
      <div className="p-4 flex justify-between">
        <p className="text-2xl">Pronostic.gg</p>
        
        <NavigationMenu >
          <NavigationMenuList>
            <NavigationItem href="#1">
              Mes Pronos
            </NavigationItem>
            <NavigationItem href="#2">
              Résultats
            </NavigationItem>
            <NavigationItem href="#3">
              Classement
            </NavigationItem>
            <NavigationItem href="#4">
              Ligues
            </NavigationItem>
          </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationItem href="#4">
              Mon Profil
            </NavigationItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <Separator />
    </div>
  )
}