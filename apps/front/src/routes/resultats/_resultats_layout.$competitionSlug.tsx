import { createFileRoute } from '@tanstack/react-router'
import { Results } from '~/results/ui/orgasnism/Results'

export const Route = createFileRoute('/resultats/_resultats_layout/$competitionSlug')({
  component: () => <ResultsComponent />
})

function ResultsComponent()  {
  const { competitionSlug } = Route.useParams()

  return <Results competitionSlug={competitionSlug} />
}