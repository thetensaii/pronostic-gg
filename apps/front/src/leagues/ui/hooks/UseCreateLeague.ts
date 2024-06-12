import { useMutation } from "@tanstack/react-query"
import { USER_ID } from "~/common/userId"
import { Environment } from "~/environment"
type CreateLeagueMutationProps = {
  name: string,
  competitionId:string
}

type CreateLeagueHookProps = {
  onSuccess: () => void
}

export const useCreateLeague = ({ onSuccess } : CreateLeagueHookProps) => {
  const mutation = useMutation({ 
    mutationFn: async ({name, competitionId}:CreateLeagueMutationProps) => {
      const url = new URL(`${Environment.VITE_BACKEND_URL}/leagues`)

      const response = await fetch(url.toString(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          owner_id: USER_ID,
          name,
          competition_id: competitionId
        })
      })

      if(!response.ok) {
        throw await response.json()
      }
    },
    onSuccess: () => {
      onSuccess()
    }
  })

  const createLeague = (props: CreateLeagueMutationProps) => {
    mutation.mutate(props)
  }

  return {
    createLeague,
    isSuccess: mutation.isSuccess,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    errorMessage : mutation.error?.message
  }
}