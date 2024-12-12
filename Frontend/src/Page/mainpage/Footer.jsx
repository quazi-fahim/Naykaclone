import { Box, Container, Stack,Text} from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box mt={"60px"}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Stack direction={'row'} spacing={6}>
          <Box as="a" href={'#'}>
            Home
          </Box>
          <Box as="a" href={'#'}>
            About
          </Box>
          <Box as="a" href={'#'}>
            Blog
          </Box>
          <Box as="a" href={'#'}>
            Contact
          </Box>
        </Stack>
        <Text>© 2022 Chakra Templates. All rights reserved</Text>
      </Container>
    </Box>
  )
}

export default Footer