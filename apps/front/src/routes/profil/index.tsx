import { createFileRoute } from '@tanstack/react-router'
import { Container, Box, HStack, VStack } from 'styled-system/jsx'
import { Text } from '~/components/ui/text'
import { Dropdown } from '~/components/atom/Dropdown'
// import { MatchResult } from '~/results/ui/molecule/MatchResult'

export const Route = createFileRoute('/profil/')({
  component: () => {
    return (
      <Container css={{ maxWidth: '3xl', marginTop: '12'}}>
        <Box css={{ borderWidth : 'initial'}}>
          <Text size="3xl" css={{ fontWeight : 'semibold', textAlign: 'center'}}>Jordan</Text>
          <Box css={{ borderWidth: 'initial', paddingX: '6'}}>
            <HStack justify="space-between">
              <Text>Mes pronos</Text>
              <Box>
                <Dropdown
                  name='competition'
                  placeholder="Compétitions"
                  options={competitionsList}
                  onChange={() => {}}
                />
              </Box>
            </HStack>
            <VStack gap='6' css={{ marginTop: '4'}}>
              {/* <MatchResult isForecastGood={true} teamA={{name: "Équipe A"}} teamAScore={1} teamB={{name: "Équipe B"}} teamBScore={0} />
              <MatchResult isForecastGood={false} teamA={{name: "Équipe C"}} teamAScore={0} teamB={{name: "Équipe D"}} teamBScore={1} /> */}
            </VStack>
          </Box>
        </Box>
      </Container>
    )
  }
})

const competitionsList = [
  {
    label: "LFL",
    value: "lfl",
  },
  {
    label: "LEC",
    value: "lec",
  },
  {
    label: "VCT EMEA",
    value: "vct-emea",
  },
  {
    label: "VLR France",
    value: "vlr-france",
  },
]