import { css } from "styled-system/css"
import { Center, VStack } from "styled-system/jsx"
import { ForecastsGroupedByDay } from "../molecule/ForecastsGroupByDay"
import { NextForecast } from "~/forecasts/services/findNextForecasts"

export type Forecast = {
  matchId: string,
  startAt: Date,
  teams: [string, string],
  score: [number, number] | null,
  canChange: boolean
}

type Props = {
  nextForecasts: NextForecast[]
}

const canForecastBeChanged = (nextForecast: NextForecast): boolean => {
  const ONE_HOUR_IN_MS = 60 * 60 * 1_000
  const currentDate = new Date()
  const timeLeft = nextForecast.startAt.getTime() - currentDate.getTime()

  return timeLeft > ONE_HOUR_IN_MS

}
export const ForecastsMain = ({ nextForecasts }: Props) => {
  const forecasts = nextForecasts.map<Forecast>((nf) => ({...nf, canChange: canForecastBeChanged(nf) }))
  const forecastGroupedByDate = forecasts.reduce<Record<string, Forecast[]>>((acc, currentForecast)  => {
    const currentDateString = new Intl.DateTimeFormat('fr-FR').format(currentForecast.startAt)

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
        {Object.keys(forecastGroupedByDate).sort().map(forecastGroupDayString => {
          return <ForecastsGroupedByDay key={forecastGroupDayString} forecasts={forecastGroupedByDate[forecastGroupDayString]} />
        })}
      </VStack>
    </Center> 
  </div>
  )
}