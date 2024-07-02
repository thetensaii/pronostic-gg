import { createFileRoute } from '@tanstack/react-router'
import { JoinLeague } from '~/leagues/ui/organism/JoinLeague'

export const Route = createFileRoute('/_authenticated/ligues/join')({
  component: () => <JoinLeague />
    
})