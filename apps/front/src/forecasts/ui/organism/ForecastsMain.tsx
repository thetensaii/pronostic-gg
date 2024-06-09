import { css } from "styled-system/css"
import { Center, VStack } from "styled-system/jsx"
import { useGetNextForecasts } from "../hooks/useGetNextForecasts"
import { ForecastsGroupedByDay } from "../molecule/ForecastsGroupByDay"
import { Forecast } from "../molecule/ForecastList"

type Props = {
  competitionSlug: string
}
export const ForecastsMain = ({ competitionSlug }: Props) => {
  const nextForecasts = useGetNextForecasts(competitionSlug)
  const forecastGroupedByDate = nextForecasts.reduce<Record<string, Forecast[]>>((acc, currentForecast)  => {
    const currentDateString = currentForecast.startAt.toISOString().split('T')[0]

    if(acc[currentDateString]){
      acc[currentDateString].push(currentForecast)
    } else {
      acc[currentDateString] = [currentForecast]
    }

    return acc
  }, {})
  

  return (
  <div className={css({ w: 'full' })}>
    <Center>
      <VStack>
        {Object.keys(forecastGroupedByDate).sort().map(forecastGroupDay => {
          return <ForecastsGroupedByDay date={new Date(forecastGroupDay)} forecasts={forecastGroupedByDate[forecastGroupDay]} />
        })}
      </VStack>
    </Center> 
  </div>
  )
}