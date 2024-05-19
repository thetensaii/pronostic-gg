import { createFileRoute } from '@tanstack/react-router'
import { Container, Box, HStack, VStack } from 'styled-system/jsx'
import { Text } from '~/components/ui/text'
import { Dropdown } from '~/components/atom/Dropdown'
import { GameResult } from '~/results/ui/molecule/GameResult'

export const Route = createFileRoute('/profil/')({
  component: () => {
    return (
      <Container maxWidth="3xl" marginTop="12" >
        <Box borderWidth="initial">
          <Text size="3xl" fontWeight="semibold" textAlign="center">Jordan</Text>
          <Box borderWidth="initial" paddingX="6">
            <HStack justify="space-between">
              <Text>Mes pronos</Text>
              <Box>
                <Dropdown
                  placeholder="Compétitions"
                  options={competitionsList}
                />
              </Box>
            </HStack>
            <VStack gap='6' marginTop="4">
              <GameResult isPronoGood={true} teamA={{name: "Équipe A"}} teamAScore={1} teamB={{name: "Équipe B"}} teamBScore={0} />
              <GameResult isPronoGood={false} teamA={{name: "Équipe C"}} teamAScore={0} teamB={{name: "Équipe D"}} teamBScore={1} />
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