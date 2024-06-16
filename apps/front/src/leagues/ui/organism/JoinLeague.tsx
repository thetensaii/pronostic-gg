import { Container } from "styled-system/jsx"
import { JoinLeagueForm } from "../molecule/JoinLeagueForm"
import { useJoinLeague } from "../hooks/UseJoinLeague"
import { useNavigate } from "@tanstack/react-router"

export const JoinLeague = () => {
  const { joinLeague, isLoading, errorMessage} = useJoinLeague({ onSuccess: onLeagueJoined})
  const hamdleSubmit = (leagueCode: string) => {
    joinLeague({ leagueCode })
  }
  const navigate = useNavigate()

  function onLeagueJoined(){
    navigate({ to: '/ligues'})
  }

  return (
    <Container css={{ maxWidth: '6xl', pt: '8', lg : { display : 'flex', gap: '32' } }}>
      <JoinLeagueForm onSubmit={hamdleSubmit} isLoading={isLoading} errorMessage={errorMessage} />
    </Container>
  )
}