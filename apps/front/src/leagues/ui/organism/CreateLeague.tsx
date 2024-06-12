import { css } from "styled-system/css"
import { Container } from "styled-system/jsx"
import { useGetCompetitions } from "~/common/hooks/UseGetCompetitions"
import { CreaLeagueForm } from "../molecule/CreateLeagueForm"
import { useNavigate } from "@tanstack/react-router"

export const CreateLeague = ( ) => {
  const competitions = useGetCompetitions()
  const navigate = useNavigate()

  const onCreateSuccess = () => {
    navigate({ to: '/ligues'})
  }

  return (
    <Container maxWidth='6xl'  className={css({ pt: '8', lg : { display : 'flex', gap: '32' } })}>
      <CreaLeagueForm competitions={competitions} onCreateSuccess={onCreateSuccess} />
    </Container>
  )
}