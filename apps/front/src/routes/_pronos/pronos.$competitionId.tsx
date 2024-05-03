import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_pronos/pronos/$competitionId')({
  component: () => <div>Hello /pronos/$competitionId!</div>
})