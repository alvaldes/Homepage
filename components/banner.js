import { Image, Box, Center } from '@chakra-ui/react'

const banner = () => {
  return (
    <Center>
      <Box boxSize={{ base: '12em', md: '22em', sm: '18em' }}>
        <Image src="../images/banner.svg" alt="banner" />
      </Box>
    </Center>
  )
}

export default banner
