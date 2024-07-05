import { createFileRoute } from '@tanstack/react-router'
import { Login } from '~/auth/ui/Login'

export const Route = createFileRoute('/(auth)/login')({
  component: Login
})