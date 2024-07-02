import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/classement/')({
  beforeLoad: () => {
    throw redirect({ to: '/classement/$competitionSlug', params: {
      competitionSlug: 'lfl',
    }})
  }
})