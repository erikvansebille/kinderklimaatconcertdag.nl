import { Layout } from '@/components/layout'
import { Image, Link } from '@/components/mdx'
import { TeamMember } from '@/components/team-member'
import { OprichterTeamMember, BestuurTeamMembers, OverigTeamMembers } from '@/data/team-members'
import { Box, Container, Heading, SimpleGrid, Text } from '@chakra-ui/react'

const UtrechtTeam = () => {
  return (
    <Layout
      title={'Bestuur'}
      card={
        'https://raw.githubusercontent.com/OceanParcels/oceanparcels_website/main/public/parcels-assets/logo-no-text.png'
      }
      url={`/bestuur`}
    >
      <Box as='section' py={20}>
        <Container maxW='container.lg'>
          <Heading as='h1' size='2xl' textAlign={'center'}>
            De Stichting KinderKlimaatConcertDag
          </Heading>

          <Box py={4}>
            <Text>
              De Stichting KinderKlimaatConcertDag is ...
            </Text>
          </Box>

          <Heading as='h2' size='xl' textAlign={'center'} mt={8} mb={4}>
            Oprichters
          </Heading>

          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 2, xl: 2, '2xl': 3 }}
            spacing={8}
            my={4}
            align={'left'}
          >
            {OprichterTeamMember.sort((a, b) => {
              const getLastName = (name) => name.split(' ').slice(-1)[0]
              return getLastName(a.name).localeCompare(getLastName(b.name))
            }).map((member) => (
              <TeamMember key={member.name} member={member} />
            ))}
          </SimpleGrid>

          <Heading as='h2' size='xl' textAlign={'center'} mt={8} mb={4}>
            Bestuur
          </Heading>

          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 2, xl: 2, '2xl': 3 }}
            spacing={8}
            my={4}
            align={'left'}
          >
            {BestuurTeamMembers.sort((a, b) => {
              const getLastName = (name) => name.split(' ').slice(-1)[0]
              return getLastName(a.name).localeCompare(getLastName(b.name))
            }).map((member) => (
              <TeamMember key={member.name} member={member} />
            ))}
          </SimpleGrid>

          <Heading as='h2' size='xl' textAlign={'center'} mt={8} mb={4}>
            Adviseurs
          </Heading>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 2, xl: 2, '2xl': 3 }}
            spacing={8}
            my={4}
            align={'left'}
          >
            {OverigTeamMembers.map((member) => (
              <TeamMember key={member.name} member={member} />
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Layout>
  )
}

export default UtrechtTeam
