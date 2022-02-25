import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar.js'

const Main = ({ children, router }) => {
  const d = new Date()
  const year = d.getFullYear()
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Angel Valdés - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.lg" pt={14}>
        {children}
      </Container>
      <Container align="center">
        <Box as="span" color="gray.500">
          &copy; {year} Angel Valdés. All Rights Reserved.
        </Box>
      </Container>
    </Box>
  )
}

export default Main
