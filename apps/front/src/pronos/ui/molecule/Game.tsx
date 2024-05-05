import { HStack } from "styled-system/jsx"
import { Team } from "../atom/Team"
import { PinInput } from "~/components/ui/pin-input"
import { css } from "styled-system/css"

type Props = {
  dateTime: Date,
  teamA: Team,
  teamB: Team,
  disabledScoreInput?: boolean,
  teamAScore?: number,
  teamBScore?: number,
}

export const Game = ({ dateTime, teamA, teamB, teamAScore, teamBScore, disabledScoreInput }: Props) => {
  const isScoreDefined = teamAScore != null && teamBScore != null
  return (
    <HStack alignItems='end'>
      <Team name={teamA.name} />
      <HStack>
        <PinInput value={isScoreDefined ? [`${teamAScore}`, `${teamBScore}`] : undefined}  length={2} disabled={disabledScoreInput} onValueChange={(value) => console.log(value)} onValueInvalid={(value) => console.log(value)} pattern={"^[0-1]$"}>
          <div className={css({ mx: ['auto']})}>{dateTime.toLocaleTimeString([],  { hour: "2-digit", minute: "2-digit" })} / BO1</div>
        </PinInput>
      </HStack>
      <Team name={teamB.name} />
    </HStack>
  )
}