import { Outlet, createFileRoute } from '@tanstack/react-router'
import { css } from 'styled-system/css'
import { Container } from 'styled-system/jsx'
import { ResultsNavigationSidebar } from '~/results/ui/orgasnism/ResultsNavigationSidebar'

export const Route = createFileRoute('/resultats/_resultats_layout')({
  component: () => 
    <Container maxWidth='6xl' className={css({ pt: '8', lg : { display : 'flex', gap: '32' } })}>
      <ResultsNavigationSidebar />
      <Outlet />
    </Container>
})