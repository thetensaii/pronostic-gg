import { HStack } from "styled-system/jsx"
import { Team } from "../atom/Team"
import { PinInput } from "~/components/ui/pin-input"
import { css } from "styled-system/css"

type Props = {
  time: Date,
  teamA: Team,
  teamB: Team,

}

export const Game = ({ time, teamA, teamB }: Props) => {
  return (
    <HStack alignItems='end'>
      <Team name={teamA.name} />
      <HStack>
        <PinInput length={2} onValueChange={(value) => console.log(value)} onValueInvalid={(value) => console.log(value)} pattern={"^[0-5]$"}>
          <div className={css({ mx: ['auto']})}>{time.toLocaleTimeString([],  { hour: "2-digit", minute: "2-digit" })} / BO1</div>
        </PinInput>
      </HStack>
      <Team name={teamB.name} />
    </HStack>
  )
}