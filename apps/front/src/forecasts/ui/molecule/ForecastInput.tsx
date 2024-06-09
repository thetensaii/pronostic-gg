import { HStack } from "styled-system/jsx"
import { Team } from "../atom/Team"
import { PinInput } from "~/components/ui/pin-input"
import { css } from "styled-system/css"

type Props = {
  dateTime: Date,
  teams: [string, string],
  score: [number, number] | null
  disabledScoreInput?: boolean,
}

export const ForecastInput = ({ dateTime, teams, score, disabledScoreInput }: Props) => {
  return (
    <HStack alignItems='end'>
      <Team name={teams[0]} />
      <HStack>
        <PinInput value={score ? [`${score[0]}`, `${score[1]}`] : undefined}  length={2} disabled={disabledScoreInput} onValueChange={(value) => console.log(value)} onValueInvalid={(value) => console.log(value)} pattern={"^[0-1]$"}>
          <div className={css({ mx: ['auto']})}>{dateTime.toLocaleTimeString([],  { hour: "2-digit", minute: "2-digit" })}</div>
        </PinInput>
      </HStack>
      <Team name={teams[1]} />
    </HStack>
  )
}