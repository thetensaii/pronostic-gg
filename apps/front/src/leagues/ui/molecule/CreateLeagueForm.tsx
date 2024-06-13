import { Controller, useForm } from "react-hook-form"
import { VStack } from "styled-system/jsx"
import { Dropdown } from "~/components/atom/Dropdown"
import { Button } from "~/components/ui/button"
import { FormLabel } from "~/components/ui/form-label"
import { Input } from "~/components/ui/input"
import { useCreateLeague } from "../hooks/UseCreateLeague"

type Competition = {
  id: string,
  name: string
}

type Props = {
  competitions: Competition[],
  onCreateSuccess: () => void
}

type FormValues = {
  name: string,
  competition: string
}

export const CreateLeagueForm = ({ competitions, onCreateSuccess }: Props) => {
  const { createLeague, isLoading } = useCreateLeague({ onSuccess: onCreateSuccess})
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      name: '',
      competition: ''
    }
  })

  
  const onSubmit = (data:FormValues) => {
    createLeague({
      name: data.name,
      competitionId: data.competition
    })
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack gap="6">
        <VStack w="full" alignItems="start">
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