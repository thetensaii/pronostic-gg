import { HStack } from "styled-system/jsx"
import { CircleCheckIcon } from "../atom/CircleCheckIcon"
import { ForecastInput } from "./ForecastInput"
import { CircleXIcon } from "../atom/CircleXIcon"
import { LoaderIcon } from "../atom/LoaderIcon"
import { useSaveForecast } from "../hooks/useSaveForecast"
import { useState } from "react"
import { Forecast } from "../organism/ForecastsMain"
import { LockKeyholeIcon } from "../atom/LockKeyholeIcon"

type Props = {
  forecast: Forecast,
}
export const ForecastForm = ({ forecast }: Props) => {
  const { teams, score, startAt, matchId, canChange } = forecast
  const { save, isSuccess, isLoading, isError, errorMessage } = useSaveForecast(matchId)
  const [wasSaved, setWasSaved] = useState(!!score)
  const ForecastStatusFn = () => {
    if(!canChange) return <LockKeyholeIcon />
    if(wasSaved || isSuccess) return <CircleCheckIcon />
    if(isError) return <div><CircleXIcon /><div>{errorMessage}</div></div>
    if(isLoading) return <LoaderIcon />

    return <></>
  }

  const ForecastStatus = ForecastStatusFn()

  const handleChange = (score: [number, number]) => {
    setWasSaved(false)
    save(score)
  }

  return (
    <HStack css={{ gap: '2', alignItems: 'center' }}>
      <ForecastInput  dateTime={startAt} teams={teams} score={score} onChange={handleChange} disabledScoreInput={!canChange} />
      {ForecastStatus}
    </HStack>
  )
}

