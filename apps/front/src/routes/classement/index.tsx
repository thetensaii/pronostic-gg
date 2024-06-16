import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/classement/')({
  beforeLoad: () => {
    throw redirect({ to: '/classement/$competitionSlug', params: {
      competitionSlug: 'lfl',
    }})
  }
})