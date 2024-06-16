import { Controller, useForm } from "react-hook-form"
import { css } from "styled-system/css"
import { HStack, VStack } from "styled-system/jsx"
import { Button } from "~/components/ui/button"
import { FormLabel } from "~/components/ui/form-label"
import { Input } from "~/components/ui/input"
import { Text } from "~/components/ui/text"

type FormValues = {
  leagueCode: string,
}

type Props = {
  onSubmit: (leagueCode: string) => void,
  isLoading: boolean,
  errorMessage?: string
}
export const JoinLeagueForm = ({ onSubmit, isLoading, errorMessage }: Props) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      leagueCode: '',
    }
  })
  
  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data.leagueCode))} className={css({w: 'full'})}>
      <HStack css={{ w: '8/12', alignItems: 'end', justifyItems: 'between'}}>
        <VStack css={{ w: 'full', alignItems: 'start'}}>
          <FormLabel htmlFor="leagueCode">Pour rejoindre une ligue, rentre ton code ici :</FormLabel>
          <Controller
            name="leagueCode"
            control={control}
            render={({ field }) => <Input {...field} id="leagueCode" placeholder='Code de ligue' />}
            />
        </VStack>
        <Button type='submit' disabled={isLoading}>Valider</Button>
      </HStack>
      {errorMessage ? <Text color="red.600" size='sm'>{errorMessage}</Text> : <></>}
    </form>
  )
}