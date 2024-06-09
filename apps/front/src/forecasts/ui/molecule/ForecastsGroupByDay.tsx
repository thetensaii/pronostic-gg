import { Forecast, ForecastList } from "./ForecastList"
import { Text } from "~/components/ui/text"

type Props = {
  date: Date,
  forecasts: Forecast[]
}

export const ForecastsGroupedByDay = ({ date, forecasts }: Props) => {
  const orderedForecasts = forecasts.sort((forecastA, forecastB) => forecastB.startAt.getTime() - forecastA.startAt.getTime())
  
  return <div>
    <Text as="p">
      {(date.toLocaleDateString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }))}    
    </Text>
    <ForecastList forecasts={orderedForecasts} />
  </div>
}