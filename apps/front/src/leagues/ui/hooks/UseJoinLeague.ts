import { useMutation } from "@tanstack/react-query"
import { Environment } from "~/environment"
type JoinLeagueMutationProps = {
  leagueCode: string
}

type JoinLeagueHookProps = {
  onSuccess: () => void
}

export const useJoinLeague = ({ onSuccess } : JoinLeagueHookProps) => {
  const mutation = useMutation({ 
    mutationFn: async ({leagueCode}:JoinLeagueMutationProps) => {
      const url = new URL(`${Environment.VITE_PUBLIC_BACKEND_URL}/leagues/join`)

      const response = await fetch(url.toString(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
          league_code: leagueCode
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

  const joinLeague = (props: JoinLeagueMutationProps) => {
    mutation.mutate(props)
  }

  return {
    joinLeague,
    isSuccess: mutation.isSuccess,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    errorMessage : mutation.error?.message
  }
}