import { Outlet, createFileRoute } from '@tanstack/react-router'
import { css } from 'styled-system/css'
import { Container } from 'styled-system/jsx'
import { RankingNavigationSidebar } from '~/leaderboard/ui/organism/RankingNavigationSidebar'

export const Route = createFileRoute('/classement/$competitionSlug/_classement_layout')({
  component: ClassementLayout
  
})

function ClassementLayout() {
  const { competitionSlug } = Route.useParams()
  return (
    <Container maxWidth='6xl' className={css({ pt: '8', lg : { display : 'flex', gap: '32' } })}>
      <RankingNavigationSidebar currentCompetitionSlug={competitionSlug} />
      <Outlet />
    </Container>
  )
}