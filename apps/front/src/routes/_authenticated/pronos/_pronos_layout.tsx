import { Outlet, createFileRoute } from '@tanstack/react-router'
import { Container } from 'styled-system/jsx'
import { ForecastsNavigationSidebar } from '~/forecasts/ui/organism/ForecastsNavigationSidebar'

export const Route = createFileRoute('/_authenticated/pronos/_pronos_layout')({
  component: () => 
    <Container css={{ maxWidth: '6xl', pt: '8', lg : { display : 'flex', gap: '32' } }}>
      <ForecastsNavigationSidebar />
      <Outlet />
    </Container>
})