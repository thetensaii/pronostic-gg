import { Outlet, createFileRoute } from '@tanstack/react-router'
import { css } from 'styled-system/css'
import { Container } from 'styled-system/jsx'
import { PronosNavigationSidebar } from '~/pronos/ui/organism/PronosNavigationSidebar'

export const Route = createFileRoute('/_pronos_layout')({
  component: () => 
    <Container maxWidth='6xl' className={css({ pt: '8', lg : { display : 'flex', gap: '32' } })}>
      <PronosNavigationSidebar />
      <Outlet />
    </Container>
})