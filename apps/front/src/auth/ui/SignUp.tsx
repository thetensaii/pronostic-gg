import { Button } from "~/components/ui/button"
import { Environment } from "~/environment"

export const SignUp = () => {
  return(
    <form action={`${Environment.VITE_BACKEND_URL}/auth/google/redirect`}>
      <Button type='submit'>S'inscrire avec Google</Button>
    </form>
  ) 
}