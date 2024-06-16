import { createFileRoute } from '@tanstack/react-router'
import { Container, VStack } from 'styled-system/jsx'
import { Leagues } from '~/leagues/ui/organism/Leagues'

export const Route = createFileRoute('/ligues/')({
  component: () => 
    <Container css={{ maxWidth: '6xl',pt: '8', lg : { display : 'flex', gap: '32' } }}>
      <VStack css={{ w: 'full'}}>
        <Leagues />
      </VStack>
    </Container>
})