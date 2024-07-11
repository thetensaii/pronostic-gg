import { VStack } from 'styled-system/jsx'
import { Text } from "~/components/ui/text"
import { ForecastResult } from '~/results/services/FindForecastsResults'
import { ResultList } from "~/results/ui/molecule/ResultList"

type Props = {
  date: Date
  results: ForecastResult[]
}

export const ResultsGroupByDate = ({date, results }: Props) => {

  return (
    <VStack>
      <Text as="p">
        {(date.toLocaleDateString('fr-FR', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }))}    
      </Text>
      <ResultList results={results} />
    </VStack>
  )
}