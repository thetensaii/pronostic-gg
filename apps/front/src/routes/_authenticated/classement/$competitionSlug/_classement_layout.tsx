import { Outlet, createFileRoute } from '@tanstack/react-router'
import { Container } from 'styled-system/jsx'
import { RankingNavigationSidebar } from '~/leaderboard/ui/organism/RankingNavigationSidebar'

export const Route = createFileRoute('/_authenticated/classement/$competitionSlug/_classement_layout')({
  component: ClassementLayout
})

function ClassementLayout() {
  const { competitionSlug } = Route.useParams()
  return (
    <Container css={{ maxWidth: '6xl', pt: '8', lg : { display : 'flex', gap: '32' } }}>
      <RankingNavigationSidebar currentCompetitionSlug={competitionSlug} />
      <Outlet />
    </Container>
  )
}