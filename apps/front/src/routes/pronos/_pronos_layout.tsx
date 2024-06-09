import { Outlet, createFileRoute } from '@tanstack/react-router'
import { css } from 'styled-system/css'
import { Container } from 'styled-system/jsx'
import { ForecastsNavigationSidebar } from '~/forecasts/ui/organism/ForecastsNavigationSidebar'

export const Route = createFileRoute('/pronos/_pronos_layout')({
  component: () => 
    <Container maxWidth='6xl' className={css({ pt: '8', lg : { display : 'flex', gap: '32' } })}>
      <ForecastsNavigationSidebar />
      <Outlet />
    </Container>
})