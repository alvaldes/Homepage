import { Image, Box, Center } from '@chakra-ui/react'

const banner = () => {
  return (
    <Center>
      <Box boxSize={{ base: '12rem', md: '22rem', sm: '18rem' }}>
        <Image src="../images/banner.svg" alt="banner" />
      </Box>
    </Center>
  )
}

export default banner
