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
            De Stichting Kinder Klimaat Concert Dag
          </Heading>

          <Box py={4}>
            <Text>

              <b>Adresgegevens</b><p></p>

              Bosuillaan 62, 3722XP Bilthoven<p></p>

              http://kinderklimaatconcertdag.nl<p></p>

              Kvk 97261734<p></p>

              RSIN / fiscaal nummer: 867975209<p></p>

              bank NL83 TRIO 0321 0861 98
            </Text>
          </Box>

          <Heading as='h2' size='xl' textAlign={'center'} mt={8} mb={4}>
            Directie en initiafiefnemers
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
            {BestuurTeamMembers.map((member) => (
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
      <Box py={4}>
        <Text>
        De statuten zijn <a href="statuten.pdf">hier</a> te downloaden. KKCD committeert zich aan de naleving van de Code Cultural Governance.

        <p></p>
        KKCD heeft de status van een culturele ANBI (Algemeen Nut Beogende Instelling) aangevraagd en verwacht deze binnenkort met terugwerkende kracht vanaf 14 mei 2025 te verkrijgen. Voor donateurs van culturele ANBI’s geldt een extra giftenaftrek. Particulieren mogen 1,25 keer het bedrag van de gift aftrekken in de aangifte inkomstenbelasting. Ondernemingen die onder de vennootschapsbelasting vallen, mogen 1,5 keer het bedrag van de gift aftrekken in de aangifte vennootschapsbelasting.

        <p></p>
        Beleidsplan: TODO

        <p></p>
        Vooralsnog ontvangt de directie maximaal 10% van de totale projectbegroting.

        <p></p>
        De bestuursleden en adviseur doen hun werk onbezoldigd. Zij krijgen desgewenst een vergoeding van de door hen gemaakte kosten.
        </Text>
      </Box>
        </Container>
      </Box>

    </Layout>
  )
}

export default UtrechtTeam
