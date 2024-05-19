import { createFileRoute } from '@tanstack/react-router'
import { css } from 'styled-system/css'
import { Container, VStack } from 'styled-system/jsx'
import { FormLabel } from '~/components/ui/form-label'
import { Input } from '~/components/ui/input'
import * as Combobox from '~/components/ui/combobox'
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react'
import { IconButton } from '~/components/ui/icon-button'
import { Button } from '~/components/ui/button'

export const Route = createFileRoute('/ligues/create')({
  component: () => 
    <Container maxWidth='6xl'  className={css({ pt: '8', lg : { display : 'flex', gap: '32' } })}>
      <VStack gap="6">
        <VStack w="full" alignItems="start">
          <FormLabel htmlFor="league-name">Comment veux-tu appeler ta ligue ?</FormLabel>
          <Input id="league-name" placeholder='Nom de la ligue'/>
        </VStack>

        <Combobox.Root items={teamsOptions}>
          <Combobox.Label>Sur quelle compétition veux-tu faire ta ligue ?</Combobox.Label>
          <Combobox.Control>
            <Combobox.Input placeholder="Compétition" asChild>
              <Input />
            </Combobox.Input>
            <Combobox.Trigger asChild>
              <IconButton variant="link" aria-label="open" size="xs">
                <ChevronsUpDownIcon />
              </IconButton>
            </Combobox.Trigger>
          </Combobox.Control>
          <Combobox.Positioner>
            <Combobox.Content>
              <Combobox.ItemGroup id="framework">
                <Combobox.ItemGroupLabel htmlFor="framework">Compétitions</Combobox.ItemGroupLabel>
                  {teamsOptions.map((item) => (
                    <Combobox.Item key={item.value} item={item}>
                      <Combobox.ItemText>{item.label}</Combobox.ItemText>
                      <Combobox.ItemIndicator>
                        <CheckIcon />
                      </Combobox.ItemIndicator>
                    </Combobox.Item>
                  ))}
              </Combobox.ItemGroup>
            </Combobox.Content>
          </Combobox.Positioner>
        </Combobox.Root>

        <Button>Créer la ligue</Button>
      </VStack>
    </Container>
})

const teamsOptions = [
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