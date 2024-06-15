import { VStack } from "styled-system/jsx"
import { ForecastResult } from "../orgasnism/Results"
import { MatchResult } from "./MatchResult"


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