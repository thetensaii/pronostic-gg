import { Stack } from "styled-system/jsx"
import { CompetitionLink } from "../atom/CompetitionLink"

export const PronosNavigationSidebar = () => {
  return (
    <Stack>
      <CompetitionLink to='/pronos/lfl'>LFL</CompetitionLink>
      <CompetitionLink to='/pronos/lec'>LEC</CompetitionLink>
      <CompetitionLink to='/pronos/vct-emea'>VCT EMEA</CompetitionLink>
      <CompetitionLink to='/pronos/vlr-france'>VLR France</CompetitionLink>
    </Stack>
  )
}