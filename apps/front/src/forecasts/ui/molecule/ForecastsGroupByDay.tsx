import { Forecast } from "../organism/ForecastsMain"
import { ForecastList } from "./ForecastList"
import { Text } from "~/components/ui/text"

type Props = {
  forecasts: Forecast[]
}

export const ForecastsGroupedByDay = ({ forecasts }: Props) => {
  const orderedForecasts = forecasts.sort((forecastA, forecastB) => forecastA.startAt.getTime() - forecastB.startAt.getTime())
  const forecast = orderedForecasts[0]
  const dateString = new Intl.DateTimeFormat('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(forecast.startAt)

  return <div>
    <Text as="p">
      {dateString}    
    </Text>
    <ForecastList forecasts={orderedForecasts} />
  </div>
}