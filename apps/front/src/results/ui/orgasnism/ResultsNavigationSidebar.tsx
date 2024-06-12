import { useGetCompetitions } from "~/common/hooks/UseGetCompetitions"
import { VerticalLinkGroup } from "~/components/molecule/VerticalLinkGroup"

export const ResultsNavigationSidebar = () => {
  const competitions = useGetCompetitions()

  return (
    <VerticalLinkGroup links={competitions.map((c) => ({ name: c.name, to: `/resultats/${c.slug}`}))} />
  )
}
