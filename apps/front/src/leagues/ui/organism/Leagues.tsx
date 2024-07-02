import { Center, Grid, VStack } from "styled-system/jsx"
import { Button } from "~/components/ui/button"
import { LeagueCard } from "../molecule/LeagueCard"
import { Link } from "@tanstack/react-router"
import { useGetLeagues } from "../hooks/UseGetLeagues"

export const Leagues = () => {
  const leagues = useGetLeagues()

  return (
    <Center>
      <VStack gap="8">
        <Grid columns={3} gap="6">
          {leagues.map((league) => <LeagueCard key={league.code} name={league.name} competition={league.competitionName} numberOfMembers={league.countMembers} />)}
        </Grid>

        <VStack css={{ w: 'full' }}>
          <Button css={{ w: 'full' }} asChild>
            <Link to="/ligues/create">
              Créer une nouvelle ligue
            </Link> 
          </Button>

          <Button css={{ w: 'full' }} variant='outline' asChild>
            <Link to="/ligues/join">
              Rejoindre une ligue
            </Link>
          </Button>
        </VStack>
      </VStack>
    </Center>
  )
}