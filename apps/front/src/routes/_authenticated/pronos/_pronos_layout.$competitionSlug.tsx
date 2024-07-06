import { createFileRoute, notFound } from '@tanstack/react-router'
import { Text } from '~/components/ui/text'
import { findNextForecasts } from '~/forecasts/services/findNextForecasts'
import { ForecastsMain } from '~/forecasts/ui/organism/ForecastsMain'


export const Route = createFileRoute('/_authenticated/pronos/_pronos_layout/$competitionSlug')({
  loader: async ({ params }) => {
    const nextForecasts = await findNextForecasts(params.competitionSlug)
    if(!nextForecasts){
      throw notFound()
    }

    return { nextForecasts }
  },
  notFoundComponent: () => {
    return <Text>Cette compétition n'existe pas.</Text>
  },
  component: ForecastsComponent
})

function ForecastsComponent()  {
  const { nextForecasts } = Route.useLoaderData()

  return <ForecastsMain nextForecasts={nextForecasts} />
}