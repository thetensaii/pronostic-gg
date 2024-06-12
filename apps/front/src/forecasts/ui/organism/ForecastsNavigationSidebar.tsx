import { useGetCompetitions } from "~/common/hooks/UseGetCompetitions"
import { VerticalLinkGroup } from "~/components/molecule/VerticalLinkGroup"


export const ForecastsNavigationSidebar = () => {
  const competitions = useGetCompetitions()

  return (
    <VerticalLinkGroup links={competitions.map((c) => ({ name: c.name, to: `/pronos/${c.slug}` }))} />
  )
}
