import { css } from 'styled-system/css'
import { Center } from 'styled-system/jsx'
import { useGetForecastsResults } from '../hooks/UseGetForecastsResults'
import { ResultsGroupByDate } from '../molecule/ResultsGroupByDay'

export type ForecastResult = {
  matchId: string,
  startAt: Date,
  teams: [string, string],
  score: [number, number],
  isForecastGood: boolean
}
type Props = {
  competitionSlug: string
}

export const Results = ({ competitionSlug }: Props) => {
  const forecastsResults = useGetForecastsResults(competitionSlug)
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