import { Controller, useForm } from "react-hook-form"
import { VStack } from "styled-system/jsx"
import { Dropdown } from "~/components/atom/Dropdown"
import { Button } from "~/components/ui/button"
import { FormLabel } from "~/components/ui/form-label"
import { Input } from "~/components/ui/input"

type Competition = {
  id: string,
  name: string
}

type OnSubmitProps = {
  name: string,
  competition: string
}
type Props = {
  competitions: Competition[],
  onSubmit: (props: OnSubmitProps) => void,
  isLoading: boolean
}

type FormValues = {
  name: string,
  competition: string
}

export const CreateLeagueForm = ({ competitions, onSubmit, isLoading }: Props) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      name: '',
      competition: ''
    }
  })

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
      <VStack gap="6">
        <VStack css={{ w: 'full', alignItems: 'start'}}>
          <FormLabel htmlFor="name">Comment veux-tu appeler ta ligue ?</FormLabel>
          <Controller
            name="name"
            control={control}
            render={({ field }) => <Input {...field} id="name" placeholder='Nom de la ligue' />}
          />
        </VStack>

        <Controller
          name="competition"
          control={control}
          render={({ field }) => (
            <Dropdown 
              {...field}
              label="Sur quelle compétition veux-tu faire ta ligue ?"
              placeholder="Compétitions"
              options={competitions.map((c) => ({ label: c.name, value: c.id }))}
            />
          )}
        />

        <Button type="submit" disabled={isLoading}>Créer la ligue</Button>
      </VStack>
    </form>
  )
}