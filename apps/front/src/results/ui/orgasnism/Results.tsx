import { css } from 'styled-system/css'
import { Center } from 'styled-system/jsx'
import { ResultsGroupByDate } from '../molecule/ResultsGroupByDay'
import { ForecastResult } from '~/results/services/FindForecastsResults'


type Props = {
  forecastsResults: ForecastResult[]
}

export const Results = ({ forecastsResults }: Props) => {
  const resultsGroupedByDate = forecastsResults.reduce<Record<string, ForecastResult[]>>((acc, currentResult)  => {
    const currentDateString = currentResult.startAt.toISOString().split('T')[0]

    if(acc[currentDateString]){
      acc[currentDateString].push(currentResult)
    } else {
      acc[currentDateString] = [currentResult]
    }

    return acc
  }, {})

  return (
    <div className={css({ w: 'full'})}>
      <Center>
        {Object.keys(resultsGroupedByDate).sort().map(resultsGroupedByDateString => {
          return <ResultsGroupByDate key={resultsGroupedByDateString} date={new Date(resultsGroupedByDateString)} results={resultsGroupedByDate[resultsGroupedByDateString]} />
        })}
      </Center> 
    </div>
  )
}