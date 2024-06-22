import { VStack } from "styled-system/jsx"
import { ForecastForm } from "./ForecastForm"
import { Forecast } from "../organism/ForecastsMain"

type Props = {
  forecasts: Forecast[]
}

export const ForecastList = ({ forecasts }: Props) => {
  return (
    <VStack gap='6'>
      {forecasts.map((f) => <ForecastForm key={f.teams.join('-')} forecast={f} />)}
    </VStack>
  )
}