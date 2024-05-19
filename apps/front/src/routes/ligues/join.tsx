import { createFileRoute } from '@tanstack/react-router'
import { css } from 'styled-system/css'
import { Container, HStack, VStack } from 'styled-system/jsx'
import { Button } from '~/components/ui/button'
import { FormLabel } from '~/components/ui/form-label'
import { Input } from '~/components/ui/input'

export const Route = createFileRoute('/ligues/join')({
  component: () => 
    <Container maxWidth='6xl'  className={css({ pt: '8', lg : { display : 'flex', gap: '32' } })}>
      <VStack w="full" justifyItems="between">
        <HStack w="8/12" alignItems="end" justifyItems="between">
          <VStack w="full" alignItems="start">
            <FormLabel htmlFor="league-code">Pour rejoindre une ligue, rentre ton code ici :</FormLabel>
            <Input id="league-code" placeholder='Code de ligue'/>
          </VStack>
          <Button>Valider</Button>
        </HStack>
      </VStack>
    </Container>
})