import { Stack } from "styled-system/jsx"
import { useGetSidebarCompetitions } from "~/common/hooks/UseGetCompetitions"
import { VerticalLinkGroup } from "~/components/molecule/VerticalLinkGroup"

type Props = {
  currentCompetitionSlug: string
}

export const RankingNavigationSidebar = ({currentCompetitionSlug}: Props) => {
  const competitions = useGetSidebarCompetitions()

  const leaguesLinks = [
    {
      name: "Global",
      to: `/classement/${currentCompetitionSlug}/main`
    },
    {
      name: "Copains",
      to: `/classement/${currentCompetitionSlug}/copains`
    },
    {
      name: "Les Zamis",
      to: `/classement/${currentCompetitionSlug}/zamis`
    },
  ]

  return (
    <Stack gap='16'>
      <VerticalLinkGroup links={competitions.map((c) => ({ name: c.name, to: `/classement/${c.slug}`}))} />
      <VerticalLinkGroup links={leaguesLinks} />
    </Stack>
  )
}
