import { createFileRoute, notFound } from '@tanstack/react-router'
import { Text } from '~/components/ui/text'
import { findForecastsResults } from '~/results/services/FindForecastsResults'
import { Results } from '~/results/ui/orgasnism/Results'

export const Route = createFileRoute('/_authenticated/resultats/_resultats_layout/$competitionSlug')({
  loader: async ({params}) => {
    const forecastsResults = await findForecastsResults(params.competitionSlug)
    if(!forecastsResults){
      throw notFound()
    }

    return { forecastsResults }
  },
  notFoundComponent: () => {
    return <Text>Cette compétition n'existe pas.</Text>
  },
  component: () => <ResultsComponent />
})

function ResultsComponent()  {
  const { forecastsResults } = Route.useLoaderData()

  return <Results forecastsResults={forecastsResults} />
}