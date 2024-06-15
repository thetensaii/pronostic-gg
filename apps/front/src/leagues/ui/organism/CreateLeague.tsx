import { css } from "styled-system/css"
import { Container } from "styled-system/jsx"
import { useGetCompetitions } from "~/common/hooks/UseGetCompetitions"
import { CreateLeagueForm } from "../molecule/CreateLeagueForm"
import { useNavigate } from "@tanstack/react-router"
import { useCreateLeague } from "../hooks/UseCreateLeague"

type CreateLeagueProps = {
  name: string,
  competition: string
}

export const CreateLeague = ( ) => {
  const competitions = useGetCompetitions()
  const { createLeague, isLoading } = useCreateLeague({ onSuccess: onCreateSuccess})
  const navigate = useNavigate()

  function onCreateSuccess() {
    navigate({ to: '/ligues'})
  }

  const handleSubmit = ({name, competition}: CreateLeagueProps) => {
    createLeague({name, competitionId: competition})
  }

  return (
    <Container maxWidth='6xl'  className={css({ pt: '8', lg : { display : 'flex', gap: '32' } })}>
      <CreateLeagueForm competitions={competitions} onSubmit={handleSubmit} isLoading={isLoading} />
    </Container>
  )
}