import { createFileRoute } from '@tanstack/react-router'
import { JoinLeague } from '~/leagues/ui/organism/JoinLeague'

export const Route = createFileRoute('/ligues/join')({
  component: () => <JoinLeague />
    
})