import { Outlet, createFileRoute } from '@tanstack/react-router'
import { css } from 'styled-system/css'
import { Container } from 'styled-system/jsx'
import { RankingNavigationSidebar } from '~/ranking/ui/organism/RankingNavigationSidebar'


const ClassementLayout = () => {
  const {competitionId} = Route.useParams()
  return (
    <Container maxWidth='6xl' className={css({ pt: '8', lg : { display : 'flex', gap: '32' } })}>
      <RankingNavigationSidebar currentCompetitionSlug={competitionId} />
      <Outlet />
    </Container>
  )
}
export const Route = createFileRoute('/classement/$competitionId/_classement_layout')({
  component: ClassementLayout
    
})