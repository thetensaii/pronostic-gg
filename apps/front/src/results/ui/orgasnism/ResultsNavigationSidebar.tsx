import { Stack } from "styled-system/jsx"
import { CompetitionLink } from '~/pronos/ui/atom/CompetitionLink'

export const ResultsNavigationSidebar = () => {
  return (
    <Stack gap='4'>
      <CompetitionLink to='/resultats/lfl'>LFL</CompetitionLink>
      <CompetitionLink to='/resultats/lec'>LEC</CompetitionLink>
      <CompetitionLink to='/resultats/vct-emea'>VCT EMEA</CompetitionLink>
      <CompetitionLink to='/resultats/vlr-france'>VLR France</CompetitionLink>
    </Stack>
  )
}