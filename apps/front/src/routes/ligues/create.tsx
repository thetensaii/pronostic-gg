import { createFileRoute } from '@tanstack/react-router'
import { CreateLeague } from '~/leagues/ui/organism/CreateLeague'

export const Route = createFileRoute('/ligues/create')({
  component: () => <CreateLeague />
})
