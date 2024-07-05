import { Button } from "~/components/ui/button"
import { Environment } from "~/environment"

export const Login = () => {
  return(
    <form action={`${Environment.VITE_BACKEND_URL}/auth/google/redirect`}>
      <Button type='submit'>Se connecter avec Google</Button>
    </form>
  ) 
}