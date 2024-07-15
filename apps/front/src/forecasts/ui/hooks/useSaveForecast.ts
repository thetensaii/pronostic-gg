import { useMutation } from "@tanstack/react-query"
import { Environment } from "~/environment"

export const useSaveForecast = (matchId: string) => {
  const mutation = useMutation({ 
    mutationFn: async ( score: [number, number]) => {
      const url = new URL(`${Environment.VITE_PUBLIC_BACKEND_URL}/forecasts`)

      const response = await fetch(url.toString(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
          match_id: matchId,
          score
        })
      })

      if(!response.ok) {
        throw await response.json()
      }
    }
  })

  const save = (score: [number, number]) => {
    mutation.mutate(score)
  }

  return {
    save,
    isSuccess: mutation.isSuccess,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    errorMessage : mutation.error?.message
  }
}