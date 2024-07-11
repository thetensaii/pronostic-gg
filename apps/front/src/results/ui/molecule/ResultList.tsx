import { VStack } from "styled-system/jsx"
import { MatchResult } from "./MatchResult"
import { ForecastResult } from "~/results/services/FindForecastsResults"


type Props = {
  results: ForecastResult[]
}

export const ResultList = ({ results }: Props) => {
  return (
    <VStack gap='6'>
      {results.map((r) => <MatchResult key={r.teams.join('-')} result={r} />)}
    </VStack>
  )
}