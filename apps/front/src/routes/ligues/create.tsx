import { createFileRoute } from '@tanstack/react-router'
import { css } from 'styled-system/css'
import { Container, VStack } from 'styled-system/jsx'
import { FormLabel } from '~/components/ui/form-label'
import { Input } from '~/components/ui/input'
import { Button } from '~/components/ui/button'
import { Dropdown } from '~/components/atom/Dropdown'

export const Route = createFileRoute('/ligues/create')({
  component: () => 
    <Container maxWidth='6xl'  className={css({ pt: '8', lg : { display : 'flex', gap: '32' } })}>
      <VStack gap="6">
        <VStack w="full" alignItems="start">
          <FormLabel htmlFor="league-name">Comment veux-tu appeler ta ligue ?</FormLabel>
          <Input id="league-name" placeholder='Nom de la ligue'/>
        </VStack>

        <Dropdown 
          label="Sur quelle compétition veux-tu faire ta ligue ?"
          placeholder="Compétitions"
          options={competitionsList}
        />

        <Button>Créer la ligue</Button>
      </VStack>
    </Container>
})

const competitionsList =  [
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