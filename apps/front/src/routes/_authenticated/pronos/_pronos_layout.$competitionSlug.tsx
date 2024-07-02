import { createFileRoute } from '@tanstack/react-router'
import { ForecastsMain } from '~/forecasts/ui/organism/ForecastsMain'


export const Route = createFileRoute('/_authenticated/pronos/_pronos_layout/$competitionSlug')({
  component: ForecastsComponent
})

function ForecastsComponent()  {
  const { competitionSlug } = Route.useParams()

  return  <ForecastsMain competitionSlug={competitionSlug} />
}