import { css } from "styled-system/css"
import { NavigationLink } from "../atom/NavigationLink"
import { Text } from "~/components/ui/text"

export const NavigationBar = () => {
  return <header className={css({ py: '4', px: '8' })}>
    <nav className={css({ width: 'full', display: 'flex', justifyContent: 'space-between' })}>
      <Text as='p'>Pronostic.gg</Text>
      <ul className={css({ display: 'flex', justifyContent: 'space-between', gap: '12' })}>
        <NavigationLink to="/" >
          Mes pronos
        </NavigationLink>
        <NavigationLink to="/resultats">
          Résultats
        </NavigationLink>
        <NavigationLink to="/classement">
          Classement
        </NavigationLink>
        <NavigationLink to="/ligues">
          Ligues
        </NavigationLink>
      </ul>

      <NavigationLink to='/profil'>
        Mon Profil
      </NavigationLink>
    </nav>
  </header>
}