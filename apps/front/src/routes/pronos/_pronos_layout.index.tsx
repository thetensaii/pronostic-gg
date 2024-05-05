import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/pronos/_pronos_layout/')({
  beforeLoad: () => {
    throw redirect({ to: '/pronos/$competitionId', params: {
      competitionId: 'lfl',
    }})
  }
})