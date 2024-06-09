import { VStack } from "styled-system/jsx"
import { ForecastInput } from "./ForecastInput"

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
      {forecasts.map((f) => <ForecastInput key={f.teams.join('-')} dateTime={f.startAt} teams={f.teams} score={f.score} />)}
    </VStack>
  )
}