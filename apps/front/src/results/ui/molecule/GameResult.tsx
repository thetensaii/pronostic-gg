import { HStack } from "styled-system/jsx"
import { Icon } from "~/components/ui/icon"
import { Team } from "~/pronos/ui/atom/Team"
import { Score } from "~/results/ui/atom/Score"
import {Check, X} from 'lucide-react'

type Props = {
  dateTime: Date,
  teamA: Team,
  teamB: Team,
  teamAScore: number,
  teamBScore: number,
  isPronoGood: boolean,
}

export const GameResult = ({ teamA, teamB, teamAScore, teamBScore, isPronoGood }: Props) => {
  return (
    <HStack gap="4">
      <Team name={teamA.name} />
      <Score value={teamAScore} />
      <Score value={teamBScore} />
      <Team name={teamB.name} />
      <Icon size="xl" color={isPronoGood ? "green" : "red"}>
        {isPronoGood ? <Check /> : <X />}
      </Icon>
    </HStack>
  )
}