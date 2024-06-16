import { HStack } from "styled-system/jsx"
import { Team } from "../atom/Team"
import { PinInput } from "~/components/ui/pin-input"
import { css } from "styled-system/css"

type Props = {
  dateTime: Date,
  teams: [string, string],
  score: [number, number] | null
  disabledScoreInput?: boolean,
  onChange: (score: [number, number]) => void
}

export const ForecastInput = ({ dateTime, teams, score, disabledScoreInput, onChange }: Props) => {

  return (
    <HStack css={{ alignItems: 'end'}}>
      <Team name={teams[0]} />
      <HStack>
        <PinInput 
          defaultValue={score ? [`${score[0]}`, `${score[1]}`] : undefined}  
          length={2} 
          disabled={disabledScoreInput} 
          onValueComplete={(details) => onChange([Number(details.value[0]), Number(details.value[1])])}
          pattern={"^[0-1]$"}
        >
          <div className={css({ mx: ['auto']})}>{dateTime.toLocaleTimeString([],  { hour: "2-digit", minute: "2-digit" })}</div>
        </PinInput>
      </HStack>
      <Team name={teams[1]} />
    </HStack>
  )
}