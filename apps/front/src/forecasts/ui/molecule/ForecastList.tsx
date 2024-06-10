import { VStack } from "styled-system/jsx"
import { ForecastForm } from "./ForecastForm"

export type Forecast = {
  matchId: string,
  startAt: Date,
  teams: [string, string],
  score: [number, number] | null
}

type Props = {
  forecasts: Forecast[]
}

export const ForecastList = ({ forecasts }: Props) => {
  return (
    <VStack gap='6'>
      {forecasts.map((f) => <ForecastForm key={f.teams.join('-')} forecast={f} />)}
    </VStack>
  )
}