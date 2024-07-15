import { Environment } from "~/environment"

export const checkIsAuthenticated = async (): Promise<boolean> => {
  const url = new URL(`${Environment.VITE_PUBLIC_BACKEND_URL}/auth/me`)

  const response = await fetch(url.toString(), {
    credentials: 'include'
  })
  
  return response.ok
}