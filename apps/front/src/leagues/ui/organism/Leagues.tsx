import { Center, Grid, VStack } from "styled-system/jsx"
import { Button } from "~/components/ui/button"
import { League, LeagueCard } from "../molecule/LeagueCard"
import { Link } from "@tanstack/react-router"

export const Leagues = () => {

  return (
    <Center>
      <VStack gap="8">
        <Grid columns={3} gap="6">
          {leagues.map((league) => <LeagueCard {...league} />)}
        </Grid>

        <VStack w="full">
          <Button w="full" asChild>
            <Link to="/ligues/create">
              Créer une nouvelle ligue
            </Link> 
          </Button>

          <Button w="full" variant='outline' asChild>
            <Link to="/ligues/join">
              Rejoindre une ligue
            </Link>
          </Button>
        </VStack>
      </VStack>
    </Center>
  )
}


const leagues: League[] = [
  {
    name: 'Les Copains',
    competition: 'LFL',
    numberOfMembers: 3
  },
  {
    name: 'Les Zamis',
    competition: 'LFL',
    numberOfMembers: 7
  },
  {
    name: 'Les Fifous',
    competition: 'LFL',
    numberOfMembers: 15
  },
  {
    name: 'Les Foufis',
    competition: 'LFL',
    numberOfMembers: 15
  },
]