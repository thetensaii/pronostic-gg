import { VStack } from 'styled-system/jsx'
import { Text } from "~/components/ui/text"
import { ResultList } from "~/results/ui/molecule/ResultList"
import { ForecastResult } from '../orgasnism/Results'

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