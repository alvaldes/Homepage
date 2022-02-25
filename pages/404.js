import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Image,
  Center,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container maxWidth="container.md">
      <Center mx={{ base: '6em', sm: '0' }}>
        <Box
          boxSize={{ base: '10em', md: '22em' }}
          display="flex"
          sx={{ alignItems: 'center', justifyContent: 'center' }}
        >
          <Image
            src="../images/404.svg"
            alt="404 PAGE NOT FOUND"
            w={{ base: '4em', md: '15em' }}
          />
          <Image src="../images/banner.svg" alt="404 PAGE NOT FOUND" />
          <Image
            src="../images/404.svg"
            alt="404 PAGE NOT FOUND"
            w={{ base: '4.2em', md: '15.2em' }}
          />
        </Box>
      </Center>
      <Heading as="h1">Page Not Found</Heading>
      <Text>The page you're looking for was not found.</Text>
      <Divider my={6} />

      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">Return to home</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
