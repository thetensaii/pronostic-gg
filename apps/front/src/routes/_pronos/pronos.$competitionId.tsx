import { createFileRoute } from '@tanstack/react-router'
import { css } from 'styled-system/css'
import { Center, VStack } from 'styled-system/jsx'
import { Game } from '~/pronos/ui/molecule/Game'
import { Text } from "~/components/ui/text"

export const Route = createFileRoute('/_pronos/pronos/$competitionId')({
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
            <Game teamA={{name: "Équipe A"}} teamB={{name: "Équipe B"}} time={new Date()} />
            <Game teamA={{name: "Équipe C"}} teamB={{name: "Équipe D"}} time={new Date()} />
          </VStack>
        </VStack>
      </Center> 
    </div>
  )
})