import { HStack } from "styled-system/jsx"
import { Icon } from "~/components/ui/icon"
import { Team } from "~/forecasts/ui/atom/Team"
import { Score } from "~/results/ui/atom/Score"
import {Check, X} from 'lucide-react'
import { ForecastResult } from "../orgasnism/Results"

type Props = {
  result: ForecastResult,
}

export const MatchResult = ({ result }: Props) => {
  return (
    <HStack gap="4">
      <Team name={result.teams[0]} />
      <Score value={result.score[0]} />
      <Score value={result.score[1]} />
      <Team name={result.teams[1]} />
      <Icon size="xl" color={result.isForecastGood ? "green" : "red"}>
        {result.isForecastGood ? <Check /> : <X />}
      </Icon>
    </HStack>
  )
}