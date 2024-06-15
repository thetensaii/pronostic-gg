import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/resultats/_resultats_layout/')({
  beforeLoad: () => {
    throw redirect({ to: '/resultats/$competitionSlug', params: {
      competitionSlug: 'lfl',
    }})
  }
})