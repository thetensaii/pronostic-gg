import { createFileRoute } from '@tanstack/react-router'
import { SignUp } from '~/auth/ui/SignUp'

export const Route = createFileRoute('/(auth)/signup')({
  component: SignUp
})