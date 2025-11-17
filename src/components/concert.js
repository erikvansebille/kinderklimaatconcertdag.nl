import {
  Box,
  Container,
  Text,
} from '@chakra-ui/react'
import React from 'react'

import { Heading } from '@/components/mdx'

export const Concert = () => {
  return (
    <Box id={'concert'} as='section'>
      <Container maxW='container.lg' centerContent>
        <Heading as='h1' size='2xl'>
          Zondag 27 september 2026
        </Heading>
        <Text fontSize={'lg'}>
          Op zondag 27 september 2026 organiseren we de eerste Kinder Klimaat Concert Dag in TivoliVredenburg in Utrecht.
        </Text>

      </Container>
    </Box>
  )
}
