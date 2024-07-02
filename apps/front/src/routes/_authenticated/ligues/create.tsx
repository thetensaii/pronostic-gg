import { createFileRoute } from '@tanstack/react-router'
import { CreateLeague } from '~/leagues/ui/organism/CreateLeague'

export const Route = createFileRoute('/_authenticated/ligues/create')({
  component: () => <CreateLeague />
})
