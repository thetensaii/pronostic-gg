import { Outlet, createFileRoute } from '@tanstack/react-router'
import { Container } from 'styled-system/jsx'
import { ResultsNavigationSidebar } from '~/results/ui/orgasnism/ResultsNavigationSidebar'

export const Route = createFileRoute('/_authenticated/resultats/_resultats_layout')({
  component: () => 
    <Container css={{ maxWidth: '6xl', pt: '8', lg : { display : 'flex', gap: '32' } }}>
      <ResultsNavigationSidebar />
      <Outlet />
    </Container>
})