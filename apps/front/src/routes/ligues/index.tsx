import { createFileRoute } from '@tanstack/react-router'
import { css } from 'styled-system/css'
import { Container, VStack } from 'styled-system/jsx'
import { Leagues } from '~/leagues/ui/organism/Leagues'

export const Route = createFileRoute('/ligues/')({
  component: () => 
    <Container maxWidth='6xl' className={css({ pt: '8', lg : { display : 'flex', gap: '32' } })}>
      <VStack w="full">
        <Leagues />
      </VStack>
    </Container>
})