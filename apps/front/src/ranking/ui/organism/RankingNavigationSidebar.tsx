import { css } from "styled-system/css"
import { Stack } from "styled-system/jsx"
import { CompetitionLink } from "~/pronos/ui/atom/CompetitionLink"

type Props = {
  currentCompetitionSlug: string
}

export const RankingNavigationSidebar = ({currentCompetitionSlug}: Props) => {

  return (
    <Stack gap='16'>
      <Stack gap='4' className={css({ w: 'max-content'})}>
        <CompetitionLink to='/classement/lfl'>LFL</CompetitionLink>
        <CompetitionLink to='/classement/lec'>LEC</CompetitionLink>
        <CompetitionLink to='/classement/vct-emea'>VCT EMEA</CompetitionLink>
        <CompetitionLink to='/classement/vlr-france'>VLR France</CompetitionLink>
      </Stack>

      <Stack gap='4' className={css({ w: 'max-content'})}>
        <CompetitionLink to={`/classement/${currentCompetitionSlug}/main`}>Global</CompetitionLink>
        <CompetitionLink to={`/classement/${currentCompetitionSlug}/copains`}>Copains</CompetitionLink>
        <CompetitionLink to={`/classement/${currentCompetitionSlug}/zamis`}>Les Zamis</CompetitionLink>
      </Stack>
    </Stack>
  )
}