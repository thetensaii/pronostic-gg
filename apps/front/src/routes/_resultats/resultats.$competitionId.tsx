import { createFileRoute } from '@tanstack/react-router'
import { css } from 'styled-system/css'
import { Center, VStack } from 'styled-system/jsx'
import { Text } from "~/components/ui/text"
import { GameResult } from '~/results/ui/molecule/GameResult'

export const Route = createFileRoute('/_resultats/resultats/$competitionId')({
  component: () => (
    <div className={css({ w: 'full'})}>
      <Center>
        <VStack>
          <Text as="p">
            {(new Date().toLocaleDateString('fr-FR', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            }))}    
          </Text>
          <VStack gap='6'>
            <GameResult isPronoGood={true} teamA={{name: "Équipe A"}} teamAScore={1} teamB={{name: "Équipe B"}} teamBScore={0} dateTime={new Date()} />
            <GameResult isPronoGood={false} teamA={{name: "Équipe C"}} teamAScore={0} teamB={{name: "Équipe D"}} teamBScore={1} dateTime={new Date()} />
          </VStack>
        </VStack>
      </Center> 
    </div>
  )
})