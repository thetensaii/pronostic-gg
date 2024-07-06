import { createRootRoute, Link as RouterLink, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Container } from 'styled-system/jsx'
import { Link } from '~/components/ui/link'
import { Text } from '~/components/ui/text'

export const Route = createRootRoute({
  notFoundComponent: () => {
    return (
      <Container css={{ maxWidth: '3xl',  }}>
        <Text>Erreur cette page n'existe pas.</Text>
        
        <Link asChild>
          <RouterLink to="/">Revenir sur le site</RouterLink>
        </Link>
      </Container>
    )
  },
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})