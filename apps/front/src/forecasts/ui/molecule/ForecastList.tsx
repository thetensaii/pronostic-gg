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
      {forecasts.map((f) => <ForecastInput teamA={{name: f.teams[0]}} teamB={{name: f.teams[1]}} dateTime={f.startAt} />)}
    </VStack>
  )
}