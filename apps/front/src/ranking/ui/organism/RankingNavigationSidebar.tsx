import { Stack } from "styled-system/jsx"
import { useGetCompetitions } from "~/common/hooks/UseGetCompetitions"
import { VerticalLinkGroup } from "~/components/molecule/VerticalLinkGroup"
import { useGetJoinedCompetitionLeagues } from "~/ranking/hooks/UseGetJoinedCompetitionLeagues"

type Props = {
  currentCompetitionSlug: string
}

export const RankingNavigationSidebar = ({currentCompetitionSlug}: Props) => {
  const competitions = useGetCompetitions()
  const joinedCompetitionsLeagues = useGetJoinedCompetitionLeagues(currentCompetitionSlug)

  return (
    <Stack gap='16'>
      <VerticalLinkGroup links={competitions.map((c) => ({ name: c.name, to: `/classement/${c.slug}`}))} />
      <VerticalLinkGroup links={joinedCompetitionsLeagues.map((l) => ({ name: l.name, to: `/classement/${currentCompetitionSlug}/${l.code}` }))} />
    </Stack>
  )
}
